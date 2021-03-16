const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var hammer;
var stone,iron,rubber;
var sand1, sand2, sand3, sand4,sand5, sand6;

var engine,world;


function setup() {
	createCanvas(1200, 650);
    engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1200,20);
    hammer=new Hammer(10,100);
    stone = new Stone(500,600,70,70);
    iron=new Iron(300,350);
    rubber=new Rubber(900,450,70);
    
    sand1=new Sand(505,450,10);
    sand2=new Sand(510,450,10);
    sand3=new Sand(515,450,10);
    sand4=new Sand(520,450,10);
    sand5=new Sand(525,450,10);
    sand6=new Sand(530,450,10);
    
  
}


function draw() {
  background("lightblue");
  Engine.update(engine);

  
  drawSprites();
  ground.display();
  hammer.display();
  stone.display();
  iron.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();

  


}



