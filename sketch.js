var bg1,bg,sleep,brush,gym,astronautg


function preload(){
  bg1 = loadImage("images/iss.png")
  sleep=loadImage("images/sleep.png");
  brush=loadAnimation("images/brush.png")

  gym=loadAnimation("images/gym1.png","images/gym2.png")
  eat=loadAnimation("images/eat1.png","images/eat2.png")
  drink=loadAnimation("images/drink1.png","images/drink2.png")
  
}


function setup() {
  


  createCanvas(400, 400);
  bg = createSprite(200,200)
  bg.addImage(bg1)
  bg.scale=0.1
  astronaut = createSprite(200,200)
  astronaut.addAnimation("sleeping",sleep)
astronaut.scale=0.1



}

function draw() {
  background(0);
if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush)
astronaut.changeAnimation("brushing")
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gym",gym)
  astronaut.changeAnimation("gym")
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat1",eat)
    astronaut.changeAnimation("eat1","eat2")
    }
    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("drink1",drink)
      astronaut.changeAnimation("drink1","drink2")
      }
      
      



drawSprites()


}