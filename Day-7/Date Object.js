//Various Date constructors.
let a = new Date();
console.log(a);

let b = new Date(10000);   //Parameter is in miliseconds
console.log(b);

let c = new Date("Jan 1,2020");  //Parameter is a value recognized by Date.parse().Eg-01/01/1980.
console.log(c);

let year = 2018;
let month = 2;
let day = 27;
let hour = 4;
let minutes = 54;
let seconds = 1200;
let milliseconds = 12345;
let d = new Date(year,month,day,hour,minutes,seconds,milliseconds);
console.log(d);

//DateString.
let input = ['10/11/2009','2016,04,22'];
main();
function main(){
    var date1 = new Date(input[0]);
    var date2 = new Date(input[1]);
    console.log(date1.toString());
    console.log(date1.toISOString());
    console.log(date2.toString());
    console.log(date2.toISOString());
}

//Date get Methods

let date = new Date();
console.log(date.getTime());      //get the time in milliseconds.
console.log(date.getFullYear())   //get the yyyy
console.log(date.getMonth());     //returns Date object month in numeric(0-11)
console.log(date.getDate());     //returns date objects date in numeric(1-31)
console.log(date.getDay());       //returns date objects week day in numeric(0-6)
console.log(date.getHours())        //(0-23)
console.log(date.getMinutes())      //(0-59)
console.log(date.getSeconds())      //0-59
console.log(date.getMilliseconds())  //0-999

