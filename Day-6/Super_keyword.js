'use strict';
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name+' speaks.');
    }
}
class Dog extends Animal{
    speak(){
        super.speak();
        console.log(this.name+' barks.');
    }
}
let d=new Dog('Tom');
d.speak();