const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var gameengine, gameworld, bgpic,bg,starpic,fairypic,fairy,star,somusic

function preload()
{
   //preload the images here
   bgpic = loadImage("starnight.png")
  starpic = loadImage("star.png")
  fairypic = loadImage("fairy1.png")
  somusic = new Audio("JoyMusic.mp3")
}

function setup() {
  createCanvas(800, 750);
  gameengine = Engine.create();
  gameworld = gameengine.world;
  
  bg = createSprite(400,400)
  bg.addImage(bgpic)
  bg.scale = 0.5

  fairy = createSprite(100,470,50,50)
  fairy.addImage(fairypic)
  fairy.scale = 0.25

  star = createSprite(600,50,20,20)
  star.addImage(starpic)
  star.scale = 0.25

  
}


function draw() {
  background("black");
  somusic.play();
  if(star.y > 470){
    star.velocityY = 0
  }
  
  keyPressed();
  drawSprites();
}
function keyPressed() {

  if(keyWentDown(LEFT_ARROW)){
    fairy.velocityX = -5;
  }
  if(keyWentUp(LEFT_ARROW)){
    fairy.velocityX = 0
  }
  if(keyWentDown(RIGHT_ARROW)){
    fairy.velocityX = 5;
  }
  if(keyWentUp(RIGHT_ARROW)){
    fairy.velocityX = 0
  }
  if(keyDown(DOWN_ARROW)){
    star.velocityY = 5
  }
}