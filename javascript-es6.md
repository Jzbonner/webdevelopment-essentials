[comment]: # (link to reference article: https://learnvanillajs.com/)

# Vanilla JavaScript, ES6, and Concepts for Web Development
## #The Roadmap

<details>
 <summary>:black_nib: Beginner Topics</summary>

 1. **Var, Let, Const & The Importance of Scope** - Variable properties and how they work with global and block scope<br/>
 2. **Functions and Function Properties** - The building blocks of functionality<br/>
 3. **Strings, Numbers, Dates & Their Transformations** - How to create and transform data types in Javascript<br/>
 4. **DOM Manipulation (Changes Based On User Actions)** - Updating the DOM and responding for user events<br/>
 5. **Arrays, Objects and the Idea Behind Classes** - Their differences and their use cases<br/>
 6. **Asynchronous JavaScript and API Integrations** - How to use asynchronous functions to fetch and manipulate data<br/>
 7. **JavaScript Error Handling** - Testing for production: an overview<br/>
 8. **SDLC, TDD, BDD** - Understanding the Software Development Life-cycle <br/>
 9. **Vanilla JS and BrowserStorage** - Saving data in the browser with localStorage, sessionStorage, and cookies<br/>
 10. **State Based UI and State Management** - How it differs from DOM manipulation and when it's most applicable<br/>
</details>

<details>
 <summary>:black_nib: Advanced Topics</summary>

 1. **UI/UX and the Importance of JavaScript Libraries** - Frameworks vs Libraries and knowing when to apply them<br/>
 2. **ES6 Modules, Plugins and Scalable JavaScript** - How to structure and manage your scripts as your code base grows larger and more complex<br/>
 3. **Test Integration** - Testing for production and an overview of test driven development<br/>
 4. **Build Tools and Token-Based Authentication** -  Automating repetitive web development task and best practices for authentication<br/>
 5. **Static-Site Generators and JAM Stack** - The modern way to build websites and web apps that deliver better performance <br/>
</details>

### Overview 
So what is ECMAScript 6? ECMAScript is a general purpose programming language standardized by the ECMA International. Essentially it is a JavaScript standard that is meant to ensure the interoperability of web pages across different web browsers. ES6, standardized in 2015, brought with it a number of advantages that complemented modern coding paradigms (i.e. object-oriented and functional programming). Some of the advantages of ES6 include: a built-in module system, template literal strings, yarn support, lexical scoping, promises, arrow functions, backward compatibility and much more. Before jumping into the more advanced use cases for ES6 lets take a look at the building blocks of JavaScript and see how these pieces tie together into the core functionality that powers the modern web. 

### Var, Let, Const & The Importance of Scope
Variable scoping is not a new feature to JavaScript, the use of `var` allowed for variables to be declared in a global manner; but there was nothing built into JavaScript that provided proper lexical scoping. *Lexical scoping* is a convention that sets the scope or range of functionality of a variable so that it may only be referenced from within the block of code in which it is defined. A **variable** by definition is a named space in the memory that stores values. Variable names are called *identifiers* and have a set of naming conventions that must be followed: 
  1. Identifiers can't be keywords 
  2. Identifiers can contain alphabets and numbers 
  3. Identifiers cannot contain spaces and special characters (except for`_` and `$`)
  4. Variable names cannot being with a number 

When working with variables you have to initialize them via declaration. As of ES6 there are 3 main ways declare a variable; Using `var`, `let`, & `const`. 

```javascript
//Syntax for declaring a Variable using the var keyword
var variable_name = variable_value

//Example variable declaration 
var name = "Leon"
console.log("The value in the variable is:" + name)

//Output 
`The value in the variable is Leon`
```

JavaScript (excluding TypeScript) is an un-typed language, meaning that JavaScript variables can point to a value of any data type. The value type of a variable can change during the execution of a program and JavaScript will assign a type dynamically; this is know as **dynamic typing**. This dynamic paradigm in JavaScript isn't so easily applied when considering *scope*. Initially JavaScript only defined two scopes: 
  1. **Global Scope**: These variables can be accessed from within any part of the JavaScript code  
  2. **Local Scope**: These variables can be accessed with a declared function in the JavaScript code

```javascript
/*an example function that shows how a global variable can have its value accessed and manipulated from within all parts of the code.*/
var carsProduced  = 10 
var initialResult = `the initial amount of Cars Produced: ${carsProduced}` 
console.log(initialResult) // => carsProduced amount is 10

function carsMade(amountProduced) {
  carsProduced += amountProduced 
  var updatedResult = `the new amount of Cars Produced: ${carsProduced}.` 
  console.log(updatedResult) // => carsProduced amount is 20
}

/*calling the carsMade function with a parameter of 10*/
carsMade(10) 
```

The above example illustrates how the variable `carsProduced` is initialized and declared outside the `carsMade` function. Since `carsProduced` is a global variable you can  access it in the `carsMade` function and update the total number of `carsProduced` by the `amountProduced` parameter - in this case its 10.


```javascript
/*an example function that shows how a variables can be scoped locally to restrict their range of use to a particular part of the code; in this case the carsMade function.*/
var carsProduced  = 10 
var initialResult = `the initial amount of Cars Produced: ${carsProduced}`   
console.log(initialResult) // => carsProduced amount is 10

function carsMade(amountProduced) {
  var carsProduced = 40 // locally scoped variable
  carsProduced += amountProduced // carsProduced in this statement is referring to the locally scoped variable 
  var updatedResult = `the new amount of Cars Produced: ${carsProduced}.` 
  console.log(updatedResult) // => carsProduced amount is 50
}

/*calling the carsMade function with a parameter of 10*/
carsMade(10) 
```

