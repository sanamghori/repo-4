// type literal
let a:"red"| "blue" | "green";
a="red",
a="blue",
//a="green",
console.log(a);

//type union
//let b:string|number|null
//b="sana",

//let myAge :string|number
//myAge="anaya",
//myAge=15.34456
//console.log(myAge.toFixed(0));
//console.log(myAge.toString(12));
//console.log(20);

//ternery operetor
let myAge=Math.random()>0.10? "hello" :70;
if (myAge==="hello") {
    myAge.toLocaleUpperCase()
}
else{
    "not your type"
}
console.log(myAge=23);
//typeof myAge==="string"
//?myAge.toUpperCase()
//:myAge.toFixed()
//console.log(myAge="sana");
//console.log(myAge=20);

//TYPE alias
type t=string|number|boolean|undefined

let mycode:t
mycode=20
mycode=true