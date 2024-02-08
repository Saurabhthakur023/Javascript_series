const score=300
const bal= new Number(100);
console.log(bal);
console.log(score);


const val=bal.toString()
console.log(val);

console.log(val.length);

const other=new Number(23.233);
console.log(other.toFixed())
console.log(other.toPrecision(2));
console.log(other.toExponential());
console.log(other.toLocaleString());

//************MAths************//

console.log(Math.abs(-4));
console.log(Math.log10(18));
console.log(Math.log(2));
console.log(Math.sqrt(25));
console.log(Math.round(2.34));
console.log(Math.min(1,3,4,5,6,));
console.log(Math.max(2,3,56,67));
console.log(Math.random());
console.log((Math.floor(Math.random()*10))+1);

const min=10;
const max=20;
//using yhis formala for makeing game like dice and random number
console.log(Math.floor(Math.random()*(max-min+1))+min);