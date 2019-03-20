'use strict';
class Animal{
    constructor(name){
        this.name=name;
    }
}
Animal.prototype.speak=function(){
    console.log(this.name+' speaks.');
}
class Dog extends Animal {
    speak(){
        console.log(this.name+' barks.');
    }
}
let d=new Dog('Mellow');
d.speak();
let a=new Animal('Mellow');
a.speak();