The above illustrates how the variable `carsProduced` is being declared in the local scope of the `carsMade` function, and then updated with the addition of the value of the `amountProduced` parameter. 

Beyond global and local scope, JavaScript also allows the use of block scope to work with variables in a specified code block only. The `var` variable keyword ignores code blocks; meaning all `var` initialized variables are either function scoped or global scoped (if defined within a code block and not globally they are then hoisted to the top as an implied `undefined` variable). In order to restrict a variables access to a particular code block you have to use the `let` or `const` keyword. 

The benefits of using the `let` keyword ensure that you can refine variable usage to the specific code blocks that require access and limit the amount of accessible variables to the public API. If you attempt to declare a `let` variable twice within the same block, it will throw an error; but it is acceptable to declare a `let` variable in different block level scopes without syntax errors. 

```javascript 
let count = 0 
for (let i = 0; i <=5; i++) {
  count++
  console.log(`this is the value of the block scoped variable: ${count}`)
}

/*this will not throw a ReferenceError since it is declared within the global 
  scope*/
console.log(count)

/*this will throw a RefernenceError since it is declared with the `let` 
  keyword within the for loop and attempting to be referenced outside of 
  that code block */
console.log(i) 
```

The `const` declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. Constants are block-scoped, much like variables defined using the `let` keyword. 
  1. Constants cannot be reassigned a value
  2. A constant cannot be re-declared 
  3. A constant requires as intializer (this means constants must be initialized during its declaration)
  4. The value assigned to a constant variable is mutable. 

An example of the immutable properties of `const`: 

```javascript
//declaring and initializing a `const` variable
const CONSTANT_NAME = value 

// `const` variables can't be reassigned a value; and they must be initialized at declaration
const test 
console.log(test) // will return SyntaxError 

const amount = 10
amount = 20 
console.log(amount) // will return TypeError
```

The `const` keyword also has certain restrictions when it's applied to arrays and objects in JavaScript. When an array is designated as a `const` the values of that array can be manipulated but they cannot be reassigned. The same is true for JavaScript objects. 

```JavaScript
/* Declaring an array with the `const` keyword doesn't restrict Array methods from being accessible, but the arrays themselves can not be reassigned*/
const carColors = ['black', 'silver', 'green', 'blue']
carColors.push('red')
console.log(carColors) // will return ['black', 'silver', 'green', 'blue', 'red']

// Array Methods that alter the data of the const declared array are 
carColors.pop() 
carColors.pop()
console.log(carColors) // will return ['black', 'silver']

carColors = [] // will return TypeError  due to reassignment

// Iterating through arrays, maps,and sets with the for...of ES6 syntax, using lets and const 
const classGrades = [88, 92, 85, 96]
for (let score of classGrades) {
  console.log(score) // iterates through the classGrades array and returns every index value 
}

//`const` declared-objects also have similar mutable properties as arrays 
const person = {
  age: 20, 
  name: 'John', 
  job: 'developer'
}

// these assignments will not return an error because the objects property values are mutable
person.age = 30 
person.job = 'data scientist'

console.log(`this is the person's new age: ${person.age}`) // this is the person's new age: 30
console.log(`this is the person's new job: ${person.job}`) // this is the person's new job: data scientist 
```

### Functions and Function Properties
**Functions** are the backbone to modularity in JavaScript. With the introduction of ES6 there were a number of changes to functions that made them more flexible, maintainable, and better suited for reusability. Let's take a deeper dive into the syntax and use cases of functions in ES6. 

Defining a standard function is very similar to declaring variables. They are defined using the `function` keyword and the are executed via function invocation:

```javascript
function exampleFunction() {
  // function body
}

exampleFunction()
```

Functions in JavaScript are classified as either **returning**  or **parameterized** functions. **Returning Functions** are identified by their use of return values - i.e the values that a function returns when it has completed. A returning function must end with a return statement. A function can return at the most one value (one return statement per function). The return statement should be the last statement in the function.  

```javascript
// Defining a function that returns a value
function exampleFunction() {
  return 'hello world'
}

// Declaring a variable and initializing it by calling/invoking the pre-defined function 
let displayMe = exampleFunction()

// will return 'hello world'
console.log(displayMe) 
```

#### Parameterized Functions and Function Arguments
**Parameterized Functions** involve the use of parameters and do not require the use of return statements. Parameters form a part of the function's signature and are used as a mechanism to pass values to the functions themselves. The number of values passed to the a function must match the number of parameters defined. 

```javascript
// Parameterized Function Examples 
function one() {
  return 1 
} 

function multiply(a) {
  return a*a 
}

function sum(a, b) {
  return a + b
}

// All function invocations must have matching parameter values to the parameters of the specified function
one() // returns 1
multiply(4) // returns 16 
sum(2, 3) // returns 2 + 3 = 5
```

Functions can be initialized with default parameters. Default parameters allow for formal parameters to be initialized with default values if no value or undefined is passed. 
> When a value of `undefined` is passed for a parameter with default argument, as expected the value passed is **invalid** and the default parameter value is assigned. But if `null` is passed, it is considered valid and that default parameter is not used and null is assigned to that parameter. 

```javascript
// Example of default parameters being used 
function add(a, b = 1) {
  return a + b 
}

console.log(add(4)) //returns 5 
console.log(add(6, 2)) //returns 8, because the default value is overwritten 

// Previous parameters can also be default parameters for the parameters for the parameters that come after them like 
function multiply(a, b = a) {
  return a * b
}

