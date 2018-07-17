for (let i = 0; i < 3; i++) {
  console.log('hi!');
}
//
// for (let i = 0; i < 11; i++) {
//   console.log('The number is ${i * 10}');
// }

//
// const colors = ['blue', 'purple', 'grey', 'red', 'aqua', 'green'];

// colsole.log(color[0]);
// console.log(color[1]);
// console.log(color[2]);
// for( let index = 0; index < color.length; index++) {
//   console.log(colors[index]);
// }

//FOR LOOP
//for ( let index = 0; index < colors.length; index++ ) {
//    console.log(colors[index]);
//      if (index === 1) break;  //this line breaks out of the loop if condition is met. (if you need to get out of a loop)

//}

//you can use break and continue to end or continue loops.
//for loops are more common and used more often.
//the while loop reads a bit more closely to english.

//while loop
// let counter =0;
// while (counter < 5) {
//   console.log('i like food');
//   counter++;
//   console.log('after ${counter}');
// }
//
// //for each example
// const captains = [ 'kirk', 'picard', 'sisco', 'janeway','lorca' ];
// captains.forEach( captain => {
//   console.log(captain);
// })

// this is called fat arrow =>

const captains = [ 'kirk', 'picard', 'sisco', ];
for (let captain of captains) {
    console.log('hello captain ${captain}');
}

//for ...in is for innumerable objects. (For of is for arrays)
const me = {
  firstName: 'Maurice',
  lastName: 'Graham',
  age: 34
};

for (let property in me) {
  console.log(me[property]);
};


//IN CLASS ASSIGNMENT
favMovies =[];
favorite = ["Star Wars: The Motion Picture", "Han Solo"];
secondFav = ["Boondock Saints", "The twins"];
thirdFav = ["Return of the King", "Aragorn"];
fourthFav = ["Stay", "Ryan"];
fifthFav = ["5th Element", "Corbin"];

for (let i = 0; i < favMovies.length; i++) {
  
}
