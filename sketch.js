var rect1, rect2, rect3



function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100, 200, 50, 50);
  rect2= createSprite(600, 200, 50, 50);
  rect3= createSprite(100, 350, 50, 50);
  rect1.debug=true;
  rect2.debug=true;
  rect3.debug= true;
  rect1.velocityX  = 5;
  rect2.velocityX = -5;
  rect3.velocityY = -5;
}

function draw() {
  background(255,255,255); 
  
  if (isTouching(rect1, rect2)){
      rect1.shapeColor = color(12,150,89);
      rect2.shapeColor = color(225,75,115);
  } else {
    rect1.shapeColor = "red";
    rect2.shapeColor = "green";
  }
  
  

//bounceOff(rect1, rect3);

  drawSprites();
}

