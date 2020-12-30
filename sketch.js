const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dog, dogimg, happyDog;
var database, foodS, foodStock;
var Matter;

function preload()
{
   dogimg = loadImage("images/dogImg.png");
   
}

function setup() {
	createCanvas(500, 500);
  engine = Engine.create();
    world = engine.world;

dog = createSprite(200,200,30,30);
 dog.addImage(dogimg);


}


function draw() {  
  background(46, 139, 87);
  Engine.update(engine);



  drawSprites();
  //add styles here

}



