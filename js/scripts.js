//Object oriented programming vs functional programming. research this.

//ANNONYMOUS FUNCTION
//most all function must have the name function before it.
// //the space between function and () is optional.
// function() { //Inside the () is where uyour ARGUMENTS/PARAMETERS go
//   return string.toUpperCase(); //Data transformation and reture.
// };  //End of the function.
//
// //NAMED FUNCTIONS
// //FUNCTION DEFINITION
// function addTwo(numberIWantToChange) {
//   =return numberIWantToChange + 2;
// };
//
// //CALL THE FUNCTION
// console.log(addTwo(1)); //Call Site
//
// let myNewNumber = addTwo(34);
//
// //case study. withouth the
// function logMyString(string) {
//   console.log(string);
// }

// //need to go over these again!
// function alertsAd() {
//   alert('Hey, we have a sale on Garthoks');
// };
//
// alertsAd(); //the parenthesis is what tell js to call the function.

//FUNCTION DECLARATION (IS HOISTED)
  // function  alertsAd() {
  //   alert('Hey, how are ya');
  // };
  //
  // //FUNCTION EXPRESSION (IS NOT HOISTED)
  // let confirmStuff = function(someString) {
  //   confirm(someString);
  // };


  //A FUNCTION MAKES A SCOPE. gets created when the function is called and destroyed when the function is complete.

//STUDY SCOPES. AND NESTED SCOPES.
//EVERYTHING INSIDE A FUNCTION IS PRIVATE TO THAT FUNCTION.
//JS GARBAGE COLLECTION

//YOU CAN WRITE FUNCTIONS THEN WRITE A FUNCTION THAT CALLES EACH OF THOSE FUNCTIONS. IN CLASS EXAMPLE...CHECK OUT CART.

//RECURSIVE FUNCTION - A FUNCTION THAT CALLS ITSELF.
// function  iCallMyself() {
//   console.log(i);
//   i++;
//   if(i < 10) iCallMyself();
// };


//fat arrow functions
(logFunction, alertFunction) => {
  logFunction('hello world');
  alertFunction('goodbye, friends!');
};
//fat arrow that takes in only 1 ARGUMENTS
string => { //parenthesis around the word string are optional}
  console.log(string);
}

//can fat arrow functions be named?  Yes... Only in certain situations.

//IMPLICIT RETURN.. both these examples are the same.
string => (string.toUpperCase());
STRING => string.toUpperCase;
