// set are similar as arry it are iterable 
// No index base acsses (no orderd store)
// No dublicates are allowed 
// use new Set()

const num = new Set([1,2,3,4,4,4]);
// console.log(num[0]);   // undifined

// adding elemnets in set
const num2 = new Set();
num2.add(20);
num2.add("string")
num2.add(["a1","a2"])
num2.add(["a1","a2"])  // addres is differnent 
console.log(num2);


// has method  (use to check any perticulor element)
console.warn(num2.has(20)); 
// if else with set

if(num2.has(3)){
    console.log("yes");
}else{
    console.log("not")
}