//Take Home Assignment.

let name = prompt('what is your name?');
let favColor = prompt("Tell me your favorite color", "Please use");

if(name && name !== '') {

switch (favColor.toLowerCase()) {
  case 'blue':
    alert(`Hey ${name}, ${favColor} is the best color`);
    break;
    //...
  default:
    alert('You did not give me a valid color!');
  }
} else {
  alert('You suck!');
}

//Beginning of day 4 notes!

let myArray = []; //Most basic form of myArray
let favoriteFoods = ["pizza", "hamburgers", "french fries"]; //study how to count the length of arrays.
let allTheThings = ["string", 23, ["stuff"], {}, false]; //This is an array. Most of the data you will get when dealing with data are usually inside of an array.

console.log(favoriteFoods[1]); //We are targeting the 2nd member of the array which number is one because we start counting from zero.

let myFavs = ["captain america: civil war", 42, true, 2004];
console.log(myFavs, myFavs.length);

//check if this is an array
Array.isArray(myFavs);

//check if this is an arrays..console.log(Array.isArray(myFavs), typeof myFavs);

console.log(myFavs);
myFavs.push("Maggie Gyllenhaal"); //changes the value of original
console.log(myFavs); //This should be different that the first one because we have added "maggie Gyllenhaal" to the code.

//UNSHIFT
myFavs.unshift("Faith Herndon"); //unshift adds something to the beginning of the array.

//if your not sure that you will be unshifting or using push in your code. Dont write in a way that makes your code dependent on using a specific array. These commands will change the values.

//POP example
myFavs.pop(); //the brackets are empty becuase the function says find the last thing in the array and remove it.
// console.log(lastMember);


/// SPLICE
myFavs.splice(2); //1 argument: BEGINNING with that index.
// console.log(myFavs, removed);
//log is a function. functions have to have comma separated arguments.  That is why we put a comma between myFavs and removed.

console.log(myFavs, 'BEFORE');
myFavs.splice(1,2); //THE WAY THIS READS...STARTING AT INDEX ONE, I WANT TO REMOVE TWO THINGS. (AKA 2 ARGUMENTS)
//Number (index or amount of objects), remove the sedond number of items (count).
//consolf.log(myFavs, 'AFTER');


myFavs.splice(3, 1, ["I got added!"]); //3 arguments starting at 3, remove 1 things, and then add my array.
//be sure not to confuse how to count index verses the number of arrays in a block of code.

myFavs.splice(-3, 1); //if negative number is 1st argument, starts at the END of the array and counts back to that spot...This would count back to the 3rd from the last and remove one.


//SLICE..Only used for copying arrays...do not confuse this with splice.  (slice is always counting using the index)
let copy = myFavs.slice(1, 4); //starts at indxex 1 and goes up until index 4 and stops.  *doesn't include index 4.
console.log(copy);


//IndexOf
let removeIndex = myFavs.indexOf(42);  //returns the index of 42 in our myFavs array.
//this would look for 42 inside of the array.
//if 42 occurs more than once in the index, you will only find the first one.
console.log(removeIndex);
myFavs.splice(removeIndex, 1);

//LAST INDEX OF
let myNums = [1, 2, 3, 4, 5,];
console.log(myNums.reverse());  //takes everything in the number list and reverses it. This reverses the original array and changes it. from this point on your numbers would be reversed unless you reversed it again.
console.log(myNums);

//SORT...sorts things alpha numerically... it only looks at the first letter or number when sorting.
console.log(myFavs);
myFavs.sort();
console.log(myFavs);

//MULTI DIMENTIONAL arrays
let multiDimensional = [['hello', 1], ['goodby', 0]]; //now lets access the 0 index in both these (nested) arrays.
console.log(multiDimensional[0][1], multiDimensional[1][1]); //we went to the index of the universal array...then to the index of the array inside of it.


let favAndLeast = [];
favAndLeast.push(favMovies[0], favMovies[4]);
console.log(favAndLeast);
