"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +   // dont write code like that
     3) // code readability should be high 

console.log("Akshay")


let name = "Akshay"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// undefined and null

var string;
let string1;    //undefined
const strings = "Op"; //we never makes empty value for our const

console.log(string,string1)

string = "##";
string1 = "op"
console.log(typeof(string),typeof string1);

// null 

let newv = null;
console.log(newv);
newv = "askahy"
console.log(newv);

// as we see we can change value of varibles in both seens 

console.log(typeof null);

// bug in the js so always remember type of null shows the object 
// why it not change? because if this chnage then lot of codes will get in trouble 


// bigint (comes in 2020)

// what is biggest safe integer we can store ??

console.log(Number.MAX_SAFE_INTEGER);

//for storeing big no. we use big int 
// we use bigint also for small numbers like 22,33

let mynum = BigInt(0989849378987329058308);
let num4 = 7864236432478n;
console.log(typeof(mynum));
console.log(typeof(num4));
// spelling is in camel case B and I is in uppercase
// another process for big int is add n after no.
// we cannot did operation with bigint with other data types


