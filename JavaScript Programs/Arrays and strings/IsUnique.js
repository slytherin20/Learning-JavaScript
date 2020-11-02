//Implement an algorithm to determine if a string has all unique characters.Don't use additional data structures.

function isUnique(str){
    let setOfCharacters = new Map();
    for(let i=0;i<str.length;i++){
        if(setOfCharacters.has(str[i])){
            return false;
        }
        else{
            setOfCharacters.set(str[i],1);
        }
    }
    return true;
}

console.log(isUnique("Sonali Gupta"));
console.log(isUnique("Hello"));
console.log(isUnique("Final"));