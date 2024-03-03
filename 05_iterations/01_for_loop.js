// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue in loop

// break stop the loop when vale of i == 4 
for(let i=0;i<=10;i++){
    if(i===4){
        break;
    }
    console.warn(i);
}


// continue will skip the value of i wjen it goes to the 10 ;
for(let i=0;i<=10;i++){
    if(i===4){
        continue;
    }
    console.log(i);
}