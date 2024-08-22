// O(2n) -> 0(n) Complexity - linear drop constants
function logItems(n) {
  for(let i = 0; i < n; i++) {
    console.log(i);
  }
  for(let j = 0; j < n; j++) {
    console.log(j);
  }
}
logItems(3);