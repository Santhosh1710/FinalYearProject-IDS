// Predefined packet values
const predefinedPackets = {
    normal_http: {
        duration: 0,
        protocol_type: 'tcp',
        service: 'http',
        flag: 'SF',
        src_bytes: 181,
        dst_bytes: 5450,
        land: 0,
        wrong_fragment: 0,
        urgent: 0,
        hot: 0,
        num_failed_logins: 0,
        logged_in: 1,
        num_compromised: 0,
        root_shell: 0,
        su_attempted: 0,
        num_root: 0,
        num_file_creations: 0,
        num_shells: 0,
        num_access_files: 0,
        num_outbound_cmds: 0,
        is_host_login: 0,
        is_guest_login: 0,
        count: 8,
        srv_count: 8,
        serror_rate: 0.0,
        srv_serror_rate: 0.0,
        rerror_rate: 0.0,
        srv_rerror_rate: 0.0,
        same_srv_rate: 1.0,
        diff_srv_rate: 0.0,
        srv_diff_host_rate: 0.0,
        dst_host_count: 9,
        dst_host_srv_count: 9,
        dst_host_same_srv_rate: 1.0,
        dst_host_diff_srv_rate: 0.0,
        dst_host_same_src_port_rate: 0.11,
        dst_host_srv_diff_host_rate: 0.0,
        dst_host_serror_rate: 0.0,
        dst_host_srv_serror_rate: 0.0,
        dst_host_rerror_rate: 0.0,
        dst_host_srv_rerror_rate: 0.0
    },
    dos_smurf: {
        duration: 0,
        protocol_type: 'icmp',
        service: 'eco_i',
        flag: 'SF',
        src_bytes: 0,
        dst_bytes: 0,
        land: 0,
        wrong_fragment: 0,
        urgent: 0,
        hot: 0,
        num_failed_logins: 0,
        logged_in: 0,
        num_compromised: 0,
        root_shell: 0,
        su_attempted: 0,
        num_root: 0,
        num_file_creations: 0,
        num_shells: 0,
        num_access_files: 0,
        num_outbound_cmds: 0,
        is_host_login: 0,
        is_guest_login: 0,
        count: 511,
        srv_count: 511,
        serror_rate: 0.0,
        srv_serror_rate: 0.0,
        rerror_rate: 0.0,
        srv_rerror_rate: 0.0,
        same_srv_rate: 1.0,
        diff_srv_rate: 0.0,
        srv_diff_host_rate: 0.0,
        dst_host_count: 255,
        dst_host_srv_count: 255,
        dst_host_same_srv_rate: 1.0,
        dst_host_diff_srv_rate: 0.0,
        dst_host_same_src_port_rate: 0.0,
        dst_host_srv_diff_host_rate: 0.0,
        dst_host_serror_rate: 0.0,
        dst_host_srv_serror_rate: 0.0,
        dst_host_rerror_rate: 0.0,
        dst_host_srv_rerror_rate: 0.0
    },
    r2l_guess_passwd: {
        duration: 0,
        protocol_type: 'tcp',
        service: 'telnet',
        flag: 'S0',
        src_bytes: 0,
        dst_bytes: 0,
        land: 0,
        wrong_fragment: 0,
        urgent: 0,
        hot: 0,
        num_failed_logins: 0,
        logged_in: 0,
        num_compromised: 0,
        root_shell: 0,
        su_attempted: 0,
        num_root: 0,
        num_file_creations: 0,
        num_shells: 0,
        num_access_files: 0,
        num_outbound_cmds: 0,
        is_host_login: 0,
        is_guest_login: 0,
        count: 100,
        srv_count: 100,
        serror_rate: 1.0,
        srv_serror_rate: 1.0,
        rerror_rate: 0.0,
        srv_rerror_rate: 0.0,
        same_srv_rate: 1.0,
        diff_srv_rate: 0.0,
        srv_diff_host_rate: 0.0,
        dst_host_count: 255,
        dst_host_srv_count: 255,
        dst_host_same_srv_rate: 1.0,
        dst_host_diff_srv_rate: 0.0,
        dst_host_same_src_port_rate: 0.0,
        dst_host_srv_diff_host_rate: 0.0,
        dst_host_serror_rate: 1.0,
        dst_host_srv_serror_rate: 1.0,
        dst_host_rerror_rate: 0.0,
        dst_host_srv_rerror_rate: 0.0
    },
    u2r_buffer_overflow: {
    duration: 30,
    protocol_type: 'tcp',
    service: 'telnet',
    flag: 'SF',
    src_bytes: 137,
    dst_bytes: 1403,
    land: 0,
    wrong_fragment: 0,
    urgent: 0,
    hot: 0,
    num_failed_logins: 1,
    logged_in: 0,
    num_compromised: 0,
    root_shell: 0,
    su_attempted: 1,
    num_root: 0,
    num_file_creations: 0,
    num_shells: 0,
    num_access_files: 0,
    num_outbound_cmds: 0,
    is_host_login: 0,
    is_guest_login: 0,
    count: 1,
    srv_count: 1,
    serror_rate: 0.00,
    srv_serror_rate: 0.00,
    rerror_rate: 0.00,
    srv_rerror_rate: 0.00,
    same_srv_rate: 1.00,
    diff_srv_rate: 0.00,
    srv_diff_host_rate: 0.00,
    dst_host_count: 235,
    dst_host_srv_count: 17,
    dst_host_same_srv_rate: 0.07,
    dst_host_diff_srv_rate: 0.03,
    dst_host_same_src_port_rate: 0.00,
    dst_host_srv_diff_host_rate: 0.00,
    dst_host_serror_rate: 0.00,
    dst_host_srv_serror_rate: 0.00,
    dst_host_rerror_rate: 0.00,
    dst_host_srv_rerror_rate: 0.00
},
    probe_portsweep:{
        duration: 0,
        protocol_type: 'tcp',
        service: 'other',
        flag: 'REJ',
        src_bytes: 0,
        dst_bytes: 0,
        land: 0,
        wrong_fragment: 0,
        urgent: 0,
        hot: 0,
        num_failed_logins: 0,
        logged_in: 0,
        num_compromised: 0,
        root_shell: 0,
        su_attempted: 0,
        num_root: 0,
        num_file_creations: 0,
        num_shells: 0,
        num_access_files: 0,
        num_outbound_cmds: 0,
        is_host_login: 0,
        is_guest_login: 0,
        count: 461,
        srv_count: 1,
        serror_rate: 0.08,
        srv_serror_rate: 0.00,
        rerror_rate: 0.92,
        srv_rerror_rate: 1.00,
        same_srv_rate: 0.00,
        diff_srv_rate: 1.00,
        srv_diff_host_rate: 0.00,
        dst_host_count: 255,
        dst_host_srv_count: 1,
        dst_host_same_srv_rate: 0.00,
        dst_host_diff_srv_rate: 1.00,
        dst_host_same_src_port_rate: 0.04,
        dst_host_srv_diff_host_rate: 0.00,
        dst_host_serror_rate: 0.96,
        dst_host_srv_serror_rate: 1.00,
        dst_host_rerror_rate: 0.00,
        dst_host_srv_rerror_rate: 1.00
    },
};

