function permutations(string,prefix){
    if(string.length<=0) {
        console.log(prefix);
        return;
    }
    for(let i=0;i<string.length;i++){
       let rem = string.substr(0,i) + string.substr(i+1);
        permutations(rem,prefix + string.charAt(i));
    }
}
let string = 'ABCD';
permutations(string,"");

