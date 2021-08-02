var runner,road;

function preload(){

 //pre-load images
 runnerImg=loadAnimation("Runner-1.png", "Runner-2.png")
 roadImg=loadImage("path.png")
 coinImg=loadImage("coin.png")
 drink.Img= loadImage("energyDrink.png")
}


function setup(){
  createCanvas(600,600);
  
//create sprites here
road = createSprite(300,300,50,100);
road.addImage(roadImg)
road.scale=2
runner = createSprite(300,500,50,50);
runner.addAnimation("runner",runnerImg);
runner.scale=0.08

}

function draw() {
  background("lightGreen");
runner.x=mouseX
road.velocityY=4
if(road.y>600){
  road.y=road.height/2
}


spawnCoins();
 drawSprites();
}

function spawnCoins(){

  if(frameCount%60===0){
    coin=createSprite(600,0,40,10)
    coin.addImage(coinImg)
    coin.velocityY=3
    coin.scale=0.5
    coin.x= Math.round(random(10,600))
   coin.lifetime=220
  }
  
  
  }

  