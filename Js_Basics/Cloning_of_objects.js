//Shallow Cloning: Copying all key value pairs of the object to new object

var _ = require('underscore');



let shopTrans = {
    items : [{name:'M&M'}],
    price : 1,
    amtPaid : 1000
};
let clonedTrans = _.clone(shopTrans);
clonedTrans.price = 3;
clonedTrans.amtPaid = 500;
clonedTrans.items.push({name: 'KitKat'});
console.log("shopTrans-- price : "+shopTrans.price);
console.log("clonedTrans--> price : " + clonedTrans.price);
console.log(clonedTrans.items);
console.log(shopTrans.items);
// Understand difference between value and reference type .
