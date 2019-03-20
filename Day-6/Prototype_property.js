/*We can think of a function's prototype as an object blueprint or paradigm; when we add methods and properties to the prototype, they are accessible to all instances of that function. This is especially useful for inheritance*/
'use strict';
function Fruit(type){
    this.type=type;
    this.color='unknown';
}
Fruit.prototype.information=function(){
    return 'This '+this.type+' is of '+this.color+'color.';
}
let lime=new Fruit('mexican lime');
console.log(lime.information());
lime.color='Blue';
console.log(lime.information());