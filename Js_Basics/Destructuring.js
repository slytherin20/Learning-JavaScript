//It is a common way of cleanly extract properties of the object.


const obj={name:'Joey',loves:'Food'};
const {name,loves}=obj;
console.log(name+" loves "+loves);

const{name:myName,loves:myFav}=obj;
console.log(myName+" "+myFav);

const Person={
  name:'Rachel',
  hobby:'Shopping'
};
function introduce({name,hobby}){
    console.log(`My name is ${name} and I like ${hobby}`);
}

introduce(Person);