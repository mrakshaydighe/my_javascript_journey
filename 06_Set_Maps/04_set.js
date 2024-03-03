
const myarry = [1,2,3,4,5,3,4,5,6,6];

let myset = new Set(myarry);

console.log(myset);

// find umiq elemenets in array 
// also find lenght of umiqe set
let lenght = 0;

for(let element of myset){
    lenght++;
}

console.log(lenght)