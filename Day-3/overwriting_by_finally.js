// If the finally block returns a value,
// this value becomes the return value of the entire try…catch…finally production,
// regardless of any return statements in the try and catch blocks.

function f(){
    try{
        throw 'bogus'
    }
    catch(e){
        console.log('Caught inner bogus');
        throw e;  //suspended until finally is executed
    }
    finally{
        return false;
    }

}
try{
    f();
}
catch(e){
    console.log('caught outer bogus');
}
