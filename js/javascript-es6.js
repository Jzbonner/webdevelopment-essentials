// Defining a function that returns a value
function exampleFunction() {
    return 'hello world'
  }
  
  // Declaring a variable and initializing it by calling/invoking the pre-defined function 
  let displayMe = exampleFunction()
  
  // will return 'hello world'
  console.log(displayMe) 
  
  // Example of using Rest Parameters
  function testResults(name, gradeLevel, ...semesterGrades) {
    console.log(`${name} is in the ${gradeLevel} grade, and these are his Semester Grades ${semesterGrades}`)
  }
  
  testResults('John', '11th', 94, 83, 86, 97)
  
  // rest parameter example
  function add(...numbers) {
    return numbers.reduce((sum, number) => sum + number)
  }
  
  let sumResult = add(5,6,7,7)
  console.log(sumResult)
  
  // using the array.reduce() method and arrow functions 
  let number = [1, 2, 4]
  
  let sum = number.reduce((number, total) => number + total) 
  console.log(sum)
  
  // using the arguments object 
  function sumNumbers(a, b, c) {
    console.log(arguments[0]) // will log the first passed value of 1
    console.log(arguments[1]) // will log the first passed value of 2
    console.log(arguments[2]) // will log the first passed value of 3
    return a + b + c
  }
  
  sumNumbers(1, 2, 3) // will return 5
  
  // example of using Array.from()
  const testFunction = function(a) {
    const args = Array.from(arguments)  
    console.log(args) // returns [1, 2, 3]
    args.pop() 
    console.log(args) //  returns [1, 2]
  }
  
  testFunction(1, 2, 3)
  
  // example of anonymous function 
  let example = function() {
    console.log('anonymous function example')
  }
  example()
  
  // Example of using anonymous function via arrow functions
  let secondExample = () => console.log('second anonymous function example')
  secondExample()
  
  // Using IIFE's for callbacks 
  for (let i = 1; i <= 5; i++) {
    // we can use an IIFE to iterate through the counter
    (function (step){
      setTimeout(() => console.log('I reached step ' + step), 1000 * i)
    })(i)
  }
  
  //Example of function constructors 
  function Person(person_name, person_age, person_gender) {
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender
    
    //think of this as a function assignment to an anonymous function 
    this.greet = function() {
      console.log('Hello' + ' ' + this.name)
    }
    
  }
  
  const personOne = new Person('Jayden', 27, 'male')
  const personTwo = new Person('Brianna', 23, 'female')
  let personThree = new Person('Kim', 24, 'female')
  
  personThree.job = 'Software Developer'
  
  console.log(personOne.name) //will return Jayden 
  console.log(personTwo.name) //will return Brianna 
  console.log(personTwo.job) //will return undefined 
  console.log(personThree.job) // will return Software Developer
  personOne.greet() //will return Hello Jayden 
  personTwo.greet() //will return Hello Brianna 
  
  //Example of using javascript object prototypes 
  function Profile(person_name, person_age) {
    this.name = person_name,
    this.age = person_age
  }
  
  let profileOne = new Profile('John', 23)
  let profileTwo = new Profile('Ann', 26)
  
  Profile.prototype.jobType = 'Self Employed'
  
  console.log(profileOne.jobType) //will return Self Employed 
  console.log(profileTwo.jobType) //will return Self Employed 
  
  // Example of Generator Functions 
  function* generatorFunction(i) {
    yield i 
    yield i*2 
  }
  
  let generatorExample = generatorFunction(5)
  
  console.log(generatorExample) //will return Iterator [Generator] {} which shows that generator functions only iterate with the next() method
  console.log(generatorExample.next()) // will return {value:5, done:false}
  console.log(generatorExample.next()) // will return {value:10, done:false}
  console.log(generatorFunction(5).next()) // will return {value:5, done:false}
  console.log(generatorFunction(5).next()) // will return {value:5, done:false}
  
  // Example of how parameter values wortk with Generator Functions 
  function* parameterGenrator(i) {
    console.log(i) 
  
    const j = 5 * (yield(i*10))
    console.log(j)
  
    const k = yield((2*j)/4)
    console.log(k)
  
    return(i+j+k)
  }
  
  let passedParameter = parameterGenrator(10)
  console.log(passedParameter.next())
  console.log(passedParameter.next(10))
  console.log(passedParameter.next(5))
  
  // Example of setting a function as the yield expression to a generator function 
  function* fetchUser() {
    const user = yield getData() 
  }
  
  function getData() {
    return {
      firstName: "Jeremiah",
      lastName: "Adams", 
      age: 26
    }
  }
  
  let employee = fetchUser() 
  
  console.log(employee.next().value)
  
  // Example of using arrow functions for addition 
  let sumTotal = (a,b) => a + b
  console.log(sumTotal(5,10)) // will return 15 
  
  // Example of Using Arrow Functions with the this pointer
  function Student(id, firstName, lastName) {
      this.id = id 
      this.firstName = firstName
      this.lastName = lastName
  
      this.fullName = function() {
          setTimeout(function(){
              // this function creates a new instance of this and hides the outer scope
              console.log(this.firstName + " " + this.lastName) 
          })
      }
  
      this.fullNameUsingArrow = function() {
          setTimeout(()=>{
              // this function does not create a new instance of this and instead uses the outer scope 
              console.log(this.firstName + " " + this.lastName)
          }, 1000)
      }
  }
  
  const studentOne = new Student (1, 'Garrett', 'Jones')
  studentOne.fullName() // return undefined 
  studentOne.fullNameUsingArrow() // will return Garrett Jones 
  
  // Example of template literals 
  let name = 'Alexandria'
  let message = `Hello ${name}` 
  
  console.log(message) // will return "Hello Alexandria" 
  console.log(message.length) // will return  16 
  
  // Example of iterating over strings 
  let str = `Testing`
  for (let char of str) {
    console.log(char)
  }

