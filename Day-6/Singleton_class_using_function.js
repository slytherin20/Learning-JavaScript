//Singleton class is a design pattern that restricts the class to a single instance.
'use strict';
//When we assign a value of new function(){..} to variable following things happen:
//An anonymous constructor function is defined.
//Anonymous constructor function is invoked using new keyword.
let lime=new function(){
    this.type='Mexican lime',
        this.color='Green',
        this.information=function(){
        return 'This '+this.type+' is of color '+this.color;
        };
}
console.log(lime.information());