// Severity icons
const severityIcons = {
    'Normal': '✅',
    'Probe': '🕵️',
    'R2L': '🔒',
    'U2R': '🔒',
    'DoS': '🚨'
};

// Handle dropdown selection
document.getElementById('predefined_packet').addEventListener('change', (e) => {
    const selectedPacket = e.target.value;
    if (selectedPacket && predefinedPackets[selectedPacket]) {
        const packet = predefinedPackets[selectedPacket];
        Object.keys(packet).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.value = packet[key];
            }
        });
    } else {
        document.getElementById('predictionForm').reset();
    }
});

// Handle form submission
document.getElementById('predictionForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Show loading indicator
    const resultsDiv = document.getElementById('results');
    const predictionsDiv = document.getElementById('predictions');
    const chartCanvas = document.getElementById('probChart');
    const resultsHeader = document.getElementById('resultsHeader');
    resultsDiv.style.display = 'block';
    resultsDiv.classList.remove('show');
    predictionsDiv.innerHTML = '<div class="alert alert-info"><span>Predicting...</span></div>';
    chartCanvas.style.display = 'none';
    resultsHeader.className = 'card-header text-white bg-primary';

    // Send data to backend
    try {
        const response = await fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Backend response:', result);

        // Display results
        predictionsDiv.innerHTML = '';

        // Check if any predictions are available
        let has_predictions = false;
        for (const model in result) {
            if (model !== 'consensus' && !result[model].error) {
                has_predictions = true;
                break;
            }
        }

        if (!has_predictions && result.consensus.error) {
            predictionsDiv.innerHTML = `<div class="alert alert-danger">Error: ${result.consensus.error}</div>`;
            chartCanvas.style.display = 'none';
            document.getElementById('downloadBtn').style.display = 'none';
            resultsHeader.className = 'card-header text-white bg-danger';
            return;
        }

        // Set results header based on CNN-LSTM or consensus
        const headerClass = {
            'Normal': 'bg-success',
            'Probe': 'bg-warning',
            'R2L': 'bg-orange',
            'U2R': 'bg-orange',
            'DoS': 'bg-danger'
        }[result['CNN-LSTM'] && !result['CNN-LSTM'].error ? result['CNN-LSTM'].prediction : result.consensus.prediction] || 'bg-primary';
        resultsHeader.className = `card-header text-white ${headerClass}`;

        // Display CNN-LSTM prominently
        if (result['CNN-LSTM'] && !result['CNN-LSTM'].error) {
            const cnn_lstm = result['CNN-LSTM'];
            const alertClass = {
                'Normal': 'alert-success',
                'Probe': 'alert-warning',
                'R2L': 'alert-orange',
                'U2R': 'alert-orange',
                'DoS': 'alert-danger'
            }[cnn_lstm.prediction] || 'alert-primary';
            predictionsDiv.innerHTML += `
                <div class="alert ${alertClass} cnn-lstm-highlight mb-4" role="alert">
                    <h4>${severityIcons[cnn_lstm.prediction]} CNN-LSTM (Featured Model) <span class="badge bg-success">Advanced</span></h4>
                    <p><strong>Prediction:</strong> ${cnn_lstm.prediction}</p>
                    <p><strong>Nature:</strong> ${cnn_lstm.nature}</p>
                    <p><strong>Probabilities:</strong> ${cnn_lstm.probabilities.map(p => p.toFixed(4)).join(', ')}</p>
                </div>
            `;
        } else {
            predictionsDiv.innerHTML += `
                <div class="alert alert-warning mb-4" role="alert">
                    <h4>CNN-LSTM</h4>
                    <p>Error: ${result['CNN-LSTM'].error}</p>
                </div>
            `;
        }

        // // Display consensus
        // const consensus = result.consensus;
        // if (!consensus.error) {
        //     const alertClass = {
        //         'Normal': 'alert-success',
        //         'Probe': 'alert-warning',
        //         'R2L': 'alert-orange',
        //         'U2R': 'alert-orange',
        //         'DoS': 'alert-danger'
        //     }[consensus.prediction] || 'alert-info';
        //     predictionsDiv.innerHTML += `
        //         <div class="alert ${alertClass} mb-4" role="alert">
        //             <h4>${severityIcons[consensus.prediction]} Consensus (Majority Vote)</h4>
        //             <p><strong>Prediction:</strong> ${consensus.prediction}</p>
        //             <p><strong>Nature:</strong> ${consensus.nature}</p>
        //             <p><strong>Vote Count:</strong> ${consensus.vote_count}</p>
        //             <p><strong>Disagreement:</strong> ${consensus.disagreement ? 'Yes' : 'No'}</p>
        //         </div>
        //     `;
        // } else {
        //     predictionsDiv.innerHTML += `
        //         <div class="alert alert-warning mb-4" role="alert">
        //             <h4>Consensus</h4>
        //             <p>Error: ${consensus.error}</p>
        //         </div>
        //     `;
        // }

        // // Display other models (subdued)
        // const other_models = ['AdaBoost', 'Bagging', 'Random Forest', 'Voting Classifier'];
        // predictionsDiv.innerHTML += '<div class="other-models"><strong>Other Model Predictions:</strong><ul>';
        // other_models.forEach(model => {
        //     if (result[model] && !result[model].error) {
        //         predictionsDiv.innerHTML += `
        //             <li>${model}: ${result[model].prediction} (${result[model].nature})</li>
        //         `;
        //     } else {
        //         predictionsDiv.innerHTML += `
        //             <li>${model}: Error - ${result[model].error}</li>
        //         `;
        //     }
        // });
        // predictionsDiv.innerHTML += '</ul></div>';

        // Render probability chart for CNN-LSTM
        if (result['CNN-LSTM'] && result['CNN-LSTM'].probabilities) {
            chartCanvas.style.display = 'block';
            const ctx = chartCanvas.getContext('2d');

            // Destroy existing chart if any
            if (chartCanvas.chart) {
                chartCanvas.chart.destroy();
            }

            chartCanvas.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['DoS', 'Normal', 'Probe', 'R2L', 'U2R'],
                    datasets: [{
                        label: 'CNN-LSTM Probabilities (Featured Model)',
                        data: result['CNN-LSTM'].probabilities,
                        backgroundColor: [
                            '#dc3545', // DoS (red)
                            '#28a745', // Normal (green)
                            '#ffc107', // Probe (yellow)
                            '#fd7e14', // R2L (orange)
                            '#fd7e14'  // U2R (orange)
                        ],
                        borderColor: '#fff',
                        borderWidth: 1
                    }]
                },
                options: {
                    animation: { duration: 1000, easing: 'easeOutQuart' },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 1,
                            title: {
                                display: true,
                                text: 'Probability',
                                color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529',
                                font: { size: 16 }
                            },
                            ticks: { color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529' },
                            grid: { color: document.body.classList.contains('dark-theme') ? '#495057' : '#dee2e6' }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Class',
                                color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529',
                                font: { size: 16 }
                            },
                            ticks: { color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529' },
                            grid: { color: document.body.classList.contains('dark-theme') ? '#495057' : '#dee2e6' }
                        }
                    },
                    plugins: {
                        legend: { labels: { color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529' } },
                        title: {
                            display: true,
                            text: 'CNN-LSTM Probability Distribution',
                            color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529',
                            font: { size: 18 }
                        },
                        tooltip: { callbacks: { label: (context) => `${context.parsed.y.toFixed(4)}` } }
                    }
                }
            });
        }

        // Show download button
        document.getElementById('downloadBtn').style.display = 'block';

        // Animate results
        setTimeout(() => {
            resultsDiv.classList.add('show');
        }, 100);

    } catch (error) {
        console.error('Submission error:', error);
        predictionsDiv.innerHTML = `<div class="alert alert-danger">Error: Failed to get prediction. Please try again later or contact support. (Error: ${error.message})</div>`;
        document.getElementById('downloadBtn').style.display = 'none';
        chartCanvas.style.display = 'none';
        resultsHeader.className = 'card-header text-white bg-danger';
    }
});

