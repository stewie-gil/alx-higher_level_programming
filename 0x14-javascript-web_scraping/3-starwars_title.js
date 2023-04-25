#!/usr/bin/node

const req = require('request');
const u = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

req.get(u, (err, res, body) => {
  if (err) console.log(err);
  else console.log(JSON.parse(body).title);
});
