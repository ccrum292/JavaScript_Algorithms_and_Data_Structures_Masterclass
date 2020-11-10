const { performance } = require('perf_hooks')

const addUpToExampleOne = n => {
  let total = 0;
  for(let i = 1; i <= n; i++) {
    total += i;
  }
  return total
}

// n operations (MANY!)
// O(n) time
// O(1) space

let t1 = performance.now();
addUpToExampleOne(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`)




const addUpToExampleTwo = n => {
  return n * (n + 1) / 2;
}

// 3 operations (few)
// O(1) time

let t3 = performance.now();
addUpToExampleTwo(1000000000);
let t4 = performance.now();

console.log(`Time Elapsed: ${(t4-t3) / 1000} seconds.`)
