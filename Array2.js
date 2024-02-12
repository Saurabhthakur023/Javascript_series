const hero=["thor","Caption","Spiderman"];
const hero1=["Saktiman","Flsh","batman"];

hero.push(hero1);
//console.log(hero);


const allhero=hero.concat(hero1);
//console.log(allhero);

const allnewhero=[...hero,...hero1];
//console.log(allnewhero);

const anotherarary=[1,2,3,4,[10,20,30],7,[7,8,9,]];
const reaarray=anotherarary.flat(Infinity);
console.log(reaarray);

console.log(Array.isArray("Saurabh"));
console.log(Array.from("Saurabh"));
console.log(Array.from({name:"Saurabh"})); //interview question it always return empty array

let score=100
let score2=200
let score3=300
console.log(Array.of(score,score2,score3));
