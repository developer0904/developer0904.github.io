let studentName = "John Doe";
let studentAge = 20;
let promoted = true;
let score = 85.5;
// let city = "New York";

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Promoted:", promoted);
console.log("Score:", score);
// console.log("City:", city);



// VAR LET CONST

const myName = "John Doe";
// const myName = "Alex"; this will cause an error because myName is a constant and cannot be reassigned

let myAge = 20;
myAge = 21; // this is allowed because myAge is declared with let
console.log("My Age:", myAge);// My Age: 21

// var is a function-scoped or globally-scoped variable declaration

function exampleFunction(){

    var localVar = "I am a local variable";
    console.log(localVar); // This will work
}
// console.log(localVar);  This will cause an error because localVar is not defined outside the function

exampleFunction(); // This will print: I am a local variable

function anotherFunction() {
    var globalVar = "I am a global variable";
    if (true) {
        globalVar = "I am not a global variable anymore"; // This will work because var is function-scoped
        console.log(globalVar); // This will print: I am not a global variable anymore
    }
    console.log(globalVar); // This will work because var is function-scoped
}

anotherFunction();// This will print: I am not a global variable anymore and then: I am not a global variable anymore

function letConstExample() {
    let local = "I am a local variable with let";

    if(true){
         let local = "i am inside the if block and i am redeclared";
            console.log(local); // This will print: i am inside the if block
    }

    console.log(local); // This will print: I am a local variable with let
}

letConstExample(); // This will print: i am inside the if block and then: I am a local variable with let

const constantExample = "I am a constant variable";
// const constantExample = "I am trying to redeclare a constant"; // This will cause an error because constants cannot be redeclared
console.log(constantExample); // This will print: I am a constant variable

const anotherConstant = 42;
// anotherConstant = 43; // This will cause an error because constants cannot be reassigned
console.log(anotherConstant); // This will print: 42

const objectExample = {

    name: "John",
    age: 30,
    city: "New York",
    job: "Developer"
}

console.log(objectExample); // This will print the object
objectExample.age = 31; // This is allowed because we are modifying a property of the object
console.log(objectExample); // This will print the object with updated age

// objectExample = {} or anything // This will cause an error because we cannot reassign a constant

const arrayExample = [1, 2, 3, 4, 5];
console.log(arrayExample); // This will print the array
arrayExample.push(6); // This is allowed because we are modifying the array
console.log(arrayExample); // This will print the array with the new element added
// arrayExample = [7, 8, 9]; // This will cause an error because we cannot reassign a constant


/* Arrow Functions */

const add = (a, b) => a + b;
console.log("Sum:", add(5, 3)); // Sum: 8

const double  = (x) => x * 2;
console.log("Double:", double(4)); // Double: 8

/* Understanding 'this' in Arrow Functions */

function myfunc(){
    this.myVar = 0;
    setTimeout(()=>{
        this.myVar++;
        console.log("Value of myVar:", this.myVar); // Value of myVar: 1
    },0)
}

myfunc(); // This will print: Value of myVar: 1


/* implicit return in arrow functions */

function explicitReturn(x) {

    return x * 2; // This is an explicit return
    
}

const implicitReturn = (x) => x * 2; // This is an implicit return
// meaning that the function will return the value of x * 2 without needing the return keyword.
console.log("Explicit Return:", explicitReturn(5)); // Explicit Return: 10
console.log("Implicit Return:", implicitReturn(5)); // Implicit Return: 10


const getPerson = ()=>({name: "John", age: 30});
console.log("Person:", getPerson()); // Person: { name: 'John', age: 30 }
// if are using arrow functions to return an object, we need to wrap the onbject inside the parentheses to avoid confusion with the function body.

const doubleAnother = (a) => a * 2;
console.log("Double Another:", doubleAnother(6)); // Double Another: 12
// here if there is only one parameter, we can omit the parentheses around the parameter.
const square = x => x * x;
console.log("Square:", square(5)); // Square: 25
// if there is no parameter, we need to use empty parentheses.

const noParam = () => {
    const message = "No parameters here!";
    return message;
}
console.log("No Param:", noParam()); // No Param: No parameters here!
// if there are no arguments, we need to use empty parentheses.


/* Destructuring Objects and Arrays */

const personData = {
    name: "Alice",
    age: 25,
    city: "Los Angeles",
}

const {name , age , city} = personData;

console.log("Name:", name); // Name: Alice
console.log("Age:", age); // Age: 25
console.log("City:", city); // City: Los Angeles


const personData2 = {

    firstName: "Bob",
    lastName: "Smith",
    address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA"
    }

}

const joinNames = ({firstName, lastName , address:{street , city:city2, state}}) => {

    return `${firstName}-${lastName}-${street}-${city2}-${state}`;
}
console.log("Joined Names:", joinNames(personData2)); // Joined Names: Bob-Smith

const myArray = [1, 2, 3, 4, 5];

const [first, second, ...rest] = myArray;

console.log("First Element:", first); // First Element: 1
console.log("Second Element:", second); // Second Element: 2
console.log("Rest of the Array:", rest); // Rest of the Array: [ 3, 4, 5 ]


/*Array Methods  map/filter/reduce/find*/

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled); // Doubled Numbers: [ 2, 4, 6, 8, 10 ]
// map() creates a new array with the results of calling a provided function on every element in the calling array.

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Even Numbers: [ 2, 4 ]
// filter() creates a new array with all elements that pass the test implemented by the provided function

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers:", sum); // Sum of Numbers: 15
// reduce() executes a reducer function on each element of the array, resulting in a single output  
// The first argument is the accumulator, which accumulates the callback's return values; the second argument is the initial value of the accumulator.

const result = [0.5, 1.5, 2.5, 3.5]
const totalResult = result.reduce((acc,n) =>{

        return acc + n;
},0);

console.log("Total Result:", totalResult); // Total Result: 8

const findNumber = result.find((n) => {
    return n > 2;
});
console.log("First Number Greater than 2:", findNumber); // First Number Greater than 2: 2.5
// find() returns the value of the first element in the array that satisfies the provided testing 


let cart = {};

const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
];

function addToCart(productId) {
        cart = {...cart, [productId]: 1};
}

addToCart(1);
console.log("Cart after adding product 1:", cart); // Cart after adding product 1