// Floating point numbers 
console.log(0.1 + 0.2) // will return 0.30000000000000004

// Examples of mathematic Operations in JavaScript
console.log(1 + 1) // will return 2 
console.log(12 * 4) // will return 48 
console.log(9 / 3) // will return 3
console.log(20 % 2) // will return 0 
console.log(2 ** 2) // will return 4
console.log(Math.pow(2,2,)) // will return 4

// Example of variety of date formats compatible with the Date object constructor
const dateOne = new Date("Sun, 24 July 2021 12:20:00")
const dateTwo = new Date("Sun, 24 July 2021 8:45:00 UTC")
const dateThree = new Date("24 July 2021 13:30 UTC+08:45")

// Example of passing separate arguments to the Date object constructor 
const dateFour = new Date(2021, 7, 24, 12, 20, 0)
console.log(dateFour) // will return 2021-08-24T16:20:00.000Z

// Example of formatting dates with Date object methods 
let dF = new Date("2021-01-12T13:25:20")

console.log(dF.toString()) // converts a date object to a string
// 'Tue Jan 12 2021 13:25:20 GMT-0500 (Eastern Standard Time)'

console.log(dF.toDateString()) // converts a portion of a date object into a human readable form 
// will return 'Tue Jan 12 2021'

console.log(dF.toLocaleDateString()) // returns the date portion of a date object as a locally formatted string 
// will return '1/12/2021'

console.log(dF.toLocaleTimeString())// returns the time portion of a date object as a locally formatted string
// will return  '1:25:20 PM'

console.log(dF.toLocaleString()) // converts a date object ot a locally formatted string 
// will return '1/12/2021, 1:25:20 PM'

console.log(dF.toUTCString()) // converts a date object to a string, according to universal time 
// will return 'Tue, 12 Jan 2021 18:25:20 GMT'

console.log(dF.toISOString()) // retruns the date as a string, formatted according to ISO standard 
// will return '2021-01-12T18:25:20.000Z'

console.log(dF.toTimeString()) // converts the time portion of a data object to a string 
// will return '13:25:20 GMT-0500 (Eastern Standard Time)'

console.log(dF.getTime()) // returns the number of milliseconds since midnight Jan 1, 1970 
// will return 1610475920000

// Example of using the Intl object in ES6 
let intl_date = new Date("2021-01-09T14:56:23")
let options = {
  year: "numeric",
  month: "long",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}

console.log(Intl.DateTimeFormat().format(intl_date)) // will return 1/9/2021

console.log(Intl.DateTimeFormat("de-DE").format(intl_date)) // will return 9.1.2021

console.log(Intl.DateTimeFormat("en-US", options).format(intl_date)) // will return January 2021 Satruday, 2:56:23 PM

