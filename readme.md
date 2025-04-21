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
- ![LandingPage](https://github.com/user-attachments/assets/50fab626-5dbe-4e02-9d94-a30dc7d7f78c)
- **Landing Page - Dark Theme**
![DarkThemeLandingPage](https://github.com/user-attachments/assets/579ab44b-786b-4e96-a828-b9f4ef92967c)

- **Prediction Results**  
![NormalPacket](https://github.com/user-attachments/assets/4527ab9a-6de9-498e-b7c6-dd82e43c0a70)
![DOSPacket](https://github.com/user-attachments/assets/548d4c5a-84c5-4194-810a-164746e0128e)
![R2LPacket](https://github.com/user-attachments/assets/c7ae1eb7-1efe-485c-839a-3329f697a829)

  Results displaying CNN-LSTM prediction, consensus, and other models with a probability chart.  

---

## 🛠️ Installation

### Prerequisites

- Python 3.8+
- Git
- A modern web browser (Chrome, Firefox, etc.)

### Steps

```bash
# Clone the Repository
git clone https://github.com/your-username/network-packet-classifier.git
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
   - Consensus prediction and other model outputs  
   - Download results via the **Download Prediction** button

4. **Toggle Theme**  
   Click **Toggle Theme** to switch between light and dark modes. All UI elements adjust accordingly.

---

## 📁 Project Structure

```
network-packet-classifier/
├── images/                  # Store screenshots (e.g., light-theme-form.png)
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
- **Deployment**: Render  

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