console.log(multiply(4)) // returns 16 
console.log(multiply(6, 2)) // returns 12, because the default value is overwritten 
```

**Rest Parameters** are named parameters that are preceded by three dots(...). This named parameter becomes an array which contains the rest of the parameters passed during function call. Rest parameters don't restrict the numbers of values that you can pass to a function. Rest Parameters must be the last passed parameter and only one rest parameter can be passed at a time. 

Let's consider our *add* function from before. We can modify it's parameters to be able to add any amount of numbers by using a rest parameter instead of defined ones.


```javascript 
//Rest Parameters being used to add multiple passed values regardless of size
function add(...numbers) {
  return numbers.reduce((sum, number) => sum + number)
}

let sumResult = add(5, 6, 7, 7)
console.log(sumResult) // will return 25 
```

> array.reduce() is an array method that allows you to reduce an array into a value. The above example also uses arrow functions which will be covered in detail in the sections to follow. 

The **arguments** object in JavaScript is very similar in functionality to rest parameters. It is a special construct available inside all function calls. It represents the list of arguments that were passed in when invoking the function. The *arguments* object has a length property that corresponds to the number of arguments passed in the function. You can access these values by indexing into the array. 

```javascript
// This is an example utilizing the arguments object within a function 
function sumNumbers(a, b, c) {
  console.log(arguments[0]) // will log the first passed value of 1
  console.log(arguments[1]) // will log the first passed value of 2
  console.log(arguments[2]) // will log the first passed value of 3
  return a + b + c
}

sumNumbers(1, 2, 3) // will return 5
```

Using arguments provides a lot of flexibility to Javascript functions. But because this is a array-like object and not an actual array, arguments do not work with array methods. For instance `arguments.sort()` will throw a syntax error. If you do need to apply array methods to the arguments object, it is best practice to use the `array.from()` method in order to do so. 

```javascript 
// example of using Array.from()
const testFunction = function(a) {
  const args = Array.from(arguments)  
  console.log(args) // returns [1, 2, 3]
  args.pop() 
  console.log(args) //  returns [1, 2]
}

testFunction(1, 2, 3)
```

Functions that are not bound to an identifier (or function name) are called anonymous functions. They are dynamically declared at runtime. Variables can be assigned to an anonymous function and are typically not accessible after initial creation (i.e. they are usually declared with the `const` keyword when they are assigned to variables, but you can block scope them with the `let` keyword as well.) 

```javascript 
// Example of anonymous function in JavaScript 
let example = function() {
  console.log('anonymous function example')
}
example() // will return anonymous function example

// Example of using anonymous function via arrow functions
let secondExample = () => console.log('second anonymous function example')
secondExample() // will return second anonymous function example
``` 

#### Anonymous Functions and IIFE
Anonymous functions can be used as an argument to other functions or as immediately invoked function. Consider the built-in JavaScript function `setTimeout()`. We can use an anonymous function to set a notification to signify when the countdown has completed. The passed function in this case would be considered a **callback function**. Callback Functions are typically used with asynchronous Javascript functions.  

```javascript
// Example of using an Anonymous function as a Callback 
setTimeout(function(){console.log('this will be executed after the set time has completed')}, 1000)
```

An immediately-invoked function expression (IIFE) is a way to execute functions, as soon as they are created. They are useful in the fact that they don't pollute the global object, and they are a simple way to isolate variable declarations. They can be defined by using standard syntax and arrow functions as well: 

```javascript
// Standard Syntax for declaring an IIFE
(function() {
  /*function body*/
}())

//Arrow Function Syntax 
(() => {
  /*function body*/
}())
```

The most common use cases for IIFEs are: 
* Aliasing global variables 
* Creating private variables and functions 
* Asynchronous functions in loops

IIFE's are primarily for encapsulating and isolating functionality within your code base. We can take a look at how this is achieved by referencing the setTimeout() function from the previous example. 

```javascript
// Creating a for loop that iterates every second and displays a message indicating the current step 
for (let i = 1; i <= 5; i++) {
  // we can use an IIFE to iterate through the counter
  (function (step){
    setTimeout(() => console.log('I reached step ' + step), 1000 * i) // we are using arrow function syntax here
  })(i)
}
``` 

#### Function Constructors 
The function statement is not the only way to define a new function; you can define a new function dynamically using the **Function()** constructor along with the `new` operator. Function constructors in Javascript act as a blueprint for creating multiple objects of the same type. Javascript function constructors are often used in Javascript libraries and frameworks to make syntax more flexible. 

Function constructors require the use of `this` keyword for referencing the object and accessing the object properties once the `new` function has been initialized.

```javascript
//Example of a constructor function 
function Person() {
  this.name = 'Alexis',  
  this.age = 26
}

//Creating an object from the constructor function 
const person = new Person()


//Most constructor functions will be created with specified parameters, so that each new object can be created with specific information relative to the initialized object 
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
```

As from the example above, constructor functions allow you to add properties and methods. Creating object properties is similar to creating variable assignments, `personThree.job = 'Software Developer'` by referencing the object property and its value you can embed the passed value into the Object, however this doesn't embed the passed value into the constructor function itself. The **JavaScript Object Prototype** is how you add a specified property to the constructor function, and propagate it to the created objects through inheritance. 

```JavaScript
//constructor function 
function Profile(person_name, person_age) {
  this.name = person_name,
  this.age = person_age
}

let profileOne = new Profile('John', 23)
let profileTwo = new Profile('Ann', 26)

Profile.prototype.jobType = 'Self Employed'

