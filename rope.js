class Rope
{

constructor(body1,body2,offsetX,offsetY){

    var options = {
        bodyA : body1,
        bodyB : body2,
        length : 10,
        stiffness : 0.04,
        pointB:{x:this.offsetX,y:this.offsetY}
    }

    this.chain = Constraint.create(options);

    World.add(world,this.Rope)



}


display(){


    strokeWeight(3);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)

}



}
