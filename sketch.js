var bg, sleep, brush, gym, eat, bath, move;
var astrnaut;

function preload(){
bg= loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png,images/gym1.png,images/gym2.png,images/gym2.png ");
eat = loadAnimation("images/eat1.png.images/eat1.png,images/eat2.png,images/eat2.png");
bath = loadAnimation("images/bath1.png,images/bath1.png,images/bath2.png,images/bath2.png");
move = loadAnimation("images/move1.png,images/move1.png,images/move2.png,images/move2.png");
}





function setup() {
  createCanvas(400, 400);

astrnaut = createSprite(300,230);
astrnaut.addAnimation("sleeping",sleep);
astonaut.scale = 0.1;
}

function draw() {
  background(bg);
drawSprites();
textSize(20);
fill("white")
text("instructions",20,35)
textSize(15);
text("Up Arrow = Brushing",20,55)
text("Down Arrow = Gymming",20,70)
text("Left Arrow = Eating",20,85)
text("Right Arrow = Bathing",20,100)
text("m key = Moving  ",20,115)
}
edges= createEdgeSprites();
astrnaut.bounceOff(edges);




if(keyDown("UP_ARROW")){
  astrnaut.addAnimation("Brushing",brush);
  astrnaut.changeAnimation("Brushing");
  astrnaut.y = 350;
  astrnaut.velocityX = 0;
  astrnaut.velocityY = 0;
  
  }
  if(keyDown("DOWN_ARROW")){
    astrnaut.addAnimation("Gymming",gym);
    astrnaut.changeAnimation("Gymming");
    astrnaut.y = 350;
    astrnaut.velocityX = 0;
    astrnaut.velocityY = 0;
    
    }
    if(keyDown("LEFT_ARROW")){
      astrnaut.addAnimation("Eating",eat);
      astrnaut.changeAnimation("eating");
      astrnaut.y = 150;
      astrnaut.y = 350;
      astrnaut.velocityX = 0.5;
      astrnaut.velocityY = 0.5;
      
      }
      if(keyDown("UP_ARROW")){
        astrnaut.addAnimation("Bathing",bath);
        astrnaut.changeAnimation("Bathing");
        astrnaut.x = 300;
        astrnaut.velocityX = 0;
        astrnaut.velocityY = 0;
        
        }

        if(keyDown("m")){
          astrnaut.addAnimation("Moving",move);
          astrnaut.changeAnimation("Moving");
          astrnaut.velocityX = 1;
          astrnaut.velocityY = 1;

        }

      