// Clear form
document.getElementById('clearForm').addEventListener('click', () => {
    document.getElementById('predictionForm').reset();
    document.getElementById('predefined_packet').value = '';
    document.getElementById('results').style.display = 'none';
    document.getElementById('downloadBtn').style.display = 'none';
    const chartCanvas = document.getElementById('probChart');
    chartCanvas.style.display = 'none';
    if (chartCanvas.chart) {
        chartCanvas.chart.destroy();
    }
    document.getElementById('resultsHeader').className = 'card-header text-white bg-primary';
});

// Download prediction
document.getElementById('downloadBtn').addEventListener('click', () => {
    const text = document.getElementById('predictions').innerText;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'packet_prediction.txt';
    a.click();
    URL.revokeObjectURL(url);
});

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = document.getElementById('themeToggle').querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    // Update chart colors if chart exists
    const chartCanvas = document.getElementById('probChart');
    if (chartCanvas.chart) {
        const isDark = document.body.classList.contains('dark-theme');
        const textColor = isDark ? '#e9ecef' : '#212529';
        const gridColor = isDark ? '#495057' : '#dee2e6';
        const chartBg = isDark ? '#2c3236' : '#ffffff';

        chartCanvas.chart.options.scales.y.title.color = textColor;
        chartCanvas.chart.options.scales.y.ticks.color = textColor;
        chartCanvas.chart.options.scales.y.grid.color = gridColor;
        chartCanvas.chart.options.scales.x.title.color = textColor;
        chartCanvas.chart.options.scales.x.ticks.color = textColor;
        chartCanvas.chart.options.scales.x.grid.color = gridColor;
        chartCanvas.chart.options.plugins.legend.labels.color = textColor;
        chartCanvas.chart.options.plugins.title.color = textColor;
        chartCanvas.style.backgroundColor = chartBg;

        chartCanvas.chart.update();
    }
});