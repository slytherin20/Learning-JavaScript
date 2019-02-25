//throw 'Sonali';
//throw 42;
//throw true;
//throw {'a':123,'b':456};

function User(UserId){
    this.id=UserId;
    this.name='XYZ';
}

User.prototype.toString=function(){
    return this.name+" "+this.id+".";
}


throw new User(25);