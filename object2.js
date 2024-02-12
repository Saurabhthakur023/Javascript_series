//object are two types singleton and literals

//->singleton
const tinderUSer=new Object();
tinderUSer.id="123ab";
tinderUSer.name="saurabh";
tinderUSer.isLogged=false;
console.log(tinderUSer);
console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));
console.log(tinderUSer.hasOwnProperty('isLogged'));

const rehulareUser={
   email: "saurabhthakur02310",
   fullname: {
      userfullname: {
         firstname: "saurabh",
         lastname: "singh",
      }
   }
}
//console.log(rehulareUser.fullname.userfullname.firstname);

const obj={1:"a",  2: "b"}
const obj1={ 3: "c" , 4: "d"}

//const obj3=Object.assign(obj ,obj1);
/*const obj4=Object.assign({},obj ,obj1);
console.log(obj3);
console.log(obj4);*/
