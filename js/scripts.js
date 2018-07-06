var myString ="Hello World!*76";
console.log(typeof myString);
//ANYTHING IN QUOTES IN JS IS A STRING. JS ASSUMES THIS WHICH MAKES IT A LOOSELY TYPED BEFAUSE YOU DONT HAVE TO DECLARE THE TYPE OF YOUR VARIABLE.

var myNumber = 43;
console.log(typeof myNumber);
//THERE ARE CERTAIN THINGS THAT YOU CAN DO TO STRINGS THAT YOU CANT DO TO NUMBERS.

var newVariable; //THIS IS A DECLARATION. JS HAVE CARVED OUT THE SPACE IN YOUR MEMORY FOR IT. BUT IT IS UNDEFINED.
console.log(newVariable);
//UNDEFINED VARIABLE IS OK IF IT IS INTENTIONAL. NOT IF IT IS ACCIDENTAL.
//UNDEFINED MEANS, THE THING YOU ARE REFERRING TO .... ??

var isLoggedIn = true
//TRUE ISNT IN QUOTES BECAUSE IT IS A BOOLEAN.
//BEST PRACTICE FOR BOOLEAN IS TO NAME THEM INTUITIVELY, LIKE "IS SOMETHING"


isLoggedIn = "null"; //THIS IS A STRING BECAUSE IT IS IN QUOTES.

isLoggedIn = null; //THIS IS NULL.

var myNumber = 43; //primitive form
var myOtherNumber = new Number(43); //number object form

//STRING INTERPOLATION EXAMPLE
console.log("Hey There, " + myString + " how are you?"); //This is ES5 (The old way)
console.log(`Hey there, ${myString} how are you?`); //This is ES6 (The new way)

//A block of code in JS is anything you see inside curly brackets.
// {
   //Block of Code
// }

//Scopes inherit values from their parents.  Parents don't inherit values from their children.
var dozen = 12;
{
  dozen = 13;
}

//This is an example of variable HOISTING.
//JS will go through all your code and look for all your var variables and move them to the top as variable declarations.
//This will then be applied to the console after which causes it to be "DECLARED BUT NOT DEFINED"
console.log(newVariable);
var newVariable;
console.log(newVariable, 'AFTER')


console.log(newVariable);
var newVariable = "I AM THE BEST VARIABLE!";
console.log(newVariable, 'AFTER')

{
  newVariable = "I am the worst...";
}



//Let variables EXAMPLE. They do not get hoisted. They only exist when you declare them and after. They don't get hoisted to the top of your code.
newVariable = "I am the best variable!";
console.log(newVariable, "AFTER being declared");

{
  let newVariable = "I am the worst...";
  console.log(newVariable, 'INSIDE the scope');
}

console.log(newVariable, 'OUTSIDE the scope');
isLoggedIn = null;



let newVariable; //EXAMPLE OF A DECLARATION
//Defining the variable is when you say newVariable = something.
newVariable = "My dog is ugly."; //EXAMPLE OF A DEFINITION
let newVariable = "I am the worst..."; //Exampoe of declaration and definition in one line.

//EXAMPLE OF CONST.  IN A CONST, YOU CANNOT DECLARE BUT NOT DEFINE.
//CONST CAN'T BE REDECLARED WITHIN THE SAME SCOPE. WHEN YOU DECLARE A CONST AND SET A VALUE, YOU DON'T WANT TO CHANGE IT.
const age = 32;
console.log(age)32;
console.log(age);

//FYI...CONS TAKE UP A LOT OF MEMORY WHEN BUILDING LARGE WEB APPS. CONS ARE OFTEN WRITTEN IN ALL CAPS TO COMMUNICATE THAT THEY DON'T CHANGE. (THIS IS CARRY OVER PRACTICES FROM OTHER LANGUAGES)

//Built into JS is the date converter. It allows you to collect date information in universal formats then normalizes it so you have constant data.
let today = new Date();
let myBirthday = new Date('5/21/86');
console.log(myBirthday);

//Mat strings
let bestNumber = 42.7;

//EXAMPLE OF A MATH OBJECT. OBJECTS IN JS START WITH CAPITAL LETTERS.
Math.floor(bestNumber);
console.log(Math.floor(bestNumber)); //Rounds down to the next whole number
console.log(Math.ceil(bestNumber)); //Rounds up to the next whole number.

//Example of a calculation.
console.log(Math.ceil(bestNumber) *Math.PI


let classRoom ="Room 1";
console.log(classRoom.length); //This counts the length of the string. (This includes spaces.)
//in classRoom.length, the two values are connected.  The second referes to the word before the period.
//JS automatically assumes based on your "length" calculation that you want classRoom to be an object. In this instance it will convert classRoom to an object for you.

//EXAMPLE OF OBJECTS IN JS
let classRoom ="Room 1";
let objectClassRoom = new String("Room 1");
console.log(typeof classRoom);
console.log(typeof objectClassRoom);
console.log(classRoom.length);


//Arrays are the most common way to recieve and send data.

//BASIC WAYS TO COMMUNICATE WITH YOUR USER. These are all functions.

alert("Hey there, user! It's a great day!");
confirm("Are you ready to be a developer?"); //This gets you a BOOLEAN response to capture the info.
const isReady = confirm("Are you ready to be a developer?"); //This captures the response of your user.

prompt("What is your name?"); //This will allow them to type in a sentence or a full string as a reply. We can capture that info
prompt("What is your name?", "John"); //Adding a comma and the second value inserts John if they don't insert a name.
