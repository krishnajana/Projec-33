var snowImage;
var snow;

function preload(){
  snowImage=loadImage("snow1.jpg")

}

function setup() {
  createCanvas(800,400);
  snow=createSprite(300, 300, 80, 80);
  snow.shapeColor="lightGreen"
}

function draw() {
  background(snowImage);  

  textSize(20);
  text("Press Left or Right arrow to move",500 ,100);

  if (keyDown(RIGHT_ARROW)) {
    snow.velocityX = 3;
    snow.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)) {
    snow.velocityX = -4;
    snow.velocityY = 0;
  }


  drawSprites();
}
 