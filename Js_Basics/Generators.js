//Generators are symbolized by *
//Generator function specifies what value is yielded the next time next() function is called.Can return value finite or infinite
//no. of times.
function * greeter(){
    yield "hi";
    yield "how are you?";
    yield "bye";
}

const greet= greeter();
console.log(greet.next().value);
console.log(greet.next().value);
console.log(greet.next().value);
console.log(greet.next().value);

function * idCreator(){
    var i=0;
    while(true){
        yield i++;
    }

}
const id=idCreator();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);