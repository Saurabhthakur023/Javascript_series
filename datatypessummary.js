//premitive datatypes

//7 types : string,NUmber,boolean,null,undefined,symbol,Big int.

//Refernce type or non primitve

// 1. array,object, functions

// javascipt is dynamically typed language

const Id=Symbol('123')
const anotherId=Symbol('123')
console.log(Id==anotherId); //both are differnt

 let myfunction=function(){
   console.log("Hello world");
}


//*****************************************//

//Stack memory used in primitive data type
//Heap memory used in non primitive data type

//in Stack we work on the copy of data
let myname="Saurabh"
anothername=myname
anothername="Singh"
console.log(myname)
console.log(anothername)


//in heap we wrok on the actual value


let userOne={
   email: "saurabhsingh@123",
   id: "123"
}



let usertwo =userOne

usertwo.email="sighthakur234"

console.log(userOne.email);
console.log(usertwo.email);
