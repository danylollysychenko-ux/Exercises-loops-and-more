let number = "";
let last;
while (number > 99 || number < 10 || number === "" || number === null || number % 1 !== 0) {
  number = prompt(`Enter a number (10-99) \n${last}`);
  if (number <= 99 && number >= 10 && number !== "" && number !== null && number % 1 == 0) {
    break;
  }else{
    last = "Invalid input.";
  }
}

console.log(number)
if (number % 2 == 0){
    console.log("Even.")
}else{
    console.log("Odd.")
}

if (number[0] == number[1]){
    console.log("The digits are the same.")
}

if (number[0] > number[1]){
    console.log("The first digit is bigger.")
}else if(number[0] < number[1]){
    console.log("The second digit is bigger.")
}