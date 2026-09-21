let string = "aaabbccccdaa";
let completedGroup = "";
let counter = 0;
for (let i = 0; i < string.length;i++){
    counter += 1;
    if (string.charAt(i) !== string.charAt(i + 1)){
        completedGroup += string.charAt(i);
        completedGroup += counter;
        counter = 0;
    }
}

if (completedGroup.length < string.length){
    console.log(`Compressed Result: ${completedGroup}`)
}else{
    console.log("Compressed result was not shorter than the string.")
}