//Check occurrence of each letter if-
//String is even length then - each letter should be even
//If the length is odd - each letter should be even except one which should have only 1 occurrence.
//data structure used - Hash table.

function checkString(str){
    let hashTable = new Map();

    //Counting occurrence of each letter
    for(let i=0;i<str.length;i++){                     //O(n)
        let char = str[i].toLowerCase();
        if(char!=' '){
            if(hashTable.has(char)){
                let count = hashTable.get(char);
                hashTable.set(char,count+1);
            }
            else{
                hashTable.set(char,1);
            }
        }
    }

    //Generating values of hash table
    let values = hashTable.values();

   //Even string
    if((str.length%2)-1==0){
        for(let value of values){                //O(c)
            if(value%2==0){
                return true;
            }
            else{
                return false;
            }
        }
    }

    //Odd string
    else{
        let c=0;
        for(let value of values){                //O(c)
            if(value===1){
               c++;
            }
            else if(value%2!=0 ||value<1){
                return false;
            }
        }
        if(c!=1){                            //Checks if only one character has 1 value or not
            return false;
        }
        else{
            return true;
        }
    }
}
console.log(checkString("Tact Coa"));

//T.C - O(n)

//Second method using bit-array
function palin_permute(str){
    let bitArray = [];
    for(let i=0;i<26;i++){
        bitArray.push(false);
    }
    str = str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(str[i]!=' '){
            let position = str.charCodeAt(i) - 97;
            bitArray[position] = !bitArray[position];
        }
    }
    for(let i=0;i<26;i++){
        if(bitArray[i]===true){
            return true;
        }
    }
    return false;
}
console.log(palin_permute("Tact Coa"));
//T.C- O(n)