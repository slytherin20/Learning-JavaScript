//Check if two strings are permutation of one other.

function isPermutation(s1,s2){
    if(s1.length!=s2.length){    //When they don't have same length
        return false;
    }
    //When they do have same length
    let counterS1 = new Map();
    let counterS2 = new Map();
    for(let i=0;i<s1.length;i++){
        //Counting number of characters of s1
        if (counterS1.has(s1[i])){
            counterS1.set(s1[i],counterS1.get(s1[i])+1);
        }
        else{
            counterS1.set(s1[i],1);
        }
        //Counting number of characters of s2
        if (counterS2.has(s2[i])){
            counterS2.set(s2[i],counterS2.get(s2[i])+1);
        }
        else{
            counterS2.set(s2[i],1);
        }
    }
    for(let [key,value] of counterS1){
        //Check if both strings has same character or not and if the occurrence of character is same or not
        if((!counterS2.has(key))){
            return false;
        }
        else if(value!=counterS2.get(key)){
            return false;
        }
    }
    return true;
}

console.log(isPermutation('abba','bbaa'));
console.log(isPermutation('listen','silens'));
console.log(isPermutation("god","odg"));


