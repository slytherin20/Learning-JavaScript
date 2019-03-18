//Anonyomous Callback functions

function myfunc(text,callback){
    setTimeout(function(){
        callback(text);
    },2000);
}
myfunc("Hello world!",console.log);

function func(callback){
    callback("hello there");
}
func(function(statement){
    console.log(statement);
});


//Problem with this object and callbacks

var obj={
  id:1,
  name:"Notset",
    setname: function(firstName,lastName){
      this.name=firstName+" "+lastName;
    }
};

function getUserData(firstName,lastName,callback){

    callback(firstName,lastName);
}

getUserData("harry","potter",obj.setname);
console.log(obj.name); //Prints Notset



//Possible solution-apply or call method.

function getUser(firstName,lastName,callback,callbackobj){
    callback.apply(callbackobj,[firstName,lastName]);
}
getUser("Barack","Obama",obj.setname,obj);
console.log(obj.name);


