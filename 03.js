// 3. Count Words

// **Count** each of these words: `aku`, `ingin` and `dapat`.

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
countWords(`Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`);
