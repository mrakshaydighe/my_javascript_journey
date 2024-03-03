// map is an alternative of objects
// dublicates keys are not allowed in map like objects 

// differane betwwen object and map 
// object is only have string or symbol as key 
// where map we can use anthing as key  like arrry

const mymap = new Map();

// adding key paires in Map

mymap.set('Fname',"Akshay");
mymap.set('Age', 22);
mymap.set(1 , "thisisone");
mymap.set([1,2,3] , "Iam arry");

// console.log(mymap);

// for getting SVGFETileElement;s value
// console.log(mymap.get("Fname"));

// for getting all keys from our Map
console.log(mymap.keys());


// for of loop 

// for(let key of mymap.keys()){
//     console.log(key, typeof key) 
// }

// for(let key of mymap){
//     console.log(key);   // this sgives us an arrys
// }

for(let key of mymap){
    // console.warn(Array.isArray(key));  // this sgives us an arrys
    //console.warn(key)   // this sgives us an arrys
}

// destuthure 


for(let [key,value] of mymap){
    console.warn(key ,value)
}