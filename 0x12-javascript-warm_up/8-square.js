#!/usr/bin/node

// Prints a square

if (isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  for (let row = 0; row < process.argv[2]; row++) {
    let output = '';
    for (let col = 0; col < process.argv[2]; col++) {
      output += 'X';
    }
    console.log(output);
  }
}
