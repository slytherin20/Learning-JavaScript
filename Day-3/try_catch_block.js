function getMonthName(mo){
    mo=mo-1;
    months=['Jan','feb','March','Apr','May','June','July','August','Sept','Oct','Nov','Dec'];
    if(months[mo])
        return months[mo];
    else
        throw 'InvalidNumberRequested'; //RangeError of ECMAScript Exception
}

try{

    monthName=getMonthName(-100);
    console.log(monthName);
}
catch(e){
    console.log(e);
   // monthName='Unknown';
    //console.log(monthName);
}