console.log(profileOne.jobType) //will return Self Employed 
console.log(profileTwo.jobType) //will return Self Employed 
``` 

JavaScript itself has Built-In constructors to work with Objects, Strings, Numbers and Arrays, etc. They are designated as follows.

```javascript
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object
```

It is typically recommended to use primitive data types and create them in a normal way (i.e. `let name = 'John', const number = 65, let toggle = true`). You run the risk of slowing down your code-base by using the built-in Javascript objects to work with primitive data. You should primarily use these native Javascript constructors if you want access to the their object methods. 

* [JavaScript Built-In Constructors](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm)
* [String Object Methods](https://www.tutorialspoint.com/javascript/javascript_strings_object.htm)
* [Number Object Methods](https://www.tutorialspoint.com/javascript/javascript_number_object.htm)
* [Boolean Object Methods](https://www.tutorialspoint.com/javascript/javascript_boolean_object.htm)
 
#### Generator Functions 
Generators are special functions which create iterators, and iterators are objects that have a `next()` method, which can be called to obtain a value. Within a generator function, the keyword `yield` provides the value for `next()`. Generator functions are usually built using *yield expressions*. Each `yield` inside the generator function is a stopping point before the next execution cycle starts. On each `next()` call the `yield` expression returns its value in the form of an object containing the following parameters: `{value: returned_value, done: false}` 
* **Value** - is everything that is written on the right side of the *yield*, it can be a function call, object, etc. For empty yields this value is undefined 
* **Done** - indicates the status of the generator, whether it can be executed further or not. When done returns true, it means that the function has finished its run. 

```javascript
//Example of a generator function 
function* generatorFunction(i) {
  yield i 
  yield i*2 
}

let generatorExample = generatorFunction(5)

console.log(generatorExample) //will return Iterator [Generator] {} which shows that generator functions only iterate with the next() method and also take note that the initial parameter is ignored when the generatorExample variable is declared 
console.log(generatorExample.next()) // will return {value:5, done:false}
console.log(generatorExample.next()) // will return {value:10, done:false}
console.log(generatorFunction(5).next()) // will return {value:5, done:false}
console.log(generatorFunction(5).next()) // will return {value:5, done:false}
```
> Note that in the above example accessing the generatorFunction directly always returns the first yield. By definition, you need to assign the generator function to a variable in order properly iterate over it.

Naturally the generator function will continue to yield a value of `done: false` until it encounters a return statement. Whenever the done status is returned as true, it essentially means that the generator function has completed its run and no further yield is possible. 

<img alt="generator-function" src="https://res.cloudinary.com/dzmc7doja/image/upload/v1627454135/blogsite-content/blogarticle2-javascript/generator-function.png"/>

Generator functions have distinct properties specifically when passing arguments to them. The first yield expression is only evaluated when the `next()` method is called. Every parameter value passed after the initial `next()` has been declared then becomes the value of the previous `yield` expression. As seen in the example below, generator functions have the ability to save **state**. A concept that not only allows for data manipulation but is also heavily relied in higher order frameworks for vanilla JavaScript. 

```javascript
function* parameterGenrator(i) {
  console.log(i) // will log the initial passed parameter value of 10

  // const j is not initialized until the next() step of the generator function is iterated. yield((i*10)) is replaced by the passed value in the next() method i.e. 10; so const j will be evaluated to 5 * 10 which logs 50. 
  const j = 5 * (yield(i*10))
  console.log(j) // will log the value of 50  

  const k = yield((2*j)/4)
  console.log(k) // will log the value of  5

  return(i+j+k) // will return the value of i=10 + j=50 + k=5 for a total of 65 
}

let passedParameter = parameterGenrator(10)
console.log(passedParameter.next()) // will return {value: 100, done: false}
console.log(passedParameter.next(10)) // will return {value: 25, done: false}
console.log(passedParameter.next(5)) // will return {value: 65, done: true}
```

Generator functions vary in their use with modern JavaScript frameworks. There are a few instances in which you may find more efficiency in using generator functions as opposed to regular functions: implementing iterables for array manipulation, lazy evaluation for tokenizing characters (think regular expressions), and cooperative multitasking (think node-js callback conventions for data manipulation).

```javascript 
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
```
> For further information on use case for generator functions refer to this [link](https://medium.com/javascript-scene/the-hidden-power-of-es6-generators-observable-async-flow-control-cfa4c7f31435)

#### Arrow Functions
Arrow functions allow for shorter function syntax which in turn produces cleaner and more readable code. There are 3 parts to an arrow function: 
* Parameters: an arrow function can pass parameters but doesn't require it
* Fat arrow notation: the use of the "goes to" operator `=>` 
* Statements: represents the instruction set of the function

```javascript
// Example of arrow functions  that point to a single line of code 
() => some_statements 

// Example of arrow functions that point to a block of code  
() => {/*code statements*/}

// Example of arrow functions with parameters 
(paramA, paramB) => {/*code statements*/}

// Example of using arrow functions for addition 
let sumTotal = (a,b) => a + b
console.log(sumTotal(5,10)) // will return 15 
```

An important thing to remember regarding the use of arrow function is that it can be tricky to determine the lexical scope when using the `this` pointer. Arrow functions make use of its enclosing scope and do not create a new instance of the `this` pointer whenever it is invoked. Typically the `this` pointer will be bound to the enclosing block when using arrow functions. 

```javascript 
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
```
The benefits of working with arrow functions really takes hold when using object literals and array manipulation. You can use arrow functions to more concisely writer setter and getter functions that return object literals. 

```javascript
// Example of an object literal setter with ES5 syntax 
const setBirthday = function(name, age) {
	return {
		name: name,
		age: age
	}
}
// Example of an object literal setter with ES6 syntax
const setBirthday = (name, age) => ({name: name, age: age})
console.log(setBirthday('Jackson', 26)) // will return Object {name: 'Jackson', age: 26}
```

We can also use arrow functions to manipulate arrays with simpler syntax. Javascript provides the built in array methods of ".map(), .filter(), .reduce()" in order to more effectively work with arrays and their embedded data types. 

```javascript
 // Usage of Map Function
