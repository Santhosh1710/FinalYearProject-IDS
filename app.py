import pandas as pd
import numpy as np
import joblib
from tensorflow.keras.models import load_model
from sklearn.preprocessing import LabelEncoder
from flask import Flask, request, jsonify, render_template
from collections import Counter
import os
import logging
import sys

app = Flask(__name__)

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Log environment and dependencies
logger.info(f"Current directory: {os.getcwd()}")
logger.info(f"Files in directory: {os.listdir('.')}")
logger.info(f"Python version: {sys.version}")
logger.info(f"Numpy version: {np.__version__}")
try:
    import tensorflow as tf
    logger.info(f"TensorFlow version: {tf.__version__}")
except ImportError:
    logger.error("TensorFlow not installed")

# Define packet nature descriptions
def get_packet_nature(predicted_class):
    nature_map = {
        'Normal': "Benign (Normal) - This packet represents normal network traffic.",
        'DoS': "Malicious (DoS Attack) - This packet is part of a Denial-of-Service attack aiming to disrupt service availability.",
        'Probe': "Malicious (Probe Attack) - This packet is part of a reconnaissance attack scanning for vulnerabilities.",
        'R2L': "Malicious (R2L Attack) - This packet is part of an unauthorized access attempt from a remote machine.",
        'U2R': "Malicious (U2R Attack) - This packet is part of an attempt to gain unauthorized root access."
    }
    return nature_map.get(predicted_class, "Unknown - This packet type is not recognized.")

# Preprocessing functions
def one_hot(df, cols):
    try:
        for each in cols:
            dummies = pd.get_dummies(df[each], prefix=each, drop_first=False)
            df = pd.concat([df, dummies], axis=1)
            df = df.drop(columns=[each])
        return df
    except Exception as e:
        logger.error(f"One-hot encoding error: {str(e)}")
        raise

def normalize(df, cols):
    try:
        result = df.copy()
        for feature_name in cols:
            if result[feature_name].dtype == bool:
                result[feature_name] = result[feature_name].astype(int)
            if result[feature_name].dtype == 'object':
                result[feature_name] = pd.to_numeric(result[feature_name], errors='coerce')
            if pd.api.types.is_numeric_dtype(result[feature_name]):
                max_value = result[feature_name].max()
                min_value = result[feature_name].min()
                if max_value > min_value:
                    result[feature_name] = (result[feature_name] - min_value) / (max_value - min_value)
        return result
    except Exception as e:
        logger.error(f"Normalization error: {str(e)}")
        raise

# Initialize LabelEncoder
le = LabelEncoder()
le.fit(['DoS', 'Normal', 'Probe', 'R2L', 'U2R'])
class_names = le.classes_

# Model files
# classical_models = {
#     'AdaBoost': 'adaboost_model.pkl',
#     'Bagging': 'bagging_model.pkl',
#     'Random Forest': 'random_forest_model.pkl',
#     'Voting Classifier': 'voting_classifier_2.pkl'
# }
cnn_lstm_model_file = 'ids_lstm_model_final.h5'

# Verify model files exist
required_files = [cnn_lstm_model_file, 'KDDTrain+.txt']
missing_files = [f for f in required_files if not os.path.exists(f)]
if missing_files:
    logger.error(f"Missing files: {missing_files}")
else:
    logger.info("All required files present")

