const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1;
var block1, block2, block3, block4, block5;
var block6, block7, block8;
var block9;
var polygon, slingShot;
var polygonImg;


function preload(){
    polygonImg = loadImage("polygon.png");
    
}

function setup(){
    var canvas = createCanvas(1200, 400);
    rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;


    
    
    

    
    


    stand1 = new Ground(860, 250, 230, 13);

    //stand1
    //stand1, level1

    block1 = new Box(780, 200, 35, 50);
    block2 = new Box(820, 200, 35, 50);
    block3 = new Box(860, 200, 35, 50);
    block4 = new Box(900, 200, 35, 50);
    block5 = new Box(940, 200, 35, 50);

    //stand1, level2
    block6 = new Box(820, 160, 35, 50);
    block7 = new Box(860, 160, 35, 50);
    block8 = new Box(900, 160, 35, 50);

    //stand1, level3
    block9 = new Box(860,100, 35, 50);

    polygon = Bodies.circle(50,190,20);
    World.add(world, polygon);
    
    
    slingShot = new SlingShot(this.polygon,{x:100, y:200});
   
}

function draw(){
    background(0);
    Engine.update(engine);
    imageMode(CENTER);
    image(polygonImg, this.polygon.position.x, this.polygon.position.y, 40, 40);


    stand1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon);
    }
}