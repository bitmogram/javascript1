
//Beginning of day3 notes
let birthday = new Date(prompt('what is your birthday?',"5/21/1986"));

let confirmBday = confirm('Is ${birthday} your correct birthday?');

if(confirmBday) alert(`${birthday} is in fact your birthday!`);

//
//LOGICAL AND EXAMPLE. IF EITHER SIDE CAN BE STATED AS FALSE, THE ENTIRE THING IS FALSE.
let bestNumber = 42;
let isTrue = true;

console.log(bestNumber && isTrue);

//???
let bestNumber = 42;
let isTrue = true;

console.log(isTrue || bestNumber);

console.log(!bestNumber);

//COMPUTERS CAN ONLY THING IN BINARY TERMS WHICH MEANS YES OR NO. TRUE OR FALSE.


let num = 11;
let string = '11';

console.log(num == string); //LOOSE EQUALITY CHECKS FOR VALUE AND NOT TYPE.  ONE OF THESE IS A NUMBER THE OTHER IS A STRING BUT THE CONSOLE LOG WILL RETURN THIS AS TRUE.

let num = 11;
let string = '11';

console.log(num === string); //STRICT EQUALITY CHECKS FOR VALUE AND TYPE. (BECAUSE WE ADDED THE EXTRA EQUAL SIGN)

let num = 11;
let string = '11';

console.log(num = string); //ONE EQUAL SIGN MAKES NUM EQUAL TO STRING. AVOID THIS. THIS ASSIGNS VALUE BUT MORE THAN ONE EQUAL SIGN CHECKS VALUE.

//When using the less than and graeater than symbols, only use them on numbers.  They do strange things when you use them on strings etc...

//STRICT NOT EQUAL - CHECKING IF BOTH THE VALUE AND TYPE IS THE SAME. IF THEY ARE NOT, CONSOLE RETURNS WITH TRUE.

//IN CLASS day 3 try it out ASSIGNMENT.

const prim = "my string";
const objectString = new String("my string");

console.log(prim === objectString); //FALSE
console.log(prim == objectString); //true

//MATHAMATICAL NUMBERS EXAMPLES... THEY ONLY WORK ON VALID NUMBERS.

//Modulo(%) equal REMAINDER.  can be used to determine if a number is perfectly divisible by another number.
//MODULUS EXAMPLE

consol.log(2 % 2);  //This equals zero because there is no remainder.
console.log(5 % 2); //The way to read this...how many times is 2 divided into 5 and what is the remainder.

//INCRAMENT TAKES A VALUE AND ADDS 1.
//DECRAMENT TAKES A VALUE AND REMOVES 1.
let start = 1;
//....after some LOGICAL
start = start + 1; //another way to do this is start++;
console.log(start);

//NaN means not a number.
//FAILING SILENTLY - Is when JS is rying to do what you want it to do but cant.  Example, trying to calculate value for a non number may cause JS to convert the non number to unicode and try to calculate the value.

start--; //start = start -1;
console.log(start); //2

let nonNumber = "cheese";
console.log(parseInt(nonNumber));  //This wraps the parseInt in a console.  If you try to perform a number operation on a non number you get NaN. This wont kill your code, it will convert it to NaN and keep reading the rest of the code on the page.

//Anyting you compare two objects to each other you will get false.

//To check if something is a number or not (Is NaN is an object)
console.log(isNaN()) // checking if something is NOT a number.
console.log(!isNaN()) //to check if something IS a number.

//parseInt = parse integer.

let fifty ="50";  //this is a string.
console.log(parseInt(fifty)); //this will try to change the string into a number. the string was parsed into an integer.

let nonString = 50000; //This is a number. if you check is NaN it would be false.
console.log(nonString.toString()); // this converts the number to a string. This does not reassign the value.
console.log(typeof nonString.toString()); //this checks the type in the console log.

console.log(nonString += 20); //This reads as nonString = nonString + 20


//IF YOU USE A PLUS SIGN WITH A STRING, THE JS WILL TAKE THE TWO STRINGS AND PUT THEM TOGEHTER.

let nonString ="50000";
nonString += 20;

//In class try it out two

let firstNum = parseInt(prompt("Give me a number...any number!!", "10"));
let secondNum = parseInt(prompt ("Give me another number...any other number"));
alert(firstNum + secondNum);

//ANOTHER WAY TO DO THE SAME AS ABOVE.
let one = parseInt(firstNum);
let two = parseInt(secondNum);

//control flow - a way to write your program to think for itself. if this is true ill do this things but if not ill do something else...etc...

if(!isNaN(firstNum) && !isNaN(secondNum)) alert(firstNum + secondNum); //

//IF THIS IS TRUE, EXECUTE THIS CODE, IF THIS IS FALSE, EXECUTE THIS OTHER CODE.
if(!isNaN(firstNum) && !isNaN(secondNum)) {
  alert(firstNum + secondNum);
} else if(isNaN(secondNum)) {   //this is saying, if that first contition comes back false but this one comes back true...
  secondNum = (prompt('No, I said a number!!!', '10')); //we didn't start this line with "let" because it is already declared in the code above.
  alert(firstNum + secondNum);
} else {
    alert('No dummy!');
}

//switch STATEMENT example.  You can only evaluate one condition using this.
let greeting = prompt("Tell me how to say hello", "Aloha");
switch(greeting.toLowerCase()) {  //Example of normalizing data. everything on this line returns as lower case.
    case 'Hello':
      alert(`I love saying ${greeting}!`);
      break; //adding the word break to each case causes the js to NOT run the code below after this condition is met.
    case 'wassup':
      alert(`${greeting} is so 90's`);
      break;
    default:
      alert(`I've never heard ${greeting} before!`);
      break;


//TERINARY EXAMPLE - USED TO EVALUATE SIMPLE YES OR NO CONDITIONS.. WHEN YOU WANT A CERTAIN THING TO HAPPEN DEPENDING ON THE ANSWER.
//JS KNOWS YOUR WRITING A TERINARY WHEN YOU ADD A ? MARK.
let money = 10;
let currency = confirm("In dollars or not?", "dollars")

currency ? alert(`$${money}`) : alert(money); //colon ends the if true part of the code...right side is if it is false.

//NEVER nest TERINARY
//FINAL TRY IT OUT DAY THREE / Notes to help with take home

let isAdult = confirm("Are you over 18?");
if(isAdult) {
  let isUnder80 = confirm("Are you under 80 years old?");
  if(isUnder80) {
    let isCool = confirm("Do you like star wars?");
    if(!isCool) return; //return tells js to kill the code. if isCool comes back false, kill or return the code.
    alert(`You are so cool!`);
  } else {
    let isElderly = confirm("Do you enjoy prunes?");
  }
} else {
  alert("You cannot enter")
}
