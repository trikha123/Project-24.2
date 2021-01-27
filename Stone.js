class Stone{
    constructor(x,y,width,height){

        var option = {
            restitution:1.0,
            friction: 1.0,
            density: 2.0
        }
this.body = Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;
World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("grey")
        rect(0, 0 ,this.width,this.height);
        pop();

    }
}