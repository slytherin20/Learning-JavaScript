/*Js always assigns variable by value.Value assigned to the primitive types-String,Number,Boolean,Null,Undefined is the
actual value and the value assigned to arrays,function,object is through reference of the object.*/



//Assignment through value
var x='myString';
var y=x;
console.log(x);
console.log(y);
y='MynewString';
console.log(x);
console.log(y);

//Assignment through reference

var a={'x':'Slytherin'};
var b=a;
console.log(a);
console.log(b);
b.x='Hufflepuff';
console.log(a);
console.log(b);