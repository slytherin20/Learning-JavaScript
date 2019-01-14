/* For functions only function definition can be hoisted and not function expression
*/
foo();
function foo(){
    console.log('Hoisted');

}

boo();
var boo=function(){
    console.log('Not hoisted');
};