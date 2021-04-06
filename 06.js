// 6. Missing Letter

//If there is a list of ordered letters, and one of them is missing. Find out the missing letter!

function missingLetter(word) {
  // Alphabet variable
  const alph = "abcdefghijklmnopqrstuvwxyz";
  // Convert word to lowercase to match the alph variable
  let lowerCase = word.join("").toLowerCase();
  // Get last index of words
  let end = alph.indexOf(lowerCase[lowerCase.length - 1]);
  // Get first index of words
  let start = alph.indexOf(lowerCase[0]);
  let i, j, res;
  for (i = start, j = 0; i, j < end; i++, j++) {
    if (alph[i] !== lowerCase[j]) {
      // Match alphabet and word by order
      // If the conditional return false or alphabet and word doesnt match, assign res variable with the missing character, stop the loop
      alph[0] !== word[0] ? (res = alph[i].toUpperCase()) : (res = alph[i]);
      break;
    }
  }
  console.log(res);
}
missingLetter(["x", "z"]);
