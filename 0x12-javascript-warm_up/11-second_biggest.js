#!/usr/bin/node

// search int

const args = process.argv.slice(2).map(arg => parseInt(arg));

function bsort (arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const sorted = bsort(args);

if (typeof (args[2]) == 'undefined') {
  console.log(0);
} else {
  console.log(sorted[sorted.length - 2]);
}
