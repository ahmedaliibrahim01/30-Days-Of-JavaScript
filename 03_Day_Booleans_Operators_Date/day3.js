// Boolean
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

// Arithmetic Operators
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// Comparison Operators
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Logical Operators
// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check1 = 4 > 3 && 10 < 5         // true && false -> false
const check2 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check3 = 4 > 3 || 10 > 5         // true  || true -> true
const check4 = 4 > 3 || 10 < 5         // true  || false -> true
const check5 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check6 = 4 > 3                     // true
let check7 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff = !isLightOn           // false
let isMarried1 = !false                // true

// Increment Operator
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

let count1 = 0
console.log(count1++)        // 0
console.log(count1)          // 1

// Decrement Operator
let count2 = 0
console.log(--count2) // -1
console.log(count2)  // -1

let count3 = 0
console.log(count3--) // 0
console.log(count3)   // -1

// Ternary Operators
let isRaining1 = true
isRaining1
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining1 = false

isRaining1
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)


/* Window Methods
// Alert
alert('Welcome to 30DaysOfJavaScript')

// Promt
prompt('required text', 'optional text')
let number5 = prompt('Enter number', 'number goes here')
console.log(number5)

// confirm
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
*/
// Date Object

// Creating a time object
const now = new Date()
console.log(now) // Mon Aug 26 2024 16:51:27 GMT+0300 (East Africa Time)

// Getting full year
const full = new Date()
console.log(full.getFullYear()) // 2024

// Getting month
const month = new Date()
console.log(month.getMonth()) // 7

// Get Date
const date = new Date()
console.log(date.getDate()) // 26

// Getting day
const day = new Date()
console.log(day.getDay())

// Getting hours
const hours = new Date()
console.log(hours.getHours())

// Getting minutes
const minutes = new Date()
console.log(minutes.getMinutes())

// Getting seconds
const seconds = new Date()
console.log(seconds.getSeconds())

// Getting Time
const time = new Date()
console.log(time.getTime())

const date1 = new Date()
const year1 = now.getFullYear() // return year
const month1 = now.getMonth() + 1 // return month(0 - 11)
const date2 = now.getDate() // return date (1 - 31)
const hours1 = now.getHours() // return number (0 - 23)
const minutes1 = now.getMinutes() // return number (0 -59)

console.log(`${date2}/${month1}/${year1}`)