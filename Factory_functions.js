//If there are many objects having same repetitive function inside them then it is quite troublesome.Therefore
// we use factory function.
//A factory function is any function which is not a class or constructor that returns a (presumably new) object.
// In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.
//Factory functions uses camel case fr fucntion names

function createCircle(radius){
    return {
        radius,
        draw(){
            console.log("Drawing!!")
        }
    }
}

let Circle1 = createCircle(2);
let Circle2 = createCircle(3);
Circle1.draw();
Circle2.draw();