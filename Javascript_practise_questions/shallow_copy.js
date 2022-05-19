//Shallow copy can be done by 3 ways:
//1. ...
let obj1 = {
    name:"Josh",
    age:25,
    food:{
        first: "Burger",
        last:"King"
    }
}

let ob2 = {
    petName:"Sam",
    petAge: 5,
    lastName: function(){ return "Smith"}
}

console.log({...obj1,...ob2})

//2. Object.assign

console.log(Object.assign({},obj1,ob2))

//3.Custom method
let merge = (...arguments) =>{
    let target={};
    let merger = (obj) =>{
        for(let prop in obj){
            target[prop] = obj[prop]
        }
    }

    for(let i=0;i<arguments.length;i++){
        merger(arguments[i])
    }

    return target;
}

console.log(merge(obj1,ob2))