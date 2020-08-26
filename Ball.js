class Ball{
    constructor(x, y, 50, options){
        var options{
            isStatic = false,
            restitution = 0.3,
            friction = 0.5,
            density = 1.2;
        }

        this.x = x;
        this.y = y;
        
        this.body = Bodies;

        World.add(world, this.body);
    }

    display(){
        circle(x, y, 50, options);
    }
}