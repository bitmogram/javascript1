//The DOM is an API.  It is the entire enviornment that your webpage is running in. It is also a virtual space where all your code meet.
//The DOM is kinda like the world in "reboot"
//The console is a part of the DOM...
//Google could give you an "array" of all your calendar events.
//3rd Party Libraries are free api that you can grab data from.


//In the console type document.all  You get a bunch of code from the site.
//baseURI - shows you the home page of the code you get from document.all
//The things on a page in JS are called DOM nodes, not elements.  So, in HTML it's an element, but in JS it is a DOM Node.

//In JS, Alert is a method.
//you can do window.alert("add any message here");  in the console and it will return a message.

//QUERYING THE DOM
const body = document.getElementsByTagName("Body");
// console.log(body[0]);

const header = document.getElementsByClassName("heading");
console.log("heading");

//this query will only return the first instance of the ID you are targeting.
const paragraph = document.getElementById("paragraph1");
console.log(paragraph);

//JS rule is dont call the HEAD.  It creates an infinite self reference.  You would be calling the thing your refering to.
//If you are using id's, you better have a good reason and you better be using it for Java Script.

//This can look for a
let div = document.querySelector("div")

let div = document.querySelector("#hot"); //targeting the id
let divs = document.querySelectorAll(".cool"); //targeting the class.

//you listen for an event - then the second part of this code tells jS what to do when it fires.
//this example is not best practice because it is not written in fat arrow style.
//ES5 WAY OF WRITING CALLBACK
div.addEventListener(
  "mousover", //we put the second half below to make it easier to read.
  function(ev) {
    div.style.backgroundColor = "red";
  }
)

//ES6 WAY TO WRITE CALLBACK
div.addEventListener(
  "mousover"
  ev => {
    div.style.backgroundColor = "red";
  }
console.log(ev); //we consol logged ev to see what it was. 
