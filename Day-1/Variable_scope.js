/* Before ECMA2015 JS does not have block statement scope rather a variable declared within a block
is local to a function that block resides within
 */
if(true){
    var x=5;
}
console.log(x);//returns 5

//When let is introduced in ECMA2015
if(true){
    let y=5;

}
console.log(y);//throws ReferenceError:y is not defined