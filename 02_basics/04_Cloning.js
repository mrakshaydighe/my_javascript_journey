// clonning arrry and concat spread oprator

let arrry = ["item1 ", "item2", "item3", "item4"];
let arrry2 = ["item1 ", "item2", "item3", "item4"];
console.warn(arrry===arrry2);
// if we creeat an arrry with same elments are not same beacsue 
// both of have there own memoery


let arr2 = arrry;
console.log(arr2)




// for creting seprate arrys ;;;;

// slice method
let list1 = arrry[0];
console.log(list1)  // this add item1 in list 1

let list2 = arrry.slice(); // (0) defult is zero aslo with start from 1st index
let list3 = arrry.slice(2); //start from 2nd index 
console.warn(list2);
console.log(list3); 

// .concat method
// this method also creat an seprate arry 
let concatList1 = [].concat(arrry);
console.log(concatList1);


// spread oprator (new method)
let spreadList = [...arrry];
console.log(spreadList);


// conclision slice method is fastest method and spread oprator is popular