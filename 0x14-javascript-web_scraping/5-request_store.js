#!/usr/bin/node
const url = process.argv[2];
const filePath = process.argv[3];

const request = require('request');

request(url, (error, resonse, body) => {
  if (error) {
    console.error(error);
  } else {
    const fs = require('fs');
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.error(error);
      }
    });
  }
});