var inputArray  = [9,3,7,21,6,8];
var outputArray = inputArray.map(x => x+50);

document.write("Input Array for Map Function: " + inputArray + "</br>");
document.write("Map function output: " +  outputArray + "</br> </br>");


// Usage of reduce function
var inputArray = [500, 200, 100, 100];

var outputArray = inputArray.reduce(x = (firstValue, restTotalValue) => firstValue - restTotalValue); // Perform reduce on each of the elements


document.write("Input Array for Reduce Function: " + inputArray + "</br>");
document.write("Reduce function output: " +  outputArray + "</br> </br>");

// Usage of filter function
var inputArray  = [2,3,4,5,6,7,8];

var outputArray = inputArray.filter(x => x%2==0); // Will save value to output array 
                                             // only when it is divisible by 2

document.write("Input Array for Filter Function: " + inputArray + "</br>");
document.write("Filter function output: " +  outputArray);
```

**Here is a brief synopsis of the characteristics of arrow functions and their limitations**: 
1. Arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword. As such, a prototype property does not exist for an arrow function.
2. Arrow functions have their own scope, but there’s no ‘this’ of their own.
3. No arguments object is available. You can use rest parameters however.

### Strings, Numbers, Dates & Their Transformations 
#### Strings
ES6 Defines nine specific data and structural types for JavaScript: (Six Primitive Data Types) - `undefined`, `Boolean`, `Number`, `String`, `BigInt`, `Symbol` (Two Structural Types) - `Object`, `Function` (One Structural Root) - `null`. *Primitive Types* are data that is not an object and has no methods. *Structural/Non-Primitive* types are objects - either non-data structural values or object values.

**Strings** are primitive immutable values. They are typically the data type of choice for handling text in JavaScript. With the introduction of ES6, you can now define a string using template literals (i.e. the use of a backtick and ${} syntax). Strings are also able to be defined via single quotes and double quotes. 

```javascript 
// Example of template literals 
let name = 'Alexandria' // let name = "Alexandria" or let name = `Alexandria` is also acceptable
let message = `Hello ${name}` // when using the ${} placeholder syntax be sure to use backticks

console.log(message) // will return "Hello Alexandria" 
console.log(message.length) // will return 16
```
> Although string indexing begins at zero, when returning the length of a string the index starts at 1. `str.length` is a property of strings, not a function (as seen in some other compiled and interpreted languages). 

When handling text it's important to know the ins and outs of escaping characters in a string. All special characters start with a backslash `\` (which is called the escape character). 

<img alt="special-characters" src="https://res.cloudinary.com/dzmc7doja/image/upload/v1628563192/blogsite-content/blogarticle2-javascript/string-specialcharacters.png" />

Accessing characters from within a strong is possible through two methods: accessing character position via square brackets `[pos]` or the string method `str.charAt(pos)`. 

```javascript 
// Example of accessing characters  in a string
let str = `Value`

console.log(str[0]) // will return the character V 
console.log(str.charAt(0)) // will return the character V
```
> Note that square brackets are the more modern approach to accessing string character values, and also note that strings are indexed from the number zero

<img alt="string-index" src="https://res.cloudinary.com/dzmc7doja/image/upload/v1628716638/blogsite-content/blogarticle2-javascript/string-indexing.png"/>

Strings are iterable, and as of ES6, you can use the `for...of` loop to iterate through the character values of a string. 

```javascript
// Example of iterating over strings 
let str = `Testing`
for (let char of str) {
  console.log(char) // will return T,e,s,t,i,n,g
}
```

Strings are the most suited data type for handling and formatting rendered text. Strings are immutable by definition but can be manipulated via string methods and properties:
* .concat() - combines the text of two or more strings and returns a new string
* .indexOf() - returns the starting index of a substring within another string (a -1 is returned if no match is found)
* .charAt() - returns the character at the specified location 
* .lastIndexOf() - returns the index within the string of the last occurrence of the specified value (a -1 is returned if not found)
* .match() - used to match a regular expression against a string 
* .substring() - a portion of a string is returned; a starting and ending location are passed to this function 
* .replace() - used to find a match between a regular expression and a string, and to replace the matched substring with a new substring
* .search() - executes the search for a match of a regular expression. If successful, search returns the index of the match inside the string (returns -1 if not found)
* .splice() - extracts a section of a string and returns a new string 
* .split() - splits a string into an array of strings by separating the string into substrings 
* .length - the length of the string is returned as the count of the number of characters it contains 
* .toLowerCase() - converts the entire string to lower case
* .toUpperCase() - converts the entire string to upper case 

> For further information regarding JavaScript string methods refer to: [Reference](https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property)

**Important takeaways on strings and their uses**:
1. There are three types of quotes (single quotes, double quotes and backticks). Backticks allow a string to span multiple lines and embed expressions `${...}`
2. Strings in JavaScript allow for the use of escape characters in order to handle special character occurrences
3. Lean towards using the square bracket notation `str.[pos]` for character position as opposed to the `.charAt()` method
4. To get a substring use: `.slice() or .substring()` 
5. You can convert a string to lowercase or uppercase by using the `.toLowerCase() or .toUpperCase()` method
6. To look for a substring, use: `.indexOf() or .includes/.startsWith/.endsWith` for simple checks (.includes/.startsWith/.endsWith all return boolean values - either true or false or undefined) 
7. To compare strings according to the language use `.localCompare()` otherwise they will be compared by their characters 
8. To trim white spaces from a string use the `.trim()` method 
9. To repeat a strings value use the `.repeat()` method   

#### Numbers 
`Number()` is a wrapper object that represents numerical data in either integers or floating-point numbers. ES6 introduced a number of constants and methods for making it easier to manipulate numbers in JavaScript. Numbers can be declared via the literal syntax or function syntax. When used a function, `Number(value)` converts a string or other value to the Number type. If the value can't be converted, it returns `NaN`. 

```javascript
// Example of numeric literal syntax 
123 
123.00 
123 === 123.00 

