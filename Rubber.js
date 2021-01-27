class Rubber{
    constructor(x,y, radius){

        var option = {
            restitution:0.3,
            friction: 5,
            density:1
        }
this.body = Matter.Bodies.circle(x,y, radius,option);
this.width=this.width;
this.height=this.height;
World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER)
        fill("yellow")
        ellipse(0, 0 ,this.width,this.height);
        pop();

    }
}