const PDFDocument = require('pdfkit');

function generateResume() {
  const doc = new PDFDocument();

  doc.text('Your resume content goes here');

  return doc;
}

module.exports = generateResume;