// ES6 use "e" notation for representing large numbers 
let billion = 1000000
let billion = 1e9 // set as 

// Example of function syntax
Number('123') 
Number('123') === 123 //returns true 
Number("unicorn") // returns undefined 
Number(undefined) // returns undefined

// Examples of mathematical operations in JavaScript
console.log(1 + 1) // will return 2 
console.log(12 * 4) // will return 48 
console.log(9 / 3) // will return 3
console.log(20 % 2) // will return 0 
console.log(2 ** 2) // will return 4
console.log(Math.pow(2,2,)) // using the Math() function to evaluate exponents this will return 4

// Example of how infinity is treated in JavaScript 
console.log(2 / 0 ) // will return Infinity 
console.log(0 / 0) // will return NaN 

// JavaScript using floating point math for evaluation 
0.1 + 0.2 != 0.3 
console.log(0.1 + 0.2) // will return 0.30000000000000004
```   
> Note that JavaScript uses floating point math for numerical evaluation of decimals, because it has no way of storing/representing decimal numbers for more detail on this quirk, refer [here](https://0.30000000000000004.com/)

The `Number()` constructor contains a number of static properties and methods for manipulating numerical data. ES6 has added a few new features to the `Number()` datatype. 

**Static Properties**
* `Number.EPSILON` - The smallest interval between two representable numbers
* `Number.MAX_SAFE_INTEGER` - The maximum safe integer in JavaScript
* `Number.MAX_VALUE` - The largest positive representable number
* `Number.MIN_SAFE_INTEGER` - The minimum safe integer in JavaScript 
* `Number.MIN_VALUE` - The smallest positive representable number 
* `Number.NaN` - Represents the 'Not a Number' value 
* `Number.NEGATIVE_INFINITIY` - Special value representing negative infinity 
* `Number.POSITIVE_INFINITY` - Special value representing infinity 

**Static Methods** 
* `Number.isNaN()` - Determine whether the passed value is `NaN`
* `Number.isFinite()` - Determine whether the passed value is a finite number
* `Number.isInteger()` - Determine whether the passed value is an integer
* `Number.isSafeInteger()` - Determine whether the passed value is a safe integer (i.e. a number in between` -(2**53 - 1) and 2**53 - 1`)
* `Number.parseFloat(string)` - Parses an argument and returns a floating point number
* `Number.parseInt(string, radii)` - Parses a string argument and returns an integer of the specified radii; further details on [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

#### Dates 
`Date()` is a built in object that stores date/time and provides methods for date/time management. Creating dates requires declaring a new Date constructor, which without arguments, creates a `Date` object for the current date and time. 

```javascript 
let currentDate = new Date() // will return the current date and time 
let currentDate = Date.now() // will also return the current date and time 

```

| Date Time Format Breakdown | Description |
| --- | ---|
|<img alt="dtf-visual" src="https://res.cloudinary.com/dzmc7doja/image/upload/v1629515815/blogsite-content/blogarticle2-javascript/date-time-format-visual.png" /> |<img alt="date-time-format" src="https://res.cloudinary.com/dzmc7doja/image/upload/v1629263788/blogsite-content/blogarticle2-javascript/date-time-format.png"/>
> Notes on Coordinated Universal Time [(UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

The `Date()` object's constructor is capable of parsing a variety of different date formats: 

```javascript 
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
// will return 'Tue Jan 12 2021 13:25:20 GMT-0500 (Eastern Standard Time)'

console.log(dF.toDateString()) // converts a portion of a date object into a human readable form 
// will return 'Tue Jan 12 2021'

console.log(dF.toLocaleDateString()) // returns the date portion of a date object as a locally formatted string 
// will return '1/12/2021'

console.log(dF.toLocaleTimeString())// returns the time portion of a date object as a locally formatted string
// will return  '1:25:20 PM'

console.log(dF.toLocaleString()) // converts a date object to a locally formatted string 
// will return '1/12/2021, 1:25:20 PM'

console.log(dF.toUTCString()) // converts a date object to a string, according to universal time 
// will return 'Tue, 12 Jan 2021 18:25:20 GMT'

console.log(dF.toISOString()) // returns the date as a string, formatted according to ISO standard 
// will return '2021-01-12T18:25:20.000Z'

console.log(dF.toTimeString()) // converts the time portion of a data object to a string 
// will return '13:25:20 GMT-0500 (Eastern Standard Time)'

