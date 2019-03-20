//The constructor method is a special method we use to create and initialize objects of a class.
// A class can only have one special method with the name constructor, and attempting to write a class containing more than one constructor method will throw a SyntaxError.
// To implement inheritance, we can use the super keyword in a constructor to call a parent class constructor.

class School{
    constructor(name,students){
        this.name=name;
        this.students=students;
    }
}
let sc=new School('Lady Irwin',3000);
console.log(sc);