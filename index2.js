// Inheritance
class Employee{
    constructor(id,name){
        this.id = id;
        this.name = name;

    }
    works(){
        console.log(`${this.name} with employee id : ${this.id} works here!!`);
    }
}

class Company extends Employee{
    works(){
        super.works();
        console.log("our company is great");
    }
}
let c = new Company(203,'sonali');
c.works();
