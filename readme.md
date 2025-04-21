# Network Packet Classifier

A machine learning-powered web app to classify network packets as Normal, DoS, Probe, R2L, or U2R using various ML models including an advanced CNN-LSTM.

---

## 📑 Table of Contents

- [Features](#features)  
- [Screenshots](#screenshots)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Deployment](#deployment)  
- [Technologies](#technologies)  
- [Contributing](#contributing)  
- [License](#license)

---

## 🚀 Features

- **Packet Analysis**: Classify network packets as Normal, DoS, Probe, R2L, or U2R using multiple ML models.
- **CNN-LSTM Highlight**: Prominently displays predictions from the advanced CNN-LSTM model.
- **Predefined Packets**: Select from sample packets (e.g., Normal HTTP, DoS Smurf) for quick testing.
- **Interactive UI**: Collapsible form sections, theme toggle (light/dark), and animated results.
- **Probability Visualization**: Bar chart showing CNN-LSTM prediction probabilities.
- **Downloadable Results**: Export predictions as a text file.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## 📷 Screenshots

- **Landing Page - Light Theme**
  ![LandingPage](https://github.com/user-attachments/assets/50fab626-5dbe-4e02-9d94-a30dc7d7f78c)
- **Landing Page - Dark Theme**
![DarkThemeLandingPage](https://github.com/user-attachments/assets/579ab44b-786b-4e96-a828-b9f4ef92967c)

- **Prediction Results**  
  * Normal-Http Packet
    ![image](https://github.com/user-attachments/assets/a0846705-b552-43fd-931f-13967ed9112f)
  * DoS-Smurf Packet
    ![image](https://github.com/user-attachments/assets/d1009f93-89cd-4c50-bf0d-8bd6632f368d)
  * Probe-Portsweep Packet
    ![image](https://github.com/user-attachments/assets/b0da7497-f02d-4d31-a559-83d22c98559c)
  * GuessPassword Packet
    ![image](https://github.com/user-attachments/assets/bd633423-2547-41f4-9dc8-d0a78c90c7f9)
  * BufferOverflow Packet
    ![image](https://github.com/user-attachments/assets/529e9597-b79e-488c-9a38-e5e41b86a8b9)

  Results displaying CNN-LSTM prediction with a probability chart.  

---

## 🛠️ Installation

### Prerequisites

- Python 3.8+
- Git
- A modern web browser (Chrome, Firefox, etc.)

### Steps

```bash
# Clone the Repository
git clone https://github.com/Santhosh1710/FinalYearProject-IDS.git
cd network-packet-classifier

# Create a Virtual Environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Dependencies
pip install -r requirements.txt

# Run the Application
python app.py
```

Visit [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## 📋 Usage

1. **Select a Predefined Packet**  
   Choose a sample packet (e.g., "DoS Smurf") from the dropdown to auto-fill the form, or manually enter packet details (e.g., Duration, Protocol Type).

2. **Analyze Packet**  
   Click **Analyze Packet** to submit the form and view predictions from CNN-LSTM, consensus, and other models (e.g., AdaBoost, Random Forest).

3. **Explore Results**  
   - CNN-LSTM prediction highlighted with a probability chart  
   - Download results via the **Download Prediction** button

4. **Toggle Theme**  
   Click **Toggle Theme** to switch between light and dark modes. All UI elements adjust accordingly.

---

## 📁 Project Structure

```
network-packet-classifier/
├── static/
│   ├── css/
│   │   └── styles.css       # Custom styles (solid background, placeholder colors)
│   ├── js/
│   │   └── script.js        # Frontend logic (form handling, chart rendering)
├── templates/
│   └── index.html           # Main HTML template (form, results)
├── app.py                   # Flask backend
├── requirements.txt         # Python dependencies
└── README.md                # Project documentation
```

---

## 🧰 Technologies

- **Backend**: Flask, Python  
- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5.3.0  
- **Visualization**: Chart.js 3.9.1  
- **Fonts**: Inter (Google Fonts)  
- **Icons**: Font Awesome 6.4.0  

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository  
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

> Please include tests and update documentation as needed.

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Santhosh Kumar](https://github.com/Santhosh1710/)
