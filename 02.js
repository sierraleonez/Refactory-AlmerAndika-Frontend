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
censorWord(
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
);
