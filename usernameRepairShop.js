let username;

do {
  username = prompt("Username:");
  let firstcharacter = username.charAt(0);
  startsWithLetter =
    firstcharacter.toLowerCase() !== firstcharacter.toUpperCase();
  checkRange = username.length >= 6 && username.length <= 14;
  checkSpaces = username.includes(" ");
  username.trim();

  if (!startsWithLetter) {
    alert("The first character is not a letter.");
  }
  if (!checkRange) {
    alert("The range must be between 6 - 14.");
  }
  if (checkSpaces) {
    alert("Username cannot contain spaces.");
  }
} while (!startsWithLetter || !checkRange || checkSpaces);

let firstUpper = username.charAt(0).toUpperCase();
let restOfWord = username.slice(1).toLowerCase();
let fullWord = firstUpper + restOfWord;
console.log(`Username: ${fullWord}`);
