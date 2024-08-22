
// Different terms for Input means different time complexity because a is not b. the first for loop is O(a) complexity and the second is O(b) complexity,
// hence it is simplifed to O(a + b) complexity
function logItems(a, b) {
  for(let i = 0; i < n; i++) {
    console.log(a);
  }
  for(let i = 0; i < n; i++) {
    console.log(b);
  }
}
logItems(10, 15);

// this would be O(a * b) complexity

// when there is multiple terms, you would need to consider those different terms for input.

function logItems(a, b) {
  for(let i = 0; i < a; i++) {
    for(let j = 0; j < b; j++) {
      console.log(i, j);
    }
  }
}

logItems(10, 15);