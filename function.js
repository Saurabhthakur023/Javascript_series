//function

function sum(number1,number2){
   return(number1+number2);
}

console.log(sum(2,3));


function islogedinmessage(userName){
   if(!userName){
   console.log("kirpya karke aapna naam btaye");
   return ;
   }
    return `${userName} Appka swagat Hai`
}

console.log(islogedinmessage());


function calculateCartPrice(val1,val2,...num){
   return num;
}
console.log(calculateCartPrice(100,200,300));


const user={
  username: "Saurabh",
  price: 200
}

function handObject(anyObject){
   console.log(`user is ${anyObject.username} and price is ${anyObject.price}`);
}
 handObject(user);

const array=[100,200,300,400];
function returnArray(getArray){
   return getArray[1];
}

console.log(returnArray(array));