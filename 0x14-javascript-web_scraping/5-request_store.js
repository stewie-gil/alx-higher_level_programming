#!/usr/bin/node

const f = require('fs');
const req = require('request');

req.get(process.argv[2], (err, res, body) => {
  if (err) console.log(err);
  else {
    f.writeFile(process.argv[3], body, 'utf8', (err) => {
      if (err) console.log(err);
    });
  }
});
