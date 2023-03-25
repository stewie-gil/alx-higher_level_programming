#!/usr/bin/node

// Printing the first argument passed

const args = process.argv.slice(2);

if (args[0]) {
  console.log(args[0]);
} else {
  console.log('No argument');
}
