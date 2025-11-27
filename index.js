// index.js
const express = require('express');
const app = express();

// Student Information
const fullName = 'Rudy M. Esperida Jr.';
const classSection = 'BSIT Network Technology - 4101 (Group 4)';
const quote = 'Learning is a never-ending process.';


app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Profile - ${fullName}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      position: relative;
      overflow: hidden;
    }
    body::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: 
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 40px, rgba(255,255,255,0.03) 41px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 40px, rgba(255,255,255,0.03) 41px);
      animation: gridMove 20s linear infinite;
    }
    @keyframes gridMove {
      0% { transform: translate(0, 0); }
      100% { transform: translate(40px, 40px); }
    }
    .container {
      position: relative;
      z-index: 1;
      max-width: 900px;
      width: 100%;
    }
    .card {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
      overflow: hidden;
      animation: slideUp 0.8s ease-out;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .card-header {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
      padding: 50px 40px;
      position: relative;
      overflow: hidden;
    }
    .card-header::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      animation: rotate 25s linear infinite;
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .header-content {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      gap: 30px;
    }
    .avatar-container { position: relative; }
    .avatar {
      width: 120px;
      height: 120px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 42px;
      font-weight: bold;
      color: white;
      border: 4px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      position: relative;
    }
    .avatar-badge {
      position: absolute;
      bottom: -8px;
      right: -8px;
      background: #10b981;
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
      border: 3px solid white;
    }
    .header-info { flex: 1; color: white; }
    .header-info h1 {
      font-size: 32px;
      margin-bottom: 8px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
    .header-info .program {
      font-size: 16px;
      opacity: 0.95;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tech-icon {
      display: inline-block;
      padding: 4px 10px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      font-size: 14px;
    }
    .card-body { padding: 40px; }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .info-item {
      padding: 24px;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 16px;
      border-left: 5px solid #2a5298;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .info-item:hover {
      transform: translateX(8px) translateY(-4px);
      box-shadow: 0 8px 24px rgba(42, 82, 152, 0.3);
    }
    .info-label {
      font-size: 12px;
      font-weight: 700;
      color: #2a5298;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .info-value {
      font-size: 18px;
      color: #1e293b;
      font-weight: 600;
    }
    .quote-section {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
      padding: 32px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(30, 60, 114, 0.3);
      position: relative;
      overflow: hidden;
    }
    .quote-icon {
      font-size: 64px;
      color: rgba(255, 255, 255, 0.15);
      position: absolute;
      top: 20px;
      left: 20px;
      font-family: Georgia, serif;
    }
    .quote-text {
      color: white;
      font-style: italic;
      font-size: 20px;
      line-height: 1.6;
      padding-left: 40px;
      font-weight: 300;
    }
    .footer {
      padding: 20px 40px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 15px;
    }
    .group-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      background: linear-gradient(135deg, #2a5298 0%, #7e22ce 100%);
      color: white;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
    }
    .timestamp { color: #64748b; font-size: 13px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <div class="header-content">
          <div class="avatar-container">
            <div class="avatar">RE</div>
            <div class="avatar-badge">🎓 BSIT</div>
          </div>
          <div class="header-info">
            <h1>${fullName}</h1>
            <div class="program">
              <span class="tech-icon">💻</span>
              <span>Bachelor of Science in Information Technology</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card-body">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">👤 Full Name</div>
            <div class="info-value">${fullName}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">📚 Class/Section</div>
            <div class="info-value">${classSection}</div>
          </div>
        </div>
        
        <div class="quote-section">
          <div class="quote-icon">"</div>
          <div class="quote-content">
            <div class="quote-label">Personal Motto</div>
            <div class="quote-text">${quote}</div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="group-badge">👥 Group 4</div>
        <div class="timestamp">
          Last updated: <span id="datetime"></span>
        </div>
      </div>
    </div>
  </div>

  <script>
    function updateDateTime() {
      const now = new Date();
      const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
    }
    updateDateTime();
  </script>
</body>
</html>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
