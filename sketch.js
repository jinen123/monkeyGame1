
var monkey , monkey_running,ground;
var banana ,bananaImage, rock, rockImage;
var FoodGroup, rockGroup;

function preload()
{   
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png"); 
  rockImage = loadImage("obstacle.png");
}

function setup() 
{
  
  createCanvas(500,500);
 
  monkey = createSprite(230,350,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(250,385,500,10)
  
  foodGroup = new Group()
  rockGroup = new Group()
  
  monkey.setCollider("rectangle",0,0,200,monkey.height)
  
}

function draw() 
{
{
  background("green")
  
  
    if(keyDown("space")&& monkey.y >= 349)
    {
    monkey.velocityY = -13;
    } 
   if(monkey.isTouching(foodGroup))
  {
   foodGroup.destroyEach();  
  }
      
  spawnBanana();
  spawnRock();
    
  }  
  if(monkey.isTouching(rockGroup))
  {
   foodGroup.
   rockGroup.VelocityX=0
    
  }
  
 
      
  monkey.velocityY = monkey.velocityY + 0.8
  
  
 //console.log(monkey.y)

  //monkey.debug=true
  monkey.collide(ground);

  
  drawSprites();
  
}

function spawnBanana()
{
  if(frameCount % 120 === 0)
  {
   banana = createSprite(500,280,20,20);
   banana.velocityX = -3 
   banana.addImage("1",bananaImage);
   banana.scale = 0.1;
   foodGroup.add(banana)
  }
}

function spawnRock()
{
     if(frameCount % 180 === 0)
  {
   rock = createSprite(500,360,20,20);
   rock.velocityX = -3 
   rock.addImage("2",rockImage);
   rock.scale = 0.1;
   rockGroup.add(rock)
  }
}
