const myArray = [11, 3, 23, 17];

// both O(1) complexity 
myArray.push(17);
myArray.pop(); 

// all O(n) complexity because every index of the array has to be changed for reindexing.
myArray.shift(11);
myArray.unshift(17);
// needs to add "hi" at index 1, remaining index would need to be modifed, compelxity would be O(n)
// even though this is happening at the middle of the array, it would not be O(1/2 n), because we drops constants.
myArray.splice(1, 0, "hi");
