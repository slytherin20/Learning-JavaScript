//Map,filter and reduce
//Map: Return array where each element is transformed as specified by the function.
const arr=[1,2,3,4,5,6,7];
const mapped= arr.map(el => el+20);
console.log(mapped);

//Filter: returns array of element where function returns true
const filtered=arr.filter(el => el===2||el===4);
console.log(filtered);

//Reduce:returns accumulated value specified by the function.
const reduced=arr.reduce((total,current)=> total+current);
console.log(reduced);

//find,findIndex,indexOf

//find:returns first instance that matches the criteria.
const found=arr.find(el=> el>5);
console.log(found);

//findIndex: similiar to find but returns index of the matching first index.
const foundIndex=arr.findIndex(el => el>5);
console.log(foundIndex);

//indexOf: returns the index of the array element.
const index=arr.indexOf(3);
console.log(index);

//push,pop,shift,unshift
arr.push(0);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(-1,0);
console.log(arr);

//splice,slice: either modifies or returns the subset of the array.
// change the content of array by replacing or removing the elements ,it is also used to add new elements to the array.
//It modifies the content of the array.
var ar=['a','c','d','e','f','g'];
ar.splice(1,0,'b');
console.log(ar);

//Slice: returns shallow copy of the array content specified.
var new_ar=ar.slice(2,4);
console.log(new_ar);


//sort: Sort an array in lexical order. Sorting is done based on the function specified.If function returns 0 or negative
//then values are not sorted.

arr.sort((firstel,secondel)=>firstel-secondel);
console.log(arr);