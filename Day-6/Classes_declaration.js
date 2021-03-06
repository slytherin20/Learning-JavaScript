//ECMAScript6 introduced concept of classes
//it is a sugar coating over js's prototype based inheritance and does not introduce new inheritance model.
//It simplifies and creates new objects and deals with inheritance.

//One way to declare a class is using class keyword.
'use strict';
class Polygon{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
let p=new Polygon(1,2);
console.log('Polygon p:',p);

//Classes cannot be hoisted.


//Second  way to define a class is using class expressions.
let Polygon1=class  {
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
};
console.log(Polygon1);
let p1=new Polygon1(1,2);
console.log(p1);


//Third way to define a class is through named class expressions.
let Poly=class Poly{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
};
console.log(Poly);
let p2=new Poly(3,4);
console.log(p2);