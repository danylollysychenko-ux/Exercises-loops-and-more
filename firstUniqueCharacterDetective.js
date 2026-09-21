let word = prompt("Enter a word: ").toLowerCase();
let char = "";
let pos = -1;
for (let i = 0; i < word.length; i++) {
  let dup = false;
  if (word.charAt(i) == " " || word.charAt(i) == "-") {
    continue;
  }
  for (let x = 0; x < word.length; x++) {
    if (x == i) continue;
    if (word.charAt(i) == word.charAt(x)) {
      dup = true;
      break;
    }
  }
  if (!dup) {
    pos = i;
    char = word[i];
    break;
  }
}

if (pos >= 0) {
  console.log(`${char} at position ${pos + 1}`);
} else {
  console.log("No unique Characters");
}
