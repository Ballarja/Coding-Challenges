function detectWord(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == str[i]) {
      let letter = str[i];
      word += letter;
    }
  }
  return word;
}
