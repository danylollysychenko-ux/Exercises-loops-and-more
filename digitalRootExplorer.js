let number = prompt("Enter a positive number: ");
let total = 0;
let sum = 0;

if (number < 0) {
  while (true) {
    number = prompt("Invalid\nEnter a positive number:");
    if (number > 0) {
      break;
    }
  }
}

console.log(number);
while (true) {
  for (let i = 0; i < number.length; i++) {
    sum += Number(number.charAt(i));
  }
  console.log(sum);
  number = String(sum);
  sum = 0;
  if (number.length == 1) {
    break;
  }
}
