//dates and time

const mydate= new Date();
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toUTCString());

let myOwndate= new Date("01-14-2023")
console.log(myOwndate);
console.log(myOwndate.toDateString());
console.log(myOwndate.toLocaleDateString());

let timestamp= Date.now()
console.log(Math.floor(timestamp/1000));
console.log(myOwndate.getTime())


let newdate=new Date()
console.log(newdate);
console.log(newdate.getDate());
console.log(myOwndate.getDay());
console.log(myOwndate.getFullYear());

