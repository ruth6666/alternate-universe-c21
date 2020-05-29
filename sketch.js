var sun, planet1, planet2, planet3, planet4

function setup(){
  createCanvas(1200,700);

  sun = createSprite(685,300,75,75);
  planet1 = createSprite(670,170,60,60);
  planet2 = createSprite(670,500,60,60);
  planet3 = createSprite(500,340,60,60);
  planet4 = createSprite(900,340,60,60);
  sun.shapeColor = "yellow";
  planet1.shapeColor = "pink";
  planet2.shapeColor = "blue";
  planet3.shapeColor = "purple";
  planet4.shapeColor = "green";

  sun.setCollider("circle",0,0,50);
}

function draw() {
  background(255,255,255); 
  
  if(World.frameCount%40 === 0){
    sun.width = sun.width + 35;
    sun.height = sun.height + 35;
  }

  if(collide(planet1,sun)){
    planet1.destroy();
  }

  if(collide(planet2,sun)){
    planet2.destroy();
  }

  if(collide(planet3,sun)){
    planet3.destroy();
  }

  if(collide(planet4,sun)){
    planet4.destroy();
  }

  drawSprites();
}

function collide(object1,object2){ 
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2){ 
    return true;
  }
  else { 
    return false;
  }
}