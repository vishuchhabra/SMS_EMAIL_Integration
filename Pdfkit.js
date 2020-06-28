const PDFDocument = require('pdfkit');
const fs = require('fs');
 
// Create a document
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('./output.pdf'));

doc.fontSize(15)
  .text(text,{
    align:'justify',
},200,100)
doc.fontSize(20)
  .text("B-G UNIFIED", {
      align:'justify'
  })


  doc.image('./image.png', {
    fit: [250, 200],
    align: 'left'
  });

  
  

doc.end();
