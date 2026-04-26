let colors = ["Red", "Blue", "Green", "Yellow", "Black"];
console.log("Colors Array", colors);

let part = colors.slice(1, 4);
console.log("Part Array", part);

let names = ["John", "Mary", "Paul", "Grace", "David"];

let result = names.slice(2);
console.log(result);

// NB: 
// 1. In the absence of start and end indexes, it copies from the beginning to end of the sliced array.
// 2. If only the start index is specified, the copies from the start index to the end of the sliced array.
// 3. If both start and end indexes are specified, it copies and stops an index before the specified end index.