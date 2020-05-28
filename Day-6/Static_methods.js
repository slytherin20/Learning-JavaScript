'use static';
//Static methods are relevant to all the instances of the classes not just one.These methods receive information
//from there arguments and not the instances of the class,which allows us to invoke a class's static method without creating
//an instance of the class.
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
     static distance(a,b){
        const dx=a.x-b.x;
        const dy=a.y-b.y;
        return Math.sqrt(dx**2-dy**2);
    }
   static color(x,y){
       const colorx = x;
       const colory = y;
       return `The x-coordinate is ${colorx} in color and y coordinate is ${colory} in color.`
   }
}
const p1=new Point(2,3);
const p2=new Point(5,5);
console.log(Point.distance(p1,p2));
console.log(Point.color("RED","GREEN"));