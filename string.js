const name="saurabh"
const repCount= 50
console.log(`Hello my name is ${name} amd my repCount is ${repCount} `);

console.log(`${name} ${repCount}` )


const gameName= new String("Saurabh");
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
console.log(gameName.anchor);
console.log(gameName.slice);
const newString = gameName.substring(0,6);
console.log(newString);
console.log(gameName.slice(-8,8));

const newString1= "   saurabh   "
console.log(gameName.newString1);
console.log(newString1.trim());


const url="https://saurabh%21singh"

console.log(url.replace('%21','-'));
console.log(url.includes("singh"));

const name3 = "Chris";
const greeting = `Hello,${name3}`;
console.log(greeting); // "Hello, Chris"
const a = 1;
const b = 0;
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}