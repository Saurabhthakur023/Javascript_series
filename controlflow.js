function checkVowel(str){
  let count =0;
  for(const char of str ){
   if(char === "a" || char === "e" || char ==="i" || char === "o" || char === "u"){
      count++;
   }
  }
  console.log(count);
}
checkVowel("saurabh");


 const checkVowel1=(str)=>{
   let count =0;
   for(const char of str ){
    if(char === "a" || char === "e" || char ==="i" || char === "o" || char === "u"){
       count++;
    }
   }
   console.log(count); 
}
console.log(checkVowel("saur"));



//call back function


let arr=["up" , "mp" , "bareilly"];
arr.forEach((value,idx)=>{
   console.log(value.toUpperCase(),idx);
});


let arr1=[1,2,3,4,5];
arr1.forEach((val)=>{
   console.log(val*val);
}
);


//using map in js

let arr2=[10,20,30];
 const newArray=arr2.map((num)=>{
   return num*2;
});

console.log(newArray);


//filter method in js

let Array2=[10,20,3];
const newArray3=Array2.filter((value)=>{
   return value%2===0;
});

console.log(newArray3);


//reduce method in js
let Array3=[10,20,3];
const newArray4=Array3.reduce((value,ans)=>{
   return value +ans;
});

console.log(newArray4);