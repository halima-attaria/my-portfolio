let a = prompt("Enter first no.=");
let b = prompt("Enter second no.=");

a = Number (a);
b = Number (b);

let sum = a + b;
let difference = a - b;
let multiply = a * b;
let quotient = a /b;

console.log("Addition:" +sum);
console.log("subtraction:" +difference);
console.log("multiply:" + multiply);
console.log("division:" +quotient);


alert(
    "Results:" +
    "Addition:" + sum +
"| Subtraction:" + difference +
"| Multiplication:" + multiply +
"| Division:" + quotient);