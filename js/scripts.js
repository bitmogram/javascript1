
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
