//Functional Classes
//1.Using Functions
//Define a function,create an object using new keyword,define methods and objects for created objects using this keyword.
  "use strict";
function fruit(type){
    this.type=type;
    this.color='unknown';
    this.getinformation= getFruitInformation;
}

function getFruitInformation(){
  return 'This '+this.type+' is '+this.color;
}
let lime=new fruit('Mexican lime');
console.log(lime.getinformation());
lime.color='green';
console.log(lime.getinformation());

function School(name){
    this.name=name;
    this.students=0;
    this.information=getInformation;
}
function getInformation(){
    return 'This school '+this.name +' has '+this.students+' students.';
}
let school=new School('Lady irwin');
console.log(school.information());
school.students=1000;
console.log(school.information());