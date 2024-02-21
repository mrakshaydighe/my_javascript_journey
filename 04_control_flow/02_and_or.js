// and or operator


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}



//////////////////////////////////more practics
let name3 = "zAkshay";

let age = 19;

if(name3 == "Akshay" && age >= 18){
    console.log("Valid")
}else{
    console.log("invalid")
}

// now we chack the 1st letter 

if (name3[0]==="A" || age >= 18){
    console.log("Valid")
}else{
    console.log("invalid")
}

if (name3[0]==="A" && age >= 18){
    console.log("Valid")
}else{
    console.log("invalid")
}

// in "and" condition (&&) need both conditions are macth 
// in "or" condition (||) need any one condition are macth 


