//Take Home Assignment. Done in Class

let favColor = prompt('what is your name?');
let favColor = prompt("Tell me your favorite color", "Please use");

if(name && name !== '') {

switch (favColor.toLowerCase()) {
  case 'blue':
    alert('Hey ${name}, $favColor} is the best color');
    break;
    //...
  default:
    alert('You did not give me a valid color!');
} else {
  alert('You suck!');
}
}
//Beginning of day 4 notes!

let myArray = []; //Most basic form of myArray
let favoriteFoods = ["pizza", "hamburgers", "french fries"]; //study how to count the length of arrays.
let allTheThings = ["string", 23, ["stuff"], {}, false]; //This is an array. Most of the data you will get when dealing with data are usually inside of an array.

console.log(favoriteFoods[1]); //We are targeting the 2nd member of the array which number is one because we start counting from zero.
