// index.js
const express = require('express');
const app = express();

// Student Information
const fullName = 'Rudy M. Esperida Jr.';
const classSection = 'BSIT Network Technology - 4101 (Group 4)';
const quote = 'Learning is a never-ending process.';

app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; padding: 40px;">
      <h1>Student Info</h1>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Class/Section:</strong> ${classSection}</p>
      <blockquote style="font-style: italic; color: #555;">"${quote}"</blockquote>
    </div>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