# Load training columns for alignment
training_columns = None
try:
    logger.info("Loading KDDTrain+.txt...")
    training_data = pd.read_csv('KDDTrain+.txt', header=None, usecols=range(42))
    training_data.columns = ['duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes', 'land',
                             'wrong_fragment', 'urgent', 'hot', 'num_failed_logins', 'logged_in', 'num_compromised',
                             'root_shell', 'su_attempted', 'num_root', 'num_file_creations', 'num_shells',
                             'num_access_files', 'num_outbound_cmds', 'is_host_login', 'is_guest_login', 'count',
                             'srv_count', 'serror_rate', 'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate',
                             'same_srv_rate', 'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count',
                             'dst_host_srv_count', 'dst_host_same_srv_rate', 'dst_host_diff_srv_rate',
                             'dst_host_same_src_port_rate', 'dst_host_srv_diff_host_rate', 'dst_host_serror_rate',
                             'dst_host_srv_serror_rate', 'dst_host_rerror_rate', 'dst_host_srv_rerror_rate',
                             'subclass']
    training_data = training_data.drop(['subclass'], axis=1)
    training_data = one_hot(training_data, cols=['protocol_type', 'service', 'flag'])
    training_columns = training_data.columns
    logger.info(f"Training columns loaded: {len(training_columns)}")
except FileNotFoundError:
    logger.warning("KDDTrain+.txt not found. Using input data columns.")
except Exception as e:
    logger.error(f"Error loading KDDTrain+.txt: {str(e)}")
    training_columns = None

# Load models
# models = {}
# for name, model_file in classical_models.items():
#     if not os.path.exists(model_file):
#         logger.error(f"Model file {model_file} not found")
#         models[name] = None
#         continue
#     try:
#         logger.info(f"Loading {name} model...")
#         models[name] = joblib.load(model_file)
#         logger.info(f"{name} model loaded successfully")
#     except Exception as e:
#         logger.error(f"Failed to load {name} model: {str(e)}")
#         models[name] = None

if not os.path.exists(cnn_lstm_model_file):
    logger.error(f"CNN-LSTM model file {cnn_lstm_model_file} not found")
    models['CNN-LSTM'] = None
else:
    try:
        logger.info("Loading CNN-LSTM model...")
        models['CNN-LSTM'] = load_model(cnn_lstm_model_file)
        logger.info("CNN-LSTM model loaded successfully")
    except Exception as e:
        logger.error(f"Failed to load CNN-LSTM model: {str(e)}")
        models['CNN-LSTM'] = None

