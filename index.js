const express = require('express');
const app = express();

const generateResume = require('./resume');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/download', (req, res) => {
  const resume = generateResume(); // Generate the resume

  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="resume.pdf"'
  });

  resume.pipe(res);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
