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
}
const p1=new Point(2,3);
const p2=new Point(5,5);
console.log(Point.distance(p1,p2));