@app.route('/')
def index():
    logger.info("Serving index.html")
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        logger.info("Received form data: %s", dict(request.form))
        input_data = request.form.to_dict()

        # Convert numeric fields to float/int
        numeric_fields = ['duration', 'src_bytes', 'dst_bytes', 'land', 'wrong_fragment', 'urgent', 'hot',
                          'num_failed_logins', 'logged_in', 'num_compromised', 'root_shell', 'su_attempted',
                          'num_root', 'num_file_creations', 'num_shells', 'num_access_files', 'num_outbound_cmds',
                          'is_host_login', 'is_guest_login', 'count', 'srv_count', 'serror_rate', 'srv_serror_rate',
                          'rerror_rate', 'srv_rerror_rate', 'same_srv_rate', 'diff_srv_rate', 'srv_diff_host_rate',
                          'dst_host_count', 'dst_host_srv_count', 'dst_host_same_srv_rate', 'dst_host_diff_srv_rate',
                          'dst_host_same_src_port_rate', 'dst_host_srv_diff_host_rate', 'dst_host_serror_rate',
                          'dst_host_srv_serror_rate', 'dst_host_rerror_rate', 'dst_host_srv_rerror_rate']
        for field in numeric_fields:
            if field in input_data:
                try:
                    input_data[field] = float(input_data[field])
                except ValueError:
                    logger.error(f"Invalid numeric value for {field}: {input_data[field]}")
                    return jsonify({'error': f"Invalid numeric value for {field}: {input_data[field]}"}), 400
        
        # Create DataFrame
        input_df = pd.DataFrame([input_data])
        logger.info("Input DataFrame columns: %s", input_df.columns.tolist())

        # Preprocess input
        cols = ['protocol_type', 'service', 'flag']
        input_df = one_hot(input_df, cols)
        input_df = normalize(input_df, input_df.columns)
        logger.info("Preprocessed DataFrame shape: %s", input_df.shape)

        # Validate feature count
        if training_columns is not None:
            logger.info("Aligning input with training columns...")
            input_df = input_df.reindex(columns=training_columns, fill_value=0)
            logger.info("Final input shape: %s", input_df.shape)
        else:
            logger.warning("No training columns available. Using input data columns.")

        input_array = input_df.values
        input_array_cnn_lstm = input_array.reshape(input_array.shape[0], input_array.shape[1], 1)

        # Make predictions
        results = {}
        model_predictions = []
        # for name, model_file in classical_models.items():
        #     model = models.get(name)
        #     if model is None:
        #         results[name] = {'error': f"Model {name} not loaded"}
        #         logger.error(f"Model {name} not loaded for prediction")
        #         continue
        #     try:
        #         prediction = model.predict(input_array)
        #         logger.info(f"{name} raw prediction: {prediction}")
        #         if np.issubdtype(prediction.dtype, np.integer):
        #             predicted_class = le.inverse_transform(prediction)[0]
        #         else:
        #             predicted_class = str(prediction[0])
        #             if predicted_class not in class_names:
        #                 results[name] = {'error': f"Invalid class: {predicted_class}"}
        #                 logger.error(f"Invalid class from {name}: {predicted_class}")
        #                 continue
        #         results[name] = {
        #             'prediction': predicted_class,
        #             'nature': get_packet_nature(predicted_class)
        #         }
        #         model_predictions.append(predicted_class)
        #         logger.info(f"{name} processed prediction: {predicted_class}")
        #     except Exception as e:
        #         results[name] = {'error': f"Failed to predict with {name}: {str(e)}"}
        #         logger.error(f"{name} prediction error: {str(e)}")

        # CNN-LSTM prediction
        cnn_lstm_model = models.get('CNN-LSTM')
        if cnn_lstm_model is None:
            results['CNN-LSTM'] = {'error': "CNN-LSTM model not loaded"}
            logger.error("CNN-LSTM model not loaded for prediction")
        else:
            try:
                prediction = cnn_lstm_model.predict(input_array_cnn_lstm, verbose=0)
                logger.info(f"CNN-LSTM raw prediction: {prediction}")
                predicted_class_idx = np.argmax(prediction, axis=1)
                predicted_class = le.inverse_transform(predicted_class_idx)[0]
                results['CNN-LSTM'] = {
                    'prediction': predicted_class,
                    'nature': get_packet_nature(predicted_class),
                    'probabilities': prediction[0].tolist()
                }
                model_predictions.append(predicted_class)
                logger.info(f"CNN-LSTM processed prediction: {predicted_class}")
            except Exception as e:
                results['CNN-LSTM'] = {'error': f"Failed to predict with CNN-LSTM: {str(e)}"}
                logger.error(f"CNN-LSTM prediction error: {str(e)}")
                
        # Compute consensus (majority vote)
        if model_predictions:
            vote_counts = Counter(model_predictions)
            max_count = max(vote_counts.values())
            priority = ['DoS', 'Probe', 'R2L', 'U2R', 'Normal']
            candidates = [cls for cls, count in vote_counts.items() if count == max_count]
            consensus_class = min(candidates, key=lambda x: priority.index(x))
            total_votes = len(model_predictions)
            results['consensus'] = {
                'prediction': consensus_class,
                'nature': get_packet_nature(consensus_class),
                'vote_count': f"{vote_counts[consensus_class]}/{total_votes}",
                'disagreement': len(vote_counts) > 1
            }
            logger.info(f"Consensus: {results['consensus']}")
        else:
            results['consensus'] = {'error': "No valid predictions from any model"}
            logger.error("Consensus error: No valid predictions")

        logger.info("Final results: %s", results)
        return jsonify(results)
    except Exception as e:
        logger.error(f"General prediction error: {str(e)}")
        return jsonify({'error': f"Prediction failed: {str(e)}"}), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)