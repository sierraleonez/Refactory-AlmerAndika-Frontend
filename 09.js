// 9. Array Sorting

// Sort the array of number from min to max

function arraySorting(numb) {
  // Sort the array by min to max
  const sorted = numb.sort((a, b) => a - b);
  console.log(sorted);
}
arraySorting([3, 12, 4, 5, 8, 9]);
