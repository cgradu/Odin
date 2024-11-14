// console.log("Hello, World!")
// const name = "Sebi";
let name = "Sebi";
let surname = "Constantin";
console.log(name);
name = "Radu";
console.log(name);
console.log(surname);

// Add 2 numbers together! (just type console.log(23 + 97) into your HTML file or the browser console)
console.log(9 + 10);

// Add a sequence of 6 different numbers together.
console.log(1 + 2 + 3 + 4 + 5 + 6);

// Print the value of the following expression: (4 + 6 + 9) / 77
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);

let b = 7 * a;
console.log(b);

let max = 57;
let actual = max - 13;
let percentage =  actual / max;

// Write this line in the browser console -> it will return undefined
// let c = b * 7;
// This line will still print
// console.log(c);

const string = "The revolution will not be televised.";
console.log(string);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;
console.log(single);
console.log(double);
console.log(backtick);

const new_name = "Chris";
const greeting = `Hello, ${new_name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const three = "Hello";
const four = "how are you?";
console.log(three + ", " + four);
console.log(`${three}, ${four}`);

// Can include expressions inside backticks (template literals)
const song = "Fight the Youth";
const score = 9;
const highest_score = 10;
const output = `I like the song ${song}. I gave it a score of ${
    (score / highest_score) * 100
}%.` ;
console.log(output);

// Can add Enter or \n inside backticks and it will be accounted for
let newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);
newline = `One day you finally knew\nwhat you had to do, and began,`
console.log(newline);

// use \ to escape quotes or different type of quotes
let bigmouth = 'I\'ve got nor right to take my place...';
console.log(bigmouth);
bigmouth = "I've got nor right to take my place...";
console.log(bigmouth);

// works fine
const front = "Front ";
const number = 242;
console.log(front + number);

// Number() -> transforms anything into a number if it can
const myString = "123";
const myNumber = Number(myString);
console.log(typeof myNumber);

// String() -> transforms anything into a string if it can
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString);

// Was having an error because the script was being accessed before the button was read from the html
const button = document.querySelector("button");

function greet() {
    // prompt func: brings up a prompt in the window in which you can write
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

// String functions
let text = "ihfaophgklfdhlgjqhaogherpouhbfakjlsbfk";
let length = text.length;
console.log(`The length of the text "${text}" is ${length}`);
console.log("The length of the text \"" + text + "\" is " + length);

// returns the char at pos: 0 (both functions do the same thing)
let char = text.charAt(0);
console.log(char);
char = text.at(0);
console.log(char);
// different syntax for .at()
char = text[0];
console.log(char);

// returns the UTF-16 code of the letter found at pos: 0
char = text.charCodeAt(0);
console.log(char);

// selects string from 7 - 13 
let part = text.slice(7, 13);
console.log(part);

// from 7 - end of string
part = text.slice(7);
console.log(part);

// from end of string it counts the 7th pos
part = text.slice(-7);
console.log(part);

part = text.slice(-7, -3);
console.log(part);

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))