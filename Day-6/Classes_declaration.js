//ECMAScript6 introduced concept of classes
//it is a sugar coating over js's prototype based inheritance and does not introduce new inheritance model.
//It simplifies and creates new objects and deals with inheritance.

//One way to declare a class is using class keyword.
class Polygon{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
let p=new Polygon(1,2);
console.log('Polygon p:',p);

//Classes cannot be hoisted.