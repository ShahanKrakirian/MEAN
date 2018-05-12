// 1. Setting types

// var myString: string;
// myString = "Bee stinger";

// //Added this to be consistent with type.
// var myNumber: number;
// myNumber = 9;

// 2. Setting the types for function parameters

// function sayHello(name: string){
//    return `Hello, ${name}!`;
// }
// console.log(sayHello("Kermit"));
// //Added quotes around the 9 to make the type consistent.
// console.log(sayHello("9"));

//3. Optional parameters

// // Added a question mark after middleName to make it an optional parameter.
// function fullName(firstName: string, lastName: string, middleName?: string){
//    let fullName = `${firstName} ${middleName} ${lastName}`;
//    return fullName;
// }
// // This works:
// console.log(fullName("Mary", "Moore", "Tyler"));
// console.log(fullName("Jimbo", "Jones"));

//4. Interfaces and function parameters

// interface Student {
//    firstName: string;
//    lastName: string;
//    belts: number;
// }
// function graduate(ninja: Student){
//    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
// }
// const christine = {
//    firstName: "Christine",
//    lastName: "Yang",
//    belts: 2
// }
// // We needed an "s" at the end of "belt" for jay to make this work.
// const jay = {
//    firstName: "Jay",
//    lastName: "Patel",
//    belts: 4
// }
// console.log(graduate(christine));
// console.log(graduate(jay));

//5. Classes and function parameters

// class Ninja {
//    fullName: string;
//    constructor(
//       public firstName: string,
//       public lastName: string){
//          this.fullName = `${firstName} ${lastName}`;
//       }
//    debug(){
//       console.log("Console.log() is my friend.")
//    }
// }
// // We needed to give shane a first and last name.
// const shane = new Ninja("Shahan", "Krakirian");
// console.log(shane);

// // We never instantiated turing as an object of the Ninja class.
// const turing = new Ninja("Alan", "Turing");

// function study(programmer: Ninja){
//    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
// }
// console.log(study(turing));

//6. Arrow functions

// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));

// // Got rid of the brackets here, we don't need them for a single line of calculations.
// var square = x => x * x;
// console.log(square(4));

// // If we have more than one argument for the arrow function, we need to show that with parentheses.
// var multiply = (x, y) => x * y;
// console.log(multiply(5, 4));

// // Arrow functions whose logic is longer than a line need brackets.
// var math = (x, y) => {
//     let sum = x + y;
//     let product = x * y;
//     let difference = Math.abs(x - y);
//     return [sum, product, difference];
// }
// console.log(math(5, 4));

//7. Arrow function and "this"

// // Make "function(){} an arrow function instead to refer to the correct "this" (the instantiated elephant, not the window.)
// class Elephant {
//    constructor(public age: number){}
//    birthday = () => {
//       this.age++;
//    }
// }
// const babar = new Elephant(8);
// setTimeout(babar.birthday, 1000)
// setTimeout(function(){
//    console.log(`Babar's age is ${babar.age}.`)
//    }, 2000)
