const mySym = Symbol("Key")
const jsUser={
   name: "saurabh",
   age: 21,
   mySym: "nothing",
   location: "bareilly",
   email: "saurbhathakur@gmail.com",
   isLoggedin: false,
   lastLogin: ["Monday","saturday"]

}
console.log(jsUser["name"]);
console.log(typeof jsUser.mySym);
console.log(typeof jsUser[mySym]);

jsUser.greeting =function(){
   console.log("Hello js user");
}

console.log(jsUser.greeting());
jsUser.greetingtwo =function(){
   console.log(`Hello js user` &(this.name));
}
console.log(jsUser.greetingtwo());


