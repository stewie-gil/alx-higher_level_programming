#!/usr/bin/node
const url = process.argv[2];
const request = require('request');

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);

    const userid = data.filter((obj) => obj.userId);

    console.log = userid;

    for (let userid = 1; userid <= 10; userid++) {
      const userdata = data.filter((obj) => obj.userId === userid);

      const completed = userdata.filter((obj) => obj.completed === true).length;
      const notCompleted = userdata.filter((obj) => obj.completed === false).length;
    }
  }
});
