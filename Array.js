//Array 
const myArry=[1,2,3,4,5];
//console.log(myArry)

const myArry1=new Array(1,2,3,4,5);
console.log(myArry1)

//methods in array//
myArry1.push(2);
console.log(myArry1);

myArry1.pop();
console.log(myArry1);

myArry1.unshift(10);
console.log(myArry1)

myArry1.shift();
console.log(myArry1);


console.log(myArry1.includes(5));

console.log(myArry1.indexOf(3));

console.log(myArry1.join());

//slice vs spice

const myArry2=new Array(10,20,30,40);
console.log("A", myArry2);

//slice
const myNew=myArry2.slice(1,3);
console.log(myNew);
console.log("B",myArry2);


//spice
const  myNew2=myArry2.splice(1,3)
console.log(myNew2);


console.log("C",myArry2);




