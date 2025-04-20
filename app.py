import pandas as pd
import numpy as np
import joblib
from tensorflow.keras.models import load_model
from sklearn.preprocessing import LabelEncoder
from sklearn.exceptions import NotFittedError
from flask import Flask, request, jsonify, render_template
from collections import Counter

app = Flask(__name__)

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
    for each in cols:
        dummies = pd.get_dummies(df[each], prefix=each, drop_first=False)
        df = pd.concat([df, dummies], axis=1)
        df = df.drop(columns=[each])
    return df

def normalize(df, cols):
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

# Initialize LabelEncoder
le = LabelEncoder()
le.fit(['DoS', 'Normal', 'Probe', 'R2L', 'U2R'])
class_names = le.classes_

# Model files
classical_models = {
    'AdaBoost': 'adaboost_model.pkl',
    'Bagging': 'bagging_model.pkl',
    'Random Forest': 'random_forest_model.pkl',
    'Voting Classifier': 'voting_classifier_2.pkl'
}
cnn_lstm_model_file = 'ids_lstm_model_final.h5'

# Load training columns for alignment (optional)
try:
    training_data = pd.read_csv('KDDTrain+.txt', header=None)
    training_data.columns = ['duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes', 'land', 
                             'wrong_fragment', 'urgent', 'hot', 'num_failed_logins', 'logged_in', 'num_compromised', 
                             'root_shell', 'su_attempted', 'num_root', 'num_file_creations', 'num_shells', 
                             'num_access_files', 'num_outbound_cmds', 'is_host_login', 'is_guest_login', 'count', 
                             'srv_count', 'serror_rate', 'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate', 
                             'same_srv_rate', 'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count', 
                             'dst_host_srv_count', 'dst_host_same_srv_rate', 'dst_host_diff_srv_rate', 
                             'dst_host_same_src_port_rate', 'dst_host_srv_diff_host_rate', 'dst_host_serror_rate', 
                             'dst_host_srv_serror_rate', 'dst_host_rerror_rate', 'dst_host_srv_rerror_rate', 
                             'subclass', 'difficulty_level']
    training_data = training_data.drop(['difficulty_level', 'subclass'], axis=1)
    training_data = one_hot(training_data, cols=['protocol_type', 'service', 'flag'])
    training_columns = training_data.columns
    print("Training columns loaded:", len(training_columns))
except FileNotFoundError:
    training_columns = None
    print("Warning: KDDTrain+.txt not found. Using input data columns.")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get form data
        input_data = request.form.to_dict()
        print("Received form data:", input_data)

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
                    return jsonify({'error': f"Invalid numeric value for {field}: {input_data[field]}"}), 400
        
        # Create DataFrame
        input_df = pd.DataFrame([input_data])
        print("Input DataFrame columns:", input_df.columns.tolist())

        # Preprocess input
        cols = ['protocol_type', 'service', 'flag']
        input_df = one_hot(input_df, cols)
        input_df = normalize(input_df, input_df.columns)
        print("Preprocessed DataFrame shape:", input_df.shape)

        # Validate feature count
        if training_columns is not None and input_df.shape[1] < len(training_columns):
            print("Warning: Input has fewer features than expected:", input_df.shape[1], "vs", len(training_columns))
            input_df = input_df.reindex(columns=training_columns, fill_value=0)
        else:
            print("Warning: Using input data columns for alignment.")
        print("Final input shape:", input_df.shape)

        input_array = input_df.values
        input_array_cnn_lstm = input_array.reshape(input_array.shape[0], input_array.shape[1], 1)

        # Make predictions
        results = {}
        model_predictions = []
        for name, model_file in classical_models.items():
            try:
                model = joblib.load(model_file)
                prediction = model.predict(input_array)
                print(f"{name} raw prediction:", prediction)
                if np.issubdtype(prediction.dtype, np.integer):
                    predicted_class = le.inverse_transform(prediction)[0]
                else:
                    predicted_class = str(prediction[0])
                    if predicted_class not in class_names:
                        results[name] = {'error': f"Invalid class: {predicted_class}"}
                        continue
                results[name] = {
                    'prediction': predicted_class,
                    'nature': get_packet_nature(predicted_class)
                }
                model_predictions.append(predicted_class)
                print(f"{name} processed prediction:", predicted_class)
            except Exception as e:
                results[name] = {'error': f"Failed to load or predict with {name}: {str(e)}"}
                print(f"{name} error:", str(e))

        try:
            cnn_lstm_model = load_model(cnn_lstm_model_file)
            prediction = cnn_lstm_model.predict(input_array_cnn_lstm)
            print("CNN-LSTM raw prediction:", prediction)
            predicted_class_idx = np.argmax(prediction, axis=1)
            predicted_class = le.inverse_transform(predicted_class_idx)[0]
            results['CNN-LSTM'] = {
                'prediction': predicted_class,
                'nature': get_packet_nature(predicted_class),
                'probabilities': prediction[0].tolist()
            }
            model_predictions.append(predicted_class)
            print("CNN-LSTM processed prediction:", predicted_class)
        except FileNotFoundError as e:
            results['CNN-LSTM'] = {'error': f"CNN-LSTM model not found: {str(e)}"}
            print("CNN-LSTM error:", str(e))
        except Exception as e:
            results['CNN-LSTM'] = {'error': f"Failed to predict with CNN-LSTM: {str(e)}"}
            print("CNN-LSTM error:", str(e))

        # Compute consensus (majority vote)
        if model_predictions:
            vote_counts = Counter(model_predictions)
            max_count = max(vote_counts.values())
            # Prioritize malicious classes in case of a tie
            priority = ['DoS', 'Probe', 'R2L', 'U2R', 'Normal']  # DoS > Probe > R2L > U2R > Normal
            candidates = [cls for cls, count in vote_counts.items() if count == max_count]
            consensus_class = min(candidates, key=lambda x: priority.index(x))
            total_votes = len(model_predictions)
            results['consensus'] = {
                'prediction': consensus_class,
                'nature': get_packet_nature(consensus_class),
                'vote_count': f"{vote_counts[consensus_class]}/{total_votes}",
                'disagreement': len(vote_counts) > 1
            }
            print("Consensus:", results['consensus'])
        else:
            results['consensus'] = {'error': "No valid predictions from any model."}
            print("Consensus error: No valid predictions.")

        print("Final results:", results)
        return jsonify(results)
    except Exception as e:
        print("General error:", str(e))
        return jsonify({'error': f"Prediction failed: {str(e)}"}), 500


if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)