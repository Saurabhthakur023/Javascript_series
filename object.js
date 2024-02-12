//object literals
//interview question to declare symbol


const mySym=Symbol("Key1");

const jsUser={
  name : "Saurabh",
  [mySym]: "Key1",
  age: 19,
  email: "saurabhthakur02310@.com",
  location: "Bareilly",
  isLoggedIn: false,
  lastLoginDays: ["Monday","Saturday"]
}

//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["mySym"]);

jsUser.email="singhthakur12gmail.com"
//locking the value
Object.freeze(jsUser);

jsUser.email="thakursaurabh"

//console.log(jsUser);


jsUser.greeting=function(){
  console.log("Hello js user");
}

console.log(jsUser.greeting());