console.log(dF.getTime()) // returns the number of milliseconds since midnight Jan 1, 1970 
// will return 1610475920000
```
> Further documentation on [Date object methods and properties](https://www.tutorialrepublic.com/javascript-reference/javascript-date-object.php)

In web development date manipulation is typically used for comparing dates, updating dates and setting custom date formats. There are a few built-in options for handling dates with ES6 and recently there have been a number of date manipulation libraries that make working with date data a lot more efficient.

ES6 allows the formatting of a date into a specific locale using the `Intl` object via the [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl). This built in object allows for specific date time formats and allows you to set locale according to computer defaults. 

```javascript
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

console.log(Intl.DateTimeFormat("en-US", options).format(intl_date)) // will return January 2021 Saturday, 2:56:23 PM
```

Although there ways to manipulate date data in vanilla JavaScript, most enterprise level development teams will take advantage of date manipulation libraries to handle date time data - examples include [moment.js](https://momentjs.com/), [date-fns](https://date-fns.org/) and most notable [Luxon](https://moment.github.io/luxon/#/). Date manipulation libraries aren't a complete overhaul of how date time data is handled in JavaScript but they do provide a more intuitive and readable option for updating and comparing date time data. 

```javascript 
// Example of using the luxon.js library for date time manipulation in JavaScript
let luxon_date = DateTime.now().setZone('America/New_York').minus({weeks:1}).endOf('day').toISO();
```

For example the Date manipulation JavaScript library, **Luxon**, offers features such as: 
* A nice API for working with date times 
* Interval support (from time x to time y)
* Duration support (14 days, 4 minutes, 33 seconds)
* Parsing and Formatting date times, intervals and duration 
* Internationalization of strings using the Intl API
* Detailed and unambiguous math operations
* Built-in handling of time zones 
* Partial support for multiple calendar systems  

**Important Takeaways**: 
* Date and time in JavaScript are represented with the Date object. `Date` objects always carry both date and time data 
* Months are counted from zero (with January at the zero index)
* Days of the week `getDay()` are also counted from zero (with Sunday at the zero index)
* `Date` auto-corrects itself when out-of-range components are set. 
* Dates can be subtracted, giving their difference in milliseconds. That's because a `Date` object becomes the timestamp when converted to a number 
* Use `Date.now()` to get the current timestamp faster 

### DOM Manipulation (Changes based on user actions)
The Document Object Model (DOM) is a tree-like structure showing a hierarchical relationship between differenct HTML elements. The DOM can be referred to as a progamming API for HTML/XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. 

| DOM Tree | Description |
| --- | ---|
| <img alt="dom-tree"  src="https://res.cloudinary.com/dzmc7doja/image/upload/v1630006890/blogsite-content/blogarticle2-javascript/dom-tree.png"/>| 1. **Document**: When a member returns an object of type `docuemnt`, this object is the root `document` object itself <br/> 2. **Node**: Every object located within a document is a node of some kind. An object can be an element node but also a text node or attribute node <br /> 3. **Element**:  The `element` type is based on `node`. It refers to an element of a node of type `element` returnded by a member of the DOM API <br /> 4. **NodeList**: A `nodeList` is an array of elements, like the kind that is returned by the method `document.querySelectorAll()` <br /> 5. **Attr**: When an `attribute` is returned by a member, it is an object reference that exposes a special interface for attributes <br /> 6. **NamedNodeMap**: A `nameNodeMap` is like an array, but the items are accessed by name or index  |

Manipulating rendered content on a website through dom manipulation requires the use of DOM methods (essentially the connection between nodes, elements and events). Of the multitude of DOM methods out there, the following is a list of the most common APIs in HTML scripting using the DOM.

* `document.getElementById('id')`: Retrieves the element with the given `id` as an object  
* `document.getElementsByTagName('tagname')`: Retrieves all elements with the tag name `tagname` and stores them in array like list
* `node.getAttribute('attribute')`: Retrieves the value of the attribute with the name `attribute`
* `node.setAttribute('attribute', 'value')`: Sets the value of the attribute with the name `attribute` to `value`
* `node.nodeType`: Reads the type of the `node`
* `node.nodeName`: Reads the name of the `node`
* `node.nodeValue`: Reads or sets the value of the `node`
* `node.previousSibling`: Retrieves the previous ibling node and stores it as an object
* `node.nextSibling`: Retrieves the next sibling node and stores it as an object 
* `node.childNodes`: Retrieves all child nodes of the object and stores them in an list. (shortcuts: `node.firstChild` & `node.lastChild`)
* `node.parentNode`: Retreives the node containing `node`
* `document.createElement(element)`: Creates a new element node with the name element. You provide the name as a string 
* `document.createTextNode(string)`: Creates a new text node with the node value of string 
* `newNode = node.cloneNode(bool)`: Creates `newNode` as a copy of `node`. If bool is `true`, the clone includes clones of all the child nodes of the original. 
* `node.appendChild(newNode)`: Adds `newNode` as a new (last) child node to node
* `node.insertBefore(newNode, oldNode)`: Inserts `newNode` as a new child node of node before `oldNode`
* `node.removeChild(oldNode)`: Removes the child `oldNode` from node
* `node.replaceChild(newNode, oldNode)`: Replaces the child node `oldNode` of node with `newNode`
* `element.innerHTML`: Reads or writes the HTML content of the given element as a string - including all child nides with their attributes and text content

**DOM Use Cases**

Updating content in div elements, providing functionality to specific compenents and customizing the css styles are only a few of the use cases associated with DOM manipulation. To better  understand these scenarios refer to the examples below.  

Example HTML file:
```
<!DOCTYPE html>
<html lang="en-US">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <title>DOM Manipulation</title>
  </head>

  <body>
    <div id="firstrow" class="container">
      <h1 class="title">DOM Manpulation in JavaScript</h1>
      <p id="hiddentext">I appear and disapper when you click the button below</p>
      <button id="toggle" value="off" onclick="toggleButton()">Toggle Me</button>
    </div>

    <div class="container">
      <h2 class="title">This is another toggle button section</h2>
      <p id="hiddentext">I appear and disapper when you click the button below</p>
      <button id="toggle" value="off" onclick="toggleButton()">Toggle Me</button>
    </div>

    <div class="container">
      <h2 class="title">This is another toggle button section</h2>
      <p id="hiddentext">I appear and disapper when you click the button below</p>
      <button id="toggle" value="off" onclick="toggleButton()">Toggle Me</button>
    </div>
    
    <script type="text/javascript">
      let title = document.querySelector("h1.title")
      console.log(title.innerText) // an example of pulling in specific information 

      function toggleButton() {
        let button = document.getElementById("toggle")
        console.log(button.value) // console will show when the button is set to off vs on
        let p = document.getElementById("hiddentext")
        if (button.value === "on") {
          p.style.display = "block";
          button.value = "off";
        } else {
          p.style.display = "none";
          button.value = "on";
        }
      }

    </script>
  </body>

