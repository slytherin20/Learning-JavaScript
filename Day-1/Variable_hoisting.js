/* In javascript we can refer to a variable before it is declared,this is called hoisting
Variables in javascript are hoisted or listed to the top of function or statement
Value represented by hoisted variables will always be undefined even when it is initialized
variables declared with let cannot be hoisted and stay in temporal dead zone from start of block
until declation is processed
 */
console.log(x===undefined);//return true
var x=5;
var myvar=4;
(function(){
    console.log(myvar);
    var myvar;
})();