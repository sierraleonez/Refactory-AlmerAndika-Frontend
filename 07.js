// 7. Sorting Odd Numbers

// Given a list of even and odd numbers. Sort the odd numbers, without change even numbers position.
// p.s : zero is an even number.

function sortArray(array) {
  // Variable Declaration
  const oddArr = [];
  const evenArr = [];
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    // Get even numbers
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
      // Get odd numbers
    } else {
      oddArr.push(array[i]);
    }
  }
  // Sort odd numbers by min to max
  oddArr.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      // If the number is even, push the even number
      result.push(evenArr.shift());
    } else {
      // If the number is odd, push the sorted odd number
      result.push(oddArr.shift());
    }
  }
  console.log(result);
}
console.log(sortArray([9, 4, 2, 4, 1, 5, 3, 0]));
