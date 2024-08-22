// O(n * n) -> 0(n^2) Complexity - exponential
function logItems(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

logItems(10);

// logItems takes in 10 as the paramter, and does 100 operations 10 * 10 = n^2 Complexity