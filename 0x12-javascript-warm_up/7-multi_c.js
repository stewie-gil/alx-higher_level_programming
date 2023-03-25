#!/usr/bin/node

// prints c is fun

if (isNaN(process.argv[2])) {
  console.log('Missing number of occurrences');
} else {
  const myVar = parseInt(process.argv[2]);
  for (let a = 0; a < myVar; a++) {
    console.log('C is fun');
  }
}
