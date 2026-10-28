var a = "This is a dynamic variable";
a = "45";
const c = 70; //  const needs initialization at declaration time otherwise undefined and can never be changed
console.log(a)
//  c=true; c is a static variable and cannot be reassigned
console.log(c)
console.log(b); //this is called hoisting. the declaration of var moves up but assignment stays below. this reuslts in undefined declared variable
var b = 90;

//console.log(e);
//const e = 10; // this creates a "temporal dead zone" declaration goes to tdz.

// console.log(f);
// let f = 6;


/**
 * Primitive data types --
 * Number
 * String
 * Boolean
 * undefined
 * null
 */

let m = 5;
console.log(m, typeof(m))
m = "ketchup";
console.log(m, typeof(m))
m = true;
console.log(m, typeof(m))
m = null;
console.log(m, typeof(m))
m = undefined;
console.log(m, typeof(m))

// == to check value === to check data type also

/**
 * Secondary Data Types --
 * Object
 * Array
 * Function
 */

var myObj = {
    name:"walt",
    show:showName,
    occupation:"chemistry teacher"
}

console.log(myObj)
//console.log(myObj.occupation)
myObj.show();

function showName(){
    console.log(myObj.name);
}