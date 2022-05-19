//1. Custom method

let merge = (...arguments) =>{
    let target={};

    let merger = (obj)=>{
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){

            if(Object.prototype.toString.call(obj[prop])==="[object Object]"){
                target[prop] = merge(target[prop],obj[prop])
            }
            else{
                target[prop] = obj[prop]
            }
        }
    }
    }

    for(let i=0;i<arguments.length;i++){
        merger(arguments[i])
    }
    return target;
}

let obj1 = {
    name:"Sam",
    species:"Homo Sapien",
    personality:{
        likes:"Food",
        hates:"Gaslighters",
        neutral:"Personal life of others"
    }
}
let obj2 = {
    petName:"Meemaw",
    petSpecies:"Cat",
    petPersonality:{
        likes:"Catnip",
        hates:"Milk",
        neutral:"World"
    }
}
let target = merge(obj1,obj2)
console.log("merge:",target)

obj2.petPersonality.likes = "Tuna"