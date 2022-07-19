var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
//var drink, drinkImg, pwr, pwer, coin, bomb;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
  //drinkImg = loadImage("energyDrink.png");
  //pwr = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(180,200);
  path.addImage("path", pathImg);
  path.velocityY = 3
  path.scale=1.5;

  boy = createSprite();
  boy.addAnimation("runner", boyImg);
  boy.scale=0.08;
  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  boy.y = 300;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

