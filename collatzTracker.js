let number = prompt("Enter a positive number: ");
let largestValue = 0;

while (number < 0 || number === null || number === "") {
  let number = prompt("Invalid. Enter a positive number: ");
}

console.log(`You entered ${number}.`);
while (true) {
  if (number % 2 == 0) {
    number = number / 2;
    console.log(number);
  } else if (number % 2 == 1) {
    number = number * 3 + 1;
    console.log(number);
  }
  if (number > largestValue) {
    largestValue = number;
  }

  if (number == 1) {
    break;
  }
}

console.log(`Largest value reached ${largestValue}.`);
