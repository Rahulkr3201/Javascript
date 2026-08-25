// Original array
const radius = [3, 1, 2, 4];

// --------------------------------------------------
// 1. FILTER
// Creates a NEW array containing only matching values.
// It does not modify the original array.
// --------------------------------------------------

const filteredRadius = radius.filter(function (value) {
  return value > 1;
});

console.log("Original:", radius);          // [3, 1, 2, 4]
console.log("Filtered:", filteredRadius);  // [3, 2, 4]

// filteredRadius is a new array
console.log(radius === filteredRadius);    // false


// --------------------------------------------------
// 2. MAP
// Creates a NEW array by transforming every value.
// It does not modify the original array.
// --------------------------------------------------

const areas = radius.map(function (value) {
  return Math.PI * value * value;
});

console.log("Original:", radius); // [3, 1, 2, 4]
console.log("Areas:", areas);     // [9π, π, 4π, 16π]

// areas is a new array
console.log(radius === areas);    // false


// --------------------------------------------------
// 3. REDUCE
// Combines all array values into one final value.
// It does not normally create a new array.
// It does not modify the original array.
// --------------------------------------------------

const totalRadius = radius.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator

console.log("Original:", radius);       // [3, 1, 2, 4]
console.log("Total radius:", totalRadius); // 10


// --------------------------------------------------
// 4. FILTER + MAP + REDUCE
// filter() creates a new intermediate array: [3, 2, 4]
// map() creates another new array containing the areas
// reduce() combines those areas into one number
// --------------------------------------------------

const totalArea = radius
  .filter(function (value) {
    // Keep only radii greater than 1
    return value > 1;
  })
  .map(function (value) {
    // Convert each radius into its area
    return Math.PI * value * value;
  })
  .reduce(function (accumulator, currentArea) {
    // Add the current area to the accumulated total
    return accumulator + currentArea;
  }, 0);

console.log("Total area:", totalArea); // 91.106186954104
console.log("Original:", radius);      // [3, 1, 2, 4]