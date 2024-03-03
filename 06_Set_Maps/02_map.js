
// creating with adding array 
const mynew = new Map([["fname",90],["fname2", 9000]]);

// we creat an object and add rest key value paire by using map or inside map

const myObject = {
    "id": 1,
    "Fname": "Akshay",
}

const Userinfo = new Map();
Userinfo.set(myObject,{age:22,gender:"Male"});
// we set our object as map key value paire
console.log(Userinfo);

console.log(Userinfo.get(myObject).age);
