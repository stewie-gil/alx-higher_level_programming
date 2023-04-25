#!/usr/bin/node

const movieId = prompt("Enter the movie ID:");
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const characters = data.characters;
    characters.forEach(characterUrl => {
      fetch(characterUrl)
        .then(response => response.json())
        .then(data => console.log(data.name))
        .catch(error => console.error(error));
    });
  })
  .catch(error => console.error(error));