</html>

```
> Refer to jsfiddle environment [here](https://jsfiddle.net/jzbonner/0h6n975t/)

Using the example above we can take an indepth look at how DOM manipualtion methods work in the process of creating, modifying and removing elements. In JavaScript you can declare variables based off of html elements rendered on the client-side. Refer to the following examples below: 

```javascript
// `getElementById` can be used to reference a specified paragraph element and by attaching the attribute `.textContent` you can access the inner HTML
let firstId = () => console.log(document.getElementById("hiddentext").textContent);
firstId(); // will return "I appear and disappear when you click the button below"

// Using `getElementsByClassName` to reference all HTML elements with the specified selector. The declared variable `let background` can be treated like an array. The DOM style property can then be used to change the background color of the specified HTML element  
let containers = (style) => {
  let background = document.getElementsByClassName("container")[0];
  background.style.color = style;
  console.log("background style has been changed via the container variable");
}
containers("#DBD5CD");

// Realizing that the `getElementsByClassName` method returns an array, we can use the `for...of` statement to iterate through all elements in the array and update their DOM style property automaticatically 
function backgroundChange(style) {
  let containers = document.getElementsByClassName("container");
  for (const background of containers) {
    background.style.color = style;
  }
  console.log("background style has been changed via the the backgroundChange function");
}
backgroundChange("#B0C28D");

// Using `querySelector` and `querySelectorAll` are similar in design except one returns the first element that matches the passed parameter and the second returns all elements that match the passed parameter; in this case the parameter being a CSS selector 
let button = () => console.log(document.querySelector("button#toggle").textContent);
button(); // will return inner text of the button element i.e. "Toggle Me"

let buttons = () => console.log(document.querySelectorAll("button#toggle")[0].nodeName);
buttons(); // will return the node name of the element at index 0 in the list of elements that match the `button#toggle` CSS selector i.e. "BUTTON"

// An example of updating the DOM by creating and appending elements 
function addParagraph() {
  let body = document.querySelector("#firstrow");
  let newParagraph = document.createElement("p");
  let newText = document.createTextNode("this is a text that was added with the `addParagraph` function!")
  body.appendChild(newParagraph).appendChild(newText);
}
addParagraph();

// An example of adding/removing/toggling/checking classes with DOM Manipulation
let titleText = document.querySelector("h1.title");
titleText.classList.add("added-class"); // will add the css class `added-class` to the h1.title element 
// titleText.classList.remove("added-class");  will remove the css class from the h1.title element 
// titleText.classList.toggle("added-class"); will toggle the `added-class` css class to the element if not set, if it is already present it will remove it
// titleText.calssList.contains("added-class"); will return a boolean value if the h1.title element has/doesn't have the specified class
```
**Event Listening** 
One specific area where DOM manipulation becomes a vital tool is when employing event listeners. Events are signals that are fired inside the browser window that notify of changes in the browser or operating system environment. Programmers can create *event handler* code that will run when an event fires, allowing web pages to respond appropriately to change. 

> Further information on `Events` in JavaScript can be found [here](https://developer.mozilla.org/en-US/docs/Web/Events#event_index)

There are two recommended approaches for registering event handlers. Event handler code can be made to run when an event is triggered by assigning it to the target's corresponding `onevent` property, or by registering the handler as a listener for the element using `addEventListener()` method. 



**DOM Manipulation Libraries**

DOM manipulation is an extrememly useful tool for solving simple functionality use cases. But thinking in terms of modularity and optimization, most enterprise level web applications will probably take advantage of a JavaScript library to make DOM manipulation more efficient. Specifically [umbrella.js](https://umbrellajs.com/) and [femtojs](https://vladocar.github.io/femtoJS/) are two well known DOM manipulation libraries that streamline the process of working the DOM. 

### Arrays, Objects and the Idea Behind Classes

### Asynchronous JavaScript and API Integrations

### JavaScript Error Handling 

### SDLC, TDD, BDD 

### Vanilla JavaScript and BrowserStorage 

### State-Based UI and State Management 

<details>
	<summary><img align="left" alt="brain-logo" width="26px" src="https://res.cloudinary.com/dzmc7doja/image/upload/v1476137279/favicons/favicon_zbg0x4.png"/>References and Sources</summary>

##### Important Links for ES6 
* Documentation for ES6 [Features & Overview](http://es6-features.org/)
* Reference Material: [Exploring ES6](https://exploringjs.com/es6/index.html#toc_ch_core-features)

</details>
