const Engine = Matter.Engine;   // create the ph engine                                // nameSpacing
const World= Matter.World;//use to add the obj              // to add the props like gravity, bounciness...
const Bodies= Matter.Bodies;// objects

var engine, world;

function setup() {
 var canvas= createCanvas(400,400);
 
engine=Engine.create();
world=engine.world;


var obj_options={
  isStatic:true
}

object=Bodies.rectangle(200,100,50,50,obj_options);
World.add(world,object);

console.log(object);
console.log(object.position.x)
console.log(object.position.y)
}

function draw() {
  background(0);  
  Engine.update(engine);
 rectMode(CENTER);
 rect(object.position.x,object.position.y,50,50);
  drawSprites();
}