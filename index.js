const express = require('express');
const path = require('path');
const app = express();

const generateResume = require('./resume');

// Middleware
app.use(express.static('.', {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/download', (req, res) => {
  try {
    const filePath = path.join(__dirname, 'ShathishWWarma_LLMOPS.pdf');
    
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="ShathishWWarma_LLMOPS.pdf"',
      'Cache-Control': 'no-cache'
    });

    res.sendFile(filePath, (err) => {
      if (err) {
        console.error('File send error:', err);
        res.status(404).send('Resume file not found');
      }
    });

  } catch (error) {
    console.error('Download error:', error);
    res.status(500).send('Error downloading resume');
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime() 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Resume server running on port ${port}`);
  console.log(`📄 View resume: http://localhost:${port}`);
  console.log(`📥 Download PDF: http://localhost:${port}/download`);
});
