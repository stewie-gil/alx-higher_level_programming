#!/usr/bin/node
const url = process.argv[2];
const request = require('request');

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const parsedData = JSON.parse(body);

    const data = parsedData.results.map(function (parsed) {
      return parsed.characters;
    });
    const flat = data.flat();

    const filtered = flat.filter(function (character) {
      return character.includes('18');
    });
    const charactercount = filtered.length;
    console.log(charactercount);
  }
});
