#!/usr/bin/node

const request = require('request');

/**
 * This function counts the number of completed tasks for each user in a given
 * list of tasks obtained from an API endpoint.
 * @param {string} apiUrl - The URL of the API endpoint.
 */
function countCompletedTasksByUser(apiUrl) {
  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.error(`An error occurred while making the request: ${error}`);
    } else {
      const completedTasksByUser = {};
      const tasks = JSON.parse(body);
      for (const task of tasks) {
        if (task.completed) {
          if (!completedTasksByUser[task.userId]) {
            completedTasksByUser[task.userId] = 1;
          } else {
            completedTasksByUser[task.userId] += 1;
          }
        }
      }
      console.log(completedTasksByUser);
    }
  });
}


countCompletedTasksByUser('https://jsonplaceholder.typicode.com/todos');
