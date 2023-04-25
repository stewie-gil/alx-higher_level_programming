#!/usr/bin/node

const request = require('request');

/**
 * This function counts the number of times a specific character appears in the
 * list of characters of all movies in a given API endpoint.
 * @param {string} apiUrl - The URL of the API endpoint.
 * @param {string} characterUrl - The URL of the character to count.
 */
function countCharactersInMovies(apiUrl, characterUrl) {
  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.error(`An error occurred while making the request: ${error}`);
    } else {
      const movies = JSON.parse(body).results;
      let count = 0;
      for (const movie of movies) {
        const characters = movie.characters;
        for (const character of characters) {
          if (character.includes(characterUrl)) {
            count++;
          }
        }
      }
      console.log(`The character ${characterUrl} appears in ${count} movies.`);
    }
  });
}

countCharactersInMovies('https://swapi.dev/api/films/', 'people/18/');
