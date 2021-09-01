class Slingshot{
    constructor(body1,body2){
      var options = {
        bodyA:body1,
        bodyB:body2
      }
     this.sling= Constraint.create(options);
    World.add(world, this.sling);
    }
display(){
var pointA = this.sling.bodyA.position;
var pointB = this.sling.bodyB.position;
push() 
strokeWeight(6);
 line(pointA.x,pointA.y,pointB.x,pointB.y);
 pop();
}
}