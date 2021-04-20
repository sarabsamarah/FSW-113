//CLO1: JavaScript:

//var temp = ( ) => 104

//Question: What is the value shown in the console for the following statements?

//a)console.log(typeof temp);  the output here is function

//b) console.log(temp()) the output here is 104

//CLO3: JavaScript:

//var temp = ( multiplier, devider ) => 104 * multiplier/ devider

//Question: What is the value shown in console for following statements?

//console.log(temp(3, 6))  the output is 52

//CLO4: JavaScript:

// var temp = ( multiplier, divider ) => {  // block

//          let result = 104 * multiplier

//          if ( result){

//             result = 104 / divider

//          }

//        return result

// }

// //Question: What is the value shown in the console for the following statements

// console.log(temp(3, 6))  the output is 17.333333333

// this context, a very important concept

//CLO5: JavaScript:

// var clickButton = function(){

//    console.log(this) 
   
// }

// //Question: What is the value shown up in console for following statements
// console.log(clickButton())
// the output:
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//   }
// }

//CLO6 JavaScript:

// var clickButton = function (){

//    console.log(this)
// }

// //Question: What is the value shown up in console for following statements

// clickButton()
// same output as previous CLO 
// CLO6 JavaScript:

//{/* <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//   }
// } *///}
// CLO7 JavaScript:

// var clickButton = ( )  => {

//    console.log(this)
// }

// //Question: What is the value shown up in console for following statements
// the output is {}
// clickButton()

//CLO8 JavaScript:

// var person =  {

//      name : 'David Smith',

//      age : 56,

//      details: function ( ){

//            console.log(this)

//      }

// }

// //Question: What is the value shown up in console for following statements

// person.details( )
// the output is { name: 'David Smith', age: 56, details: [Function: details] }

//CLO9 JavaScript:

// var person =  {

//      name : 'David Smith',

//      age : 56,

//      details: ( ) => {

//            console.log(this)

//      }

// }

// //Question: What is the value shown up in console for following statements

// person.details( )

// the output is {}

//CLO10 JavaScript:

// var temp  = ( )   => 100;

 
// with the correction I added the output is: Function: temp]
// //Question: What is the value shown up in console for following statements

// console.log(temp)

// //Answer: remember you cannot put "=>" on anew line









 