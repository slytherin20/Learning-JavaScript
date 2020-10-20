//Closure is an important js pattern to give access to private variables.

function createGreeter(greeting){
    return function(name){
        console.log(greeting+ " "+name);
    }
}
var sayHello=createGreeter('Hello');
sayHello('Mojo Jojo');
