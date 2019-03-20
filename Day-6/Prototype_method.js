'use strict';
class Polygon{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    getArea(){
        return this.height*this.width;
    }
}
let p=new Polygon(20,20);
console.log(p.getArea());