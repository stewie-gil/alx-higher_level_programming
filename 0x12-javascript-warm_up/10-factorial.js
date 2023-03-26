#!/usr/bin/node

// prints factorial

function recur (c) {
  if (c === 1) {
    return (1);
  } else {
    return (c * recur(c - 1));
  }
}

let a;
if (isNaN(process.argv[2])) {
  a = 1;
} else {
  a = parseInt(process.argv[2]);
}
console.log(recur(a));
