// Predefined packet values (unchanged)
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
    probe_portsweep: {
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
    r2l_guess_passwd: {
        duration: 0,
        protocol_type: 'tcp',
        service: 'telnet',
        flag: 'SF',
        src_bytes: 100,
        dst_bytes: 100,
        land: 0,
        wrong_fragment: 0,
        urgent: 0,
        hot: 0,
        num_failed_logins: 5,
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
        count: 10,
        srv_count: 10,
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
    u2r_buffer_overflow: {
        duration: 0,
        protocol_type: 'tcp',
        service: 'telnet',
        flag: 'SF',
        src_bytes: 1000,
        dst_bytes: 1000,
        land: 0,
        wrong_fragment: 0,
        urgent: 0,
        hot: 30,
        num_failed_logins: 0,
        logged_in: 1,
        num_compromised: 1,
        root_shell: 1,
        su_attempted: 0,
        num_root: 1,
        num_file_creations: 0,
        num_shells: 1,
        num_access_files: 0,
        num_outbound_cmds: 0,
        is_host_login: 0,
        is_guest_login: 0,
        count: 1,
        srv_count: 1,
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
    }
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
    resultsDiv.style.display = 'block';
    resultsDiv.classList.remove('show');
    predictionsDiv.innerHTML = '<div class="alert alert-info"><span>Predicting...</span></div>';
    chartCanvas.style.display = 'none'; // Hide chart initially

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
        
        
        // Display consensus result
        predictionsDiv.innerHTML = '';
        const consensus = result.consensus;
        if (consensus.error) {
            predictionsDiv.innerHTML = `<div class="alert alert-danger">Error: ${consensus.error}</div>`;
        } else {
            // Determine alert class
            const alertClass = {
                'Normal': 'alert-success',
                'Probe': 'alert-warning',
                'R2L': 'alert-orange',
                'U2R': 'alert-orange',
                'DoS': 'alert-danger'
            }[consensus.prediction] || 'alert-secondary';

            // Main consensus output
            const consensusDiv = document.createElement('div');
            consensusDiv.className = `alert ${alertClass} mb-3`;
            consensusDiv.innerHTML = `<strong>${severityIcons[consensus.prediction]} Flagged as ${consensus.prediction}</strong>: ${consensus.nature} (Majority vote: ${consensus.vote_count})` +
                                     (consensus.disagreement ? '<br><small class="text-muted">Note: Models disagree, indicating potential ambiguity.</small>' : '');
            predictionsDiv.appendChild(consensusDiv);

            // Model predictions
            const modelDiv = document.createElement('div');
            modelDiv.innerHTML = '<strong>Model Predictions:</strong><ul>';
            for (const [model, prediction] of Object.entries(result)) {
                if (model === 'consensus') continue;
                if (prediction.error) {
                    modelDiv.innerHTML += `<li>${model}: Error - ${prediction.error}</li>`;
                } else {
                    const probText = prediction.probabilities ? ` (Probabilities: ${prediction.probabilities.map(p => p.toFixed(4)).join(', ')})` : '';
                    modelDiv.innerHTML += `<li>${model}: ${prediction.prediction}${probText}</li>`;
                }
            }
            modelDiv.innerHTML += '</ul>';
            predictionsDiv.appendChild(modelDiv);

            // Render probability chart
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
                            label: 'CNN-LSTM Probabilities',
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
                                title: { display: true, text: 'Probability', color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529' },
                                ticks: { color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529' }
                            },
                            x: {
                                title: { display: true, text: 'Class', color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529' },
                                ticks: { color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529' }
                            }
                        },
                        plugins: {
                            legend: { labels: { color: document.body.classList.contains('dark-theme') ? '#e9ecef' : '#212529' } },
                            tooltip: { callbacks: { label: (context) => `${context.parsed.y.toFixed(4)}` } }
                        }
                    }
                });
            }

            // Show download button
            document.getElementById('downloadBtn').style.display = 'block';
        }

        // Animate results
        setTimeout(() => {
            resultsDiv.classList.add('show');
        }, 100);
        
    } catch (error) {
        console.error('Submission error:', error);
        predictionsDiv.innerHTML = `<div class="alert alert-danger">Error: Failed to get prediction. Please try again later or contact support. (Error: ${error.message})</div>`;
        document.getElementById('downloadBtn').style.display = 'none';
        chartCanvas.style.display = 'none';
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
        chartCanvas.chart.options.scales.y.title.color = isDark ? '#e9ecef' : '#212529';
        chartCanvas.chart.options.scales.y.ticks.color = isDark ? '#e9ecef' : '#212529';
        chartCanvas.chart.options.scales.x.title.color = isDark ? '#e9ecef' : '#212529';
        chartCanvas.chart.options.scales.x.ticks.color = isDark ? '#e9ecef' : '#212529';
        chartCanvas.chart.options.plugins.legend.labels.color = isDark ? '#e9ecef' : '#212529';
        chartCanvas.chart.update();
    }
});