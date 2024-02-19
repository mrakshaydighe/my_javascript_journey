// push method change the orignal aary 
// arry are mutable (where strings arent changed coz they are ammutabkle)
// use const 

let arry1 = ["a109", "a110","a220"]

console.log(arry1.push("Akshay",2));
console.warn(arry1)

console.log(arry1.pop())// as we pop method aslo returen the value which it removed 

// we can store poped item in new arry
let poopeditem = arry1.pop()
console.warn(poopeditem);




// unshift shift
// unshift is use to add new elment in staring of arry
const arry2 = [1,2,3,4]
arry2.unshift("Welcome","Hii")
console.log(arry2);

let new3 = arry2.shift();
console.log(new3);

// shift remove fisrt element returns
// pop remove last element   also returs it
// push and pop fast as compaire to shift unshift 
// (shift and unshift need to allocate all elements in memoery before do)
