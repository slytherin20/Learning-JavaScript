var x=1;
var y=2;
if((x=y)){
  console.log("Assignment inside the if statement")
}
if(!(false||NaN||undefined||null||0||""))
    console.log("When passed following as conditions it evaluates to false")

var val=new Boolean(false)
if(val)
    console.log("The false is passed to Boolean object ,then when passed as condition to the if statements is seen as true")

//Switch Conditional statement
var fruittype='Apple';

switch(fruittype){
    case 'Apple':
        console.log('apple');
        break;
    case 'orange':
        console.log('orange');
        break;
}
