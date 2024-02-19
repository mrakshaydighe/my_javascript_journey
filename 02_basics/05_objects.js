
// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Akshay",
    "full name": "Akshay Dighe",
    [mySym]: "mykey11",
    age: 23,
    location: "Mumbai",
    email: "Akshay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Akshay@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Akshay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());