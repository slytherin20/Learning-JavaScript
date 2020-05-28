var x=1;
var y=2;
if((x=y)){
  console.log("Assignment inside the if statement")  //Assignment returns true
}
if(!(false||NaN||undefined||null||0||""))
    console.log("When passed following as conditions it evaluates to false")

var val=new Boolean(false);
console.log(val);
if(val)
    console.log("The false is passed to Boolean object ,then when passed as condition to the if statements is seen as true");

//Switch Conditional statement
var fruitType='Apple';

switch(fruitType){
    case 'Apple':
        console.log('apple');
        break;
    case 'Orange':
        console.log('orange');
        break;
}
