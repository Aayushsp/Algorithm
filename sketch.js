var movingRect, fixedRect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(400, 200, 50, 50);
  fixedRect  =createSprite(200, 200, 50, 50);

  rect1 = createSprite(600,100,50,50);
  rect2 = createSprite(300,100,50,50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  rect1.velocityX = -2;

}

function draw() {
  background("yellow"); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    
  }

  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(rect2.x - rect1.x <= rect2.width/2 + rect1.width/2 &&
    rect1.x - rect2.x <= rect2.width/2 + rect1.width/2 &&
    rect2.y - rect1.y <= rect2.height/2 + rect1.height/2 &&
    rect1.y - rect2.y <= rect2.height/2 + rect1.height/2){
    
      rect1.velocityX *= -1;
      rect1.velocityY *= -1;
    
  }

  else {
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  drawSprites();
}