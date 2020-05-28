const PI=3.14;
console.log(PI);
PI=43;//Error


//Contents of array and object are not protected.


const obj={
  'key':'value'
};
obj.key='otherValue';
console.log(obj.key);
const arr=['a','b'];
arr.push('c');
console.log(arr);

