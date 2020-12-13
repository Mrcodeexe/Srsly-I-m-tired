
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var grnd

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(100,500,13,13);
monkey.addAnimation("monkeyr", monkey_running);
  monkey.scale=0.2
  
  grnd=createSprite(200,570,1000,20);
  grnd.velocityX=-4;

  
  
  FoodGroup=new Group();
  ObstacleGroup=new Group();
}


function draw() {


  FoodnRock();

  
  if(grnd.x>0){
    grnd.x=grnd.width/2
    
  }
  
survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time :"+ survivalTime , 50, 50);

  
  if(keyDown("space")){
  monkey.velocityY=-9;
  
  }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();

    
  }
  
  
   monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(grnd);
  
  drawSprites();

}

function FoodnRock(){
  
    if(frameCount%190==0 ){

    banana=createSprite(500,210,32,32);
  banana.addImage("b", bananaImage)
  banana.scale=0.3
  banana.y=Math.round(random(170,210))
      banana.velocityX=-5;
      FoodGroup.add(banana)
      
      
      
          if(frameCount%400){
    
    obstacle=createSprite(500,510,32,23);
  obstacle.addImage("obstaobsta", obstacleImage);
  obstacle.scale=0.3
    obstacle.velocityX=-5;
  
      ObstacleGroup.add(obstacle);
  
  
  }
  

  }
  
  
  
}





