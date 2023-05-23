#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const characterUrls = movieData.characters;
    const characterNames = [];

    function fetchCharacter (index) {
      if (index >= characterUrls.length) {
        // All characters fetched, print the names
        characterNames.forEach((name) => {
          console.log(name);
        });
        return;
      }

      request(characterUrls[index], (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const characterData = JSON.parse(body);
          characterNames.push(characterData.name);
        }

        fetchCharacter(index + 1);
      });
    }

    fetchCharacter(0);
  }
});
