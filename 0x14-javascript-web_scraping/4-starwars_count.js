#!/usr/bin/node

const axios = require('axios');

async function countCharacters(url) {
  try {
    const response = await axios.get(url);
    const movies = response.data.results;
    let count = 0;
    for (const movie of movies) {
      const charactersResponse = await axios.all(
        movie.characters.map(url => axios.get(url))
      );
      const characters = charactersResponse.map(response => response.data);
      count += characters.filter(character => character.url.includes('people/18/')).length;
    }
    console.log(count);
  } catch (error) {
    console.error(error);
  }
}

countCharacters(process.argv[2]);
