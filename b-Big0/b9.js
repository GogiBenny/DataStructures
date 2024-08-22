function logItems(n) {
  // O(n * n) -> 0(n^2) Complexity - exponential
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  // O(n) Complexity - linear
  for(let k = 0; k < n; k++) {
    console.log(k);
  }
}

// Big O: O(n^2 + n) ->  0(n^2)
// drop the non dominant term -> 0(n^2)

logItems(10); // does 110 operations 