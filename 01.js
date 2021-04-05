// 3rd party library
const csvtojson = require("csvtojson");
const axios = require("axios");

////////// //////////////

// 1. CSV to JSON

// **Sort by price** and **transforms** those collection into object within an array like this format:
const csvPath = "./data.csv";
async function csvToJSON(path) {
  let jsonData, price, commaPrice;
  // Parse CSV to JSON
  jsonData = await csvtojson().fromFile(path);
  // Sort Price by lowest to highest
  jsonData = jsonData.sort((a, b) => a.PRICE - b.PRICE);
  // Add currency to price
  for (let i = 0; i < jsonData.length; i++) {
    price = jsonData[i].PRICE;
    commaPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    jsonData[i].PRICE = "RP" + commaPrice;
  }
  console.log(jsonData);
}
// csvToJSON(csvPath);

// 2. Censoring Words
// Censors these words: dolor, elit, quis, nisi, fugiat, proident, laborum; of this paragraph.
function censorWord(word) {
  // Split word by any whitespace
  const splitted = word.split(" ");
  // RegEx object to match dolor, elit, quis, nisi, fugiat, proident, laborum
  const filter = /(?=.*\bdolor\b)|(?=.*\belit\b)|(?=.*\bquis\b)|(?=.*\bnisi\b)|(?=.*\bfugiat\b)|(?=.*\bproident\b)|(?=.*\blaborum\b)+./gim;
  const asterisk = "*";
  for (let i = 0; i < splitted.length; i++) {
    if (filter.test(splitted[i])) {
      // Replace matched word with asterisk
      splitted.splice(i, 1, asterisk.repeat(splitted[i].length));
    }
  }
  console.log(splitted.join(" "));
}
// censorWord(
//   `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// );

// 3. Count Words

function countWords(words) {
  // RegEx object to match aku or ingin or dapat
  const filter = /(?=.*\baku\b)|(?=.*\bingin\b)|(?=.*\bdapat\b)+./gim;
  // Split word by special character to create a new line ("\n")
  const splitted = words.split("\n");
  let spliced;
  let counter = 0;

  for (a in splitted) {
    // Split word by any whitespace
    spliced = splitted[a].split(" ");
    for (a in spliced) {
      // Match word with regex, increase the counter by 1 if the regex returns true
      filter.test(spliced[a]) && counter++;
    }
  }
  console.log(counter);
}
// countWords(`Aku ingin begini
// Aku ingin begitu
// Ingin ini itu banyak sekali

// Semua semua semua
// Dapat dikabulkan
// Dapat dikabulkan
// Dengan kantong ajaib

// Aku ingin terbang bebas
// Di angkasa
// Hei… baling baling bambu

// La... la... la...
// Aku sayang sekali
// Doraemon

// La... la... la...
// Aku sayang sekali`);

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
    i % 2 == 0 ? even.push(i) : odd.push(i);
    multiplies.push(i * 5);
    if (i > 1) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          break;
        } else {
          prime.push(i);
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
// playWithNumber(1000);

// 5. Char Counter
function charCounter(word) {
  let sentence = word.toLowerCase();
  let noOfCountsOfEachCharacter = {};
  let getCharacter, counter, actualLength, noOfCount;
  let obj = {};
  for (
    counter = 0, actualLength = sentence.length;
    counter < actualLength;
    counter++
  ) {
    getCharacter = sentence.charAt(counter);
    noOfCount = noOfCountsOfEachCharacter[getCharacter];
    noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1 : 1;
  }
  for (getCharacter in noOfCountsOfEachCharacter) {
    if (getCharacter != " ") {
      obj[getCharacter] = "*".repeat(noOfCountsOfEachCharacter[getCharacter]);
    }
  }
  console.log(obj);
}
// charCounter("Bruiser build");

// 6. Missing Letter
function missingLetter(word) {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  let start = alph.indexOf(word[0]);
  let end = alph.indexOf(word[word.length - 1]);
  let i, j, res;
  for (i = start, j = 0; i, j < end; i++, j++) {
    if (alph[i] !== word[j]) {
      res = alph[i];
      break;
    }
  }
  console.log(res);
}
missingLetter(["c", "d", "e", "g", "h"]);

// 7. Sorting Odd Numbers
// 8. Masking
function masking(word) {
  const splitted = word.split("");
  const lastChar = splitted.splice(splitted.length - 3, 3).join("");
  const asterisk = "*";
  const test = "*************ddd";
  const result = asterisk.repeat(word.length - 3) + lastChar;
  console.log(test == result ? "Passed The Test" : "Fail");
}

// masking("23dn3ir30fd2eddd");

// 9. Array Sorting
function arraySorting(numb) {
  const sorted = numb.sort((a, b) => a - b);
  const test = [3, 4, 5, 8, 9, 12];
  const passed = "Passed The Test : Array Sorting";
  const fail = "Fail : Array Sorting";
  let result;
  for (a in sorted) {
    sorted[a] !== test[a] ? (result = false) : (result = true);
  }
  console.log(result ? passed : fail);
}
// arraySorting([3, 12, 4, 5, 8, 9]);

// 10. Rest API
async function fetchPost() {
  const postUrl = `https://jsonplaceholder.typicode.com/posts`;
  const userUrl = `https://jsonplaceholder.typicode.com/users`;

  let postData = await axios({
    method: "GET",
    url: postUrl,
  })
    .then((e) => e)
    .catch((err) => err);

  const userData = await axios({
    method: "GET",
    url: userUrl,
  })
    .then((e) => e)
    .catch((err) => err);
  for (let i = 0; i < userData.data.length; i++) {
    for (let j = 0; j < postData.data.length; j++) {
      if (userData.data[i].id == postData.data[j].userId) {
        postData.data[j].user = userData.data[i];
      }
    }
  }
  console.log(postData.data);
}

// fetchPost();
