// 5. Char Counter

// Given a string and count how many occurrence of each character of the string. The output is a dictionary data type, key for chars and value is sum of the chars. The character only letter, not space, or any symbols.

function charCounter(word) {
  // Variable Declaration
  let sentence = word.toLowerCase();
  let noOfCountsOfEachCharacter = {};
  let getCharacter, counter, actualLength, noOfCount;
  let obj = {};
  for (
    counter = 0, actualLength = sentence.length;
    counter < actualLength;
    counter++
  ) {
    // Iterate sentence from 0 to length of the sentence - 1 index
    getCharacter = sentence.charAt(counter);
    noOfCount = noOfCountsOfEachCharacter[getCharacter];
    // Assign noOfCountsOfEachCharacter character key if there is same character, increase the counter
    noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1 : 1;
  }
  for (getCharacter in noOfCountsOfEachCharacter) {
    if (getCharacter != " ") {
      // Replace number with asterisk
      obj[getCharacter] = "*".repeat(noOfCountsOfEachCharacter[getCharacter]);
    }
  }
  console.log(obj);
}
charCounter("Bruiser build");
