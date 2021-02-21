var balloon,bg;

var database,position;

function preload(){

bg=loadImage("abc.png");
p1=loadImage("p1.png")

}

function setup() {

  createCanvas(800,400);

  database=firebase.database();

  balloon = createSprite(250,250,5,5);
  balloon.addImage(p1);

  var balloonPosition=database.ref('balloon/position');

  balloonPosition.on("value",readPosition,showError);

}

function draw() {
  background(bg);  

  if(position!==undefined)
  
  {

  if(keyDown(LEFT_ARROW))
  {
    changePosition(-1,0);
  }
  
  else if(keyDown(RIGHT_ARROW))
  {
    changePosition(1,0);
  }
  
  else if(keyDown(UP_ARROW))
  {
    changePosition(0,-1);
  }
  
  else if(keyDown(DOWN_ARROW))
  {
    changePosition(0,+1);
  }
  
}

  drawSprites();
}


function changePosition(x,y){

  database.ref('balloon/position').set({
  'x':position.x+x,
  'y':position.y+y,

  }
  )
}


function readPosition(data){

  position=data.val();
  balloon.x=position.x;
  balloon.y=position.y;
  
  }
  
  function showError(){
  
  console.log('Error in writing to the database');
  
  }

