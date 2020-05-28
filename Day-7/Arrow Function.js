let arr=[1,2,3,4,5,6,7,8,9];
let a = 2;
let b = 3;


//Simple usage of array function
let equality = (a,b)=>a===b;
console.log(equality(a,b));

let getSum = (a,b)=> {return a+b};
console.log(getSum(a,b));

//Arrow function with reduce
let getSum_ = arr.reduce((a,b)=>a+b,0);
console.log(getSum_);

//Arrow function with map

let evenby2_oddbythree = arr.map((a)=>(a%2===0)?a*2:a*3);
console.log(evenby2_oddbythree);

//Arrow function with filter

let greaterThanThree = arr.filter(a=>a>3);
console.log(greaterThanThree);
