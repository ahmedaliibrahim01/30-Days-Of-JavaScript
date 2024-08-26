// Primitive Data Types Example
let word = 'JavaScript'
word[0] = 'Y'  // Does not change the string

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)  // true

let js1 = 'JavaScript'
let py = 'Python'
console.log(js1 == py)  // false

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff)  // false

// Non-Primitive Data Types Example
let nums = [1, 2, 3]
nums[0] = 10
console.log(nums)  // [10, 2, 3]

let nums = [1, 2, 3]
let numbers1 = [1, 2, 3]
console.log(nums == numbers1)  // false

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}

let userTwo1 = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo1)  // false

let numbers = nums
console.log(nums == numbers)  // true

let userTwo = userOne
console.log(userOne == userTwo)  // true

// Numbers
let age = 35
const gravity = 9.81
let mass = 72
const PI1 = 3.14
const boilingPoint = 100
const bodyTemp = 37
console.log(age, gravity, mass, PI1, boilingPoint, bodyTemp)

// Math Object Examples
const PI = Math.PI
console.log(PI)  // 3.141592653589793
console.log(Math.round(PI))  // 3
console.log(Math.round(9.81))  // 10
console.log(Math.floor(PI))  // 3
console.log(Math.ceil(PI))  // 4
console.log(Math.min(-5, 3, 20, 4, 5, 10))  // -5
console.log(Math.max(-5, 3, 20, 4, 5, 10))  // 20
const randNum = Math.random()
console.log(randNum)
const num = Math.floor(Math.random() * 11)
console.log(num)
console.log(Math.abs(-10))  // 10
console.log(Math.sqrt(100))  // 10
console.log(Math.sqrt(2))  // 1.4142135623730951
console.log(Math.pow(3, 2))  // 9
console.log(Math.E)  // 2.718
console.log(Math.log(2))  // 0.6931471805599453
console.log(Math.log(10))  // 2.302585092994046
console.log(Math.LN2)  // 0.6931471805599453
console.log(Math.LN10)  // 2.302585092994046
Math.sin(0)
Math.sin(60)
Math.cos(0)
Math.cos(60)

let randomNum = Math.random()
let numBtnZeroAndTen = randomNum * 11
console.log(numBtnZeroAndTen)
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)

// Strings
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
let fullName = firstName + space + lastName;
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country;
console.log(personInfoOne)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') 
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)')
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${a} is greater than ${b}: ${a > b}`)

// String Methods
let js = 'JavaScript'
console.log(js.length)
console.log(firstName.length)

let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)
let secondLetter = string[1]
let thirdLetter = string[2]
let lastLetter = string[9]
console.log(lastLetter)
let lastIndex = string.length - 1
console.log(lastIndex)
console.log(string[lastIndex])

console.log(string.toUpperCase())
console.log(firstName.toUpperCase())
console.log(country.toUpperCase())

console.log(string.toLowerCase())
console.log(firstName.toLowerCase())
console.log(country.toLowerCase())

console.log(string.substr(4,6))
console.log(country.substr(3, 4))

console.log(string.substring(0,4))
console.log(string.substring(4,10))
console.log(string.substring(4))

console.log(country.substring(0, 3))
console.log(country.substring(3, 7))
console.log(country.substring(3))

let string1 = '30 Days Of JavaScript'
console.log(string1.split())
console.log(string1.split(' '))

console.log(firstName.split())
console.log(firstName.split(''))

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))
console.log(countries.split(', '))

console.log(string1.trim(' '))
console.log(firstName.trim())

console.log(string1.includes('Days'))
console.log(string1.includes('days'))
console.log(string1.includes('Script'))
console.log(string1.includes('script'))
console.log(string1.includes('java'))
console.log(string.includes('Java'))

console.log(country.includes('fin'))
console.log(country.includes('Fin'))
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false

let string2 = '30 Days Of JavaScript'
console.log(string2.replace('JavaScript', 'Python')) // 30 Days Of Python

let country1 = 'Finland'
console.log(country1.replace('Fin', 'Noman'))       // Nomanland

string.charAt(index)

let string3 = '30 Days Of JavaScript'
console.log(string4.charAt(0))        // 3

let lastIndex1 = string.length - 1
console.log(string.charAt(lastIndex1)) // t

string.charCodeAt(index)

string.indexOf(substring)

let string4 = '30 Days Of JavaScript'

console.log(string4.indexOf('D'))          // 3
console.log(string4.indexOf('Days'))       // 3
console.log(string4.indexOf('days'))       // -1
console.log(string4.indexOf('a'))          // 4
console.log(string4.indexOf('JavaScript')) // 11
console.log(string4.indexOf('Script'))     //15
console.log(string4.indexOf('script'))     // -1

//syntax
string4.lastIndexOf(substring)
