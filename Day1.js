// Function in Javascript

// Synchronous Javascript
console.log("Basic javascript function known as synnchronous function");
function hello() {
    console.log("This is function");
} 
hello();
console.log("Synchronous javascript");


// Asynchronous Javascript
// Arrow function
// variable : var, let, const
// syntax : () => {}
const Hello= () => {
    console.log("Asynchronous function");
    setTimeout(() => {
        console.log("A");
    },2000);
}
Hello();
console.log("B");


// Function as parameter argument
function HELLO(n1,n2) {
    console.log(n1 + n2);
    console.log(arguments);
}
let a = 10;
let b = 20;
HELLO(a, b);


const app= () => {
    console.log(arguments);
}
app();