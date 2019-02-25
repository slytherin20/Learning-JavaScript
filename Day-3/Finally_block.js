function f(){
    try{
        console.log(1);
        throw 'bogus';
    }
    catch(e){
        console.log(2);
        return true;  //suspended until finally is executed
        console.log(3);
    }
    finally{
        console.log(4);
        return false;
        console.log(5);
    }
    console.log(6);

}
f();