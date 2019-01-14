var a;
var b=null;
if(a===undefined){
    console.log('No initialization leads to undefined value');
}
if(!a)
{
    console.log('In boolean context it returns false and in numeric it return Nan-a+2 gives:');
    console.log(a+2);
}
if(!b){
    console.log('In boolean context null leads to false and in numeric to 0-b*32 gives:'+b*32);
}

