#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const fileContent = process.argv[3];

fs.writeFile(filePath, fileContent, 'utf8', (error) => {
  if (error) {
    console.error(`An error occurred while writing to the file: ${error}`);
  } else {
    console.log(`File "${filePath}" successfully written.`);
  }
});
