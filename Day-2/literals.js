//Array literals
 var arr=[1,2,3];
console.log(arr);
var arr1=[1,,3,4]; //empty input is treated as undefined
console.log(arr1);
var arr2=[1,,3,,];
console.log(arr2);  //last comma is avoided

//Boolean literal
var a=true;
var b=false;
console.log(a);
console.log(b);

//Numeric literals
var d=137; //Decimal integer literals
var e=-0o77; //Octal Integer literal
var c=0x1123; //hexadecimal integer literal
var f=0b11;  //Binary integer literal
console.log(d);
console.log(e);
console.log(c);
console.log(f);

//Floating point literal

var p=3.1415926;
var q=-.12344566;
var r=-3.14E+12;
console.log(p);
console.log(q);
console.log(r);


//Object literal
 var sales='Toyota';
 function getCar(name){
     if(name==='Honda')
     return name;
     else
     {
         return "Sorry we don't sell"+name;
     }

 }
 var cars={myCar:'Saturn',gettingCar:getCar('Honda'),special:sales};
 console.log(cars.myCar);
 console.log(cars.gettingCar);
 console.log(cars.special);

 /* unsual property names */
var objec={7:'a','':2,'!':5};
//console.log(objec.7); //error
console.log(objec[""]);
console.log(objec["!"]);
console.log(objec[7]);


//RegExp Literal
var re=/ab+c/;
console.log(re);


//String Literal
var str="Hi this is a string";
var str1='this is another string';
var str2="I didn't know Js before this.";
console.log(str);
console.log(str1);
console.log(str2);



//Template literal
var text=
    `I can write string 
     in multiple lines which 
      I couldn't do before 
      using double and single quotes`;
console.log(text);