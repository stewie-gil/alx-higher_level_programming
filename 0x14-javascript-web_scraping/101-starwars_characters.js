#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const charactersUrls = JSON.parse(body).characters;

    function printCharacterName(url) {
      return new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
          if (!error && response.statusCode === 200) {
            const characterName = JSON.parse(body).name;
            resolve(characterName);
          } else {
            reject(error);
          }
        });
      });
    }

    const promises = charactersUrls.map(printCharacterName);
    Promise.all(promises)
      .then(function (values) {
        values.forEach((name) => console.log(name));
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    console.log(error);
  }
});


