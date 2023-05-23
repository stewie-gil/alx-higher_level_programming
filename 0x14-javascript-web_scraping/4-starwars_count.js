#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const films = JSON.parse(body).results;

    const moviesWithWedgeAntilles = films.filter((film) => {
      const characters = film.characters;
      return characters.some((characterUrl) => {
        const characterIdFromUrl = parseInt(characterUrl.split('/').slice(-2, -1)[0]);
        return characterIdFromUrl === characterId;
      });
    });

    console.log(moviesWithWedgeAntilles.length);
  }
});
