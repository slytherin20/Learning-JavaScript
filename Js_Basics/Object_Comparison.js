//When we try to compare the objects we actually compare there references therefore we cannot create two objects which look exactly same
//but when compared are actually pointing to different objects.

const obj1={name:'John'};
const obj2={name:'John'};
if(obj1==obj2)
    console.log(true);
else
    console.log(false);



//better way to compare objects.
const obj3=obj1;
if(obj1==obj3)
    console.log(true);
else
    console.log(false);