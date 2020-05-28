//Template literals are string literals that allow for embedded expressions.We use them for string interpolation.
//1.Multi-line strings

console.log(`First Line
Second Line
Third Line`);

//2.Expression Interpolation

const a=3;
const b=6;
console.log(`The sum of a and b is ${a+b}
The product of a and b is ${a*b}`);


//3.Tagged Template literals

//Tagged template literals allow us to use a function to modify the output of template literal.
//In this construct:
//First argument contains an array of string literals.
//Second argument are the values of substituted argument.

var x=4;
var y=7;
function foo(strings,...values){
    console.log("."+strings[0]+".");
    console.log("."+strings[1]+".");
    console.log("."+strings[2]+".");
    console.log("."+strings[3]+".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
}
foo`Sum ${a+b}
Product ${a*b}
Division ${a/b}`;

function fuu(strings,...values){
    x=values[0];
    y=values[1];
    return `Sum ${x+y}
Product ${x*y}`;
}
console.log(fuu`Num1 ${x+y}
Num2 ${x*y}`);

