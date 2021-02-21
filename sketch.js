const Engine = Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Events = Matter.Events

var engine,world
var ground1;
var particles = [];
var plinkos = [];
var column = [];
var column;
var columnHeight = 170;


function setup() {

 createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground1 = new Ground(200,380,1200,40);


  for(var k = 0; k <=width; k = k+80){

    column.push(new Divisions(k,height-columnHeight/2, 10, columnHeight));

  }

  for (var j = 20; j<=width; j = j+50 ){

plinkos.push(new Plinko(j,75));

  }

  for (var i = 50; i<=width; i = i+50 ){

    plinkos.push(new Plinko(i,120));
    
      }


  for (var  a = 20; a<=width; a = a+50 ){

    plinkos.push(new Plinko(a,160));
    
      }



//divider1 = new Divisions(200,100,20,40);

}




function draw() {
  background(25,100,200);  
  
ground1.display();
//divider1.display();

for(var k = 0; k<column.length; k++){

  column[k].display();
}

for(var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
}

for(var i = 0; i < plinkos.length; i++){
  plinkos[i].display();
}

for(var a = 0; a < plinkos.length; a++){
  plinkos[a].display();
}


if(frameCount%60===0){

  particles.push(new particle(random(width/2-10, width/2+10), 5, 5));
  
    }

for(var x = 0; x < particles.length; x++){
  particles[x].display();
}

Engine.update(engine,25)

  drawSprites();
}
