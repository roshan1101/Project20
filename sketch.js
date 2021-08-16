
var sleep

  function preload() {
 bg = loadImage("Images/iss.png");
 sleep = loadAnimation("Images/sleep.png");
 brush = loadAnimation("Images/brush.png");
 gym = loadAnimation("Images/gym1.png", "Images/gym2.png", "Images/gym11.png", "Images/gym12.png");
 eat = loadAnimation("Images/eat1.png","Images/eat2.png");
 drink = loadAnimation("Images/drink1.png","Images/drink2.png");
 move = loadAnimation("Images/move.png", "Images/move1.png");
 bath = loadAnimation("Images/bath1.png", "Images/bath2.png");

  }
function setup() {

createCanvas(600,500);
astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;

}
  



function draw() 
{
  background(bg);
  
  drawSprites ()
  edges = createEdgeSprites()
  astronaut.bounceOff(edges)

if(keyDown("UP_ARROW")){
 astronaut.addAnimation("Brushing", brush);
 astronaut.changeAnimation("Brushing");
 astronaut.y = 250;
 astronaut.velocityX = 0;
 astronaut.velocityY = 0;
}

 if(KeyDown("DOWN_ARROW")){
   astronaut.addAnimation("Gymming", gym);
   astronaut.changeAnimation("Gymming");
  astronaut.y = 250;
 astronaut.velocityX = 0;
 astronaut.velocityY = 0;
}

if(KeyDown("LEFT_ARROW")){
  astronaut.addAnimation("Eating", eat);
  astronaut.changeAnimation("Eating");
  astronaut.y = 250;
  astronaut.velocityX = 0;
  astronout.velocityY = 0;
}

if(KeyDown("RIGHT_ARROW")){
  astronaut.addAnimation("Bathing", bath);
  astronaut.changeAnimation("Bathing");
  astronaut.y = 250;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("m")){
  astronaut.addAnimation("Moving", move);
  astronaut.changeAnimation("Moving");
  astronaut.y = 250;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}
}