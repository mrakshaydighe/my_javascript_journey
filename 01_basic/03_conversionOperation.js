let score = "Akshay"

console.log(typeof score);
console.log(typeof(score)); // both are same

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // returns type number
console.log(valueInNumber); // returns the NaN


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Akshay"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1
// console.log(true+) not allowed
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2;

// it assaing 2+2 at all variables but not make sense

let gameCounter = 100;
++gameCounter; // Increment gameCounter by 1 before using its value
console.log(gameCounter); // Output: 101


let gameCounter2 = 100;
gameCounter2++; // Increment gameCounter2 by 1 after using its value
console.log(gameCounter2); // Output: 101

console.log(+"45") // 45
console.log(+true);  //1
console.log(+""); //0
console.log(+null) //0
console.log(+false)//0
console.log(+[]) //0
console.log(+[2])//2
// console.log(+(new Symbol("a")))

console.log(+{}) //NaN
console.log(+undefined ) //NaN
