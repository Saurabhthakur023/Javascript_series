const user={
   username: "Saurabh",
   price: 999, 
   welcomemessage: function(){
      console.log(`${this.username} , welcome to website`);
      
   }
   
      
}
/*user.welcomemessage();
user.username="sam"
user.welcomemessage();*/
console.log(this);


const code= function(){
   let username="saurabh";
   console.log(this.username);
}

code();


// using arrow function................

const code2 = () =>{
   let username="saurabh";
   console.log(this);
}

code2();

const addTwo =(num1,num2)=>{
   return num1+num2;
}

console.log(addTwo(2,3));


const addTwo1 =(num1,num2)=> (num1+num2 )//implicit

console.log(addTwo1(2,3));

// Immediately invoked function experssions (IIFe)

//glbal scope paluation ko htane k liye hamen iife k use kiya

(function chai(){
   console.log("DB Connected"); //nameiife
})();

 // or
((name)=>{
   console.log(`DB connected two ${name}`); //unnamed iife
})("saurabh")



