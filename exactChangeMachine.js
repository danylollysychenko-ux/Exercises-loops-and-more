number = prompt("Enter a positive number: ");

while (true){
  if (number < 0 || number === null || number === "" || number > 499){
    number = prompt("Enter a positive number: ");
  }else{
    break;
  }
}

console.log(`You entered ${number}.`);
while (true) {
  quarters = Math.floor(number / 25);
  remainder = number % 25;
  console.log(`Remainder: ${remainder}`);

  dimes = Math.floor(remainder / 10);
  remainder = remainder % 10;
  console.log(`Remainder: ${remainder}`);

  nickles = Math.floor(remainder / 5);
  remainder = remainder % 5;
  console.log(`Remainder: ${remainder}`);

  pennies = Math.floor(remainder / 1);
  remainder = remainder % 1;
  console.log(`Remainder: ${remainder}`);
  if (remainder == 0) {
    break;
  }
}

console.log(`Quarters: ${quarters}
Dimes: ${dimes}
Nickles: ${nickles}
Pennies: ${pennies}`);
