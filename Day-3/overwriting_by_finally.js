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
