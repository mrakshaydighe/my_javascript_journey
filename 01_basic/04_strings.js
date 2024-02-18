

let myString = "Aksahy";
let arry1 = [22,33,44,556,67];

console.log(typeof(arry1));
console.log(typeof(myString));
console.log(typeof arry); //if varible not delcalre then its show undefined
console.log(typeof arry1); //we also do like this

// converting a number into a string

let num1 = 222;

let stringNum = num1 + "";

console.log(num1,stringNum,typeof(num1),typeof(stringNum));

// here we can see the typeof as well as converstions

// converting a number into a string

let string1 = "200";

let numstring = +string1;

console.log(string1,numstring);

// here we can see adding plus (+) before string used

// another methods
let numstring2 = Number(string1);
let num2 = String(num1);
console.log(numstring2,num2);

// here we did

// template string
let about =`data is ${num1}`
console.log(about);

