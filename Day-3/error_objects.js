function f(){
    throw new Error('The message');
}
try{
    f();
}
catch(e){
    console.log(e.name);
    console.log(e.message);
}