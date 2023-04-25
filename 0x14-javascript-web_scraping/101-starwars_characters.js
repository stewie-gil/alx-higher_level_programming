#!/usr/bin/node

const request = require('request');
const filmUrl = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

// Make a GET request to the SWAPI API to retrieve the film information
request.get(filmUrl, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    // Parse the film information as a JSON object and retrieve the list of characters
    const filmData = JSON.parse(body);
    const characterUrls = filmData.characters;

    // Make a GET request to each character URL and print their name
    characterUrls.forEach(characterUrl => {
      request.get(characterUrl, (err, res, body) => {
        if (err) {
          console.log(err);
        } else {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
        }
      });
    });
  }
});
