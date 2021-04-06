// 8. Masking

// Given a string "23dn3ir30fd2eddd", please change all the characters with * (asterisk) except last 3 characters. Write a function to solve this.

function masking(word) {
  // Split the word per character
  const splitted = word.split("");
  // Get last 3 character
  const lastChar = splitted.splice(splitted.length - 3, 3).join("");
  // Asterisk repeater
  const asterisk = (howMany) => "*".repeat(howMany);

  // Test Variable
  const test = "*************ddd";
  const passed = `Passed The Test | Result = `;
  const fail = "Fail";

  // Combine the asterisk and the last 3 character
  const result = asterisk(word.length - 3) + lastChar;
  console.log(test == result ? passed + result : fail);
}

masking("23dn3ir30fd2eddd");
