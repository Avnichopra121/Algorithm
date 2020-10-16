var MovingRect, FixedRect;

function setup() 
{
  createCanvas(800,400);

  MovingRect = createSprite(400, 200, 50, 50);
  MovingRect.shapeColor = "red";

  FixedRect = createSprite(200, 100, 50, 50);
  FixedRect.shapeColor = "red";
}

function draw()
 {
  background(255,255,255); 
  
  MovingRect.x = mouseX;
  MovingRect.y = mouseY;

  if(FixedRect.x - MovingRect.x < FixedRect.width/2 + MovingRect.width/2 
   && MovingRect.x - FixedRect.x < FixedRect.width/2 + MovingRect.width/2
   && FixedRect.y - MovingRect.y < FixedRect.height/2 + MovingRect.height/2
   && MovingRect.y - FixedRect.y < FixedRect.height/2 + MovingRect.height/2)
   {
   MovingRect.shapeColor = "Black";
   FixedRect.shapeColor = "Black";

   } else
   {
    MovingRect.shapeColor = "red";
    FixedRect.shapeColor = "red";
    
   }

  drawSprites();
}