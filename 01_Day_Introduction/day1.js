console.log('Welcome to 30DaysOfJavaScript')

console.log('Hello, World!')
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')

// This is the first comment  
// This is the second comment  
// I am a single line comment

/*
This is a multiline comment  
 Multiline comments can take multiple lines  
 JavaScript is the language of the web  
 */

console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)

console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3

console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)

// Declaring variables with number values
let age1 = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)

// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)

let day1Exercises = `
💻 Day 1: Exercises
Write a single line comment which says, comments can make code readable

Write another single comment which says, Welcome to 30DaysOfJavaScript

Write a multiline comment which says, comments can make code readable, easy to reuse and informative

Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

Declare four variables without assigning values

Declare four variables with assigned values

Declare variables to store your first name, last name, marital status, country and age in multiple lines

Declare variables to store your first name, last name, marital status, country and age in a single line

Declare two variables myAge and yourAge and assign them initial values and log to the browser console.`

// comments can make code readable

// Welcome to 30DaysOfJavaScript

/*
comments can make code readable,
easy to reuse and informative
*/

let name2 = "Ahmet"; // string variable
let isStudent = true; // boolean variable
let job2; // undefined variable
let address = null; // null variable

console.log(typeof name2); // string
console.log(typeof isStudent); // boolean
console.log(typeof job); // undefined
console.log(typeof address); // object (typeof null is an object in JavaScript)

let var1, var2, var3, var4;

let var5 = 5, var6 = "Hello", var7 = true, var8 = null;

let firstName1 = "Ahmet";
let lastName1 = "Yilmaz";
let maritalStatus = "Single";
let country1 = "Turkey";
let age2 = 25;

let firstName2 = "Ahmet", lastName2 = "Yilmaz", maritalStatus2 = "Single", country2 = "Turkey", age3 = 25;

let myAge = 25;
let yourAge = 30;

console.log("My age is:", myAge);
console.log("Your age is:", yourAge);
