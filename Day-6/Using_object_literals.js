"use strict";
let lime={
    type:'mexican lime',
    color:'unknown',
    information:function(){
        return 'This '+this.type+' is of color '+this.color;
    }
};
console.log(lime.information());
lime.color='Red';
console.log(lime.information());