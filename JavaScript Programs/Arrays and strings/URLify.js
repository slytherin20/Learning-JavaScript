function URLify(str){
    let strList = str.split(" ");
    let strList1 = [];
    for(let i=0;i<strList.length;i++){
        if(strList[i]){
            strList1.push(strList[i]);
        }
    }
    return strList1.join("%20");
}

console.log(URLify("Mr. Jonas Red      "));