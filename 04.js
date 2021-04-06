// 4. Play With Numbers

//Create row of numbers from **0 to 1000**. Then **group that numbers** by:
// 1) even,
// 2) odd,
// 3) numbers multiplies by 5,
// 4) prime numbers, and
// 5) prime numbers less than 100.

function playWithNumber(range = 1000) {
  let even = [];
  let odd = [];
  let multiplies = [];
  let prime = [];
  let primeLess = [];
  for (let i = 0; i <= range; i++) {
    // Get even and odd number
    i % 2 == 0 ? even.push(i) : odd.push(i);
    // Multiply number by 5
    multiplies.push(i * 5);
    // Get prime numbers
    if (i > 1) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          break;
        } else {
          prime.push(i);
          // Limit prime numbers by 100
          i < 100 && primeLess.push(i);
          break;
        }
      }
    }
  }
  console.log("1. Even : ", even.join(", "), "\n");
  console.log("2. Odd : ", odd.join(", "), "\n");
  console.log("3. Multiplied by 5 : ", multiplies.join(", "), "\n");
  console.log("4. Prime : ", prime.join(", "), "\n");
  console.log("5. Prime less than 100: ", primeLess.join(", "), "\n");
}
playWithNumber(1000);
