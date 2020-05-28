/*

console.log(1+ +"3");  //+ in front of three gives it a sign .

console.log(typeof(Number("4")));

console.log(parseInt("0100000",2)); */

//ariables declared with var have function scope only.
//Let has  a block scope only.

//In temporal dead zone variables get declared ie memory is allocated but they are not initialized.
// Const and let have tempral dead zone but var dont have it.
/*
const obj = {
    name: 23,
    id:12,
};
delete obj.name;

console.log(obj);
obj.new_key = "Sonali";
console.log(obj);

//Array ::
let arr= [1,2,3,4,5,6,7];
console.log(arr.push(8));
console.log(arr.unshift(0));
console.log(arr);

console.log(arr.pop(-2));
console.log(arr.shift());
delete arr[3];
console.log(arr); */


let a = 23+ +"56";
console.log(a);
console.log(typeof(a));

//this is the object currently executing the funtion.