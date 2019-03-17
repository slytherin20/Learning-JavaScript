//The spread operator ... is used to pull out the elements of the array.

const arr=[1,2,3,4,5];
console.log(Math.max(arr));   //Returns NaN
console.log(Math.max(...arr));   //returns 5