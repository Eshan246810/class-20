let fixrec;
let movrec;


function setup() {
  createCanvas(800,800);
  movrec = createSprite(400, 800, 50, 50);
  movrec.shapeColor= "black";
  movrec.velocityY=-3;
  fixrec = createSprite(400, 150, 20, 70);
  fixrec.shapeColor = "black"
  fixrec.velocityY= 3;
 
}

function draw() {
  background(0,255,255);
  if(movrec.x-fixrec.x < fixrec.width/2+movrec.width/2
    && fixrec.x-movrec.x < fixrec.width/2+movrec.width/2){
    movrec.velocityX= movrec.velocityX*(-1)
    fixrec.velocityX=fixrec.velocityX*(-1);
  }
  if( movrec.y-fixrec.y < fixrec.height/2+movrec.height/2
    && fixrec.y-movrec.y < fixrec.height/2+movrec.height/2){
     movrec.velocityY=movrec.velocityY*(-1);
     fixrec.velocityY=fixrec.velocityY*(-1);
          
    }
  //movrec.y= World.mouseY;
  //movrec.x= World.mouseX;
 /* if(movrec.x-fixrec.x < fixrec.width/2+movrec.width/2
    && fixrec.x-movrec.x < fixrec.width/2+movrec.width/2
    && movrec.y-fixrec.y < fixrec.height/2+movrec.height/2
    && fixrec.y-movrec.y < fixrec.height/2+movrec.height/2){
      movrec.shapeColor="white";
      fixrec.shapeColor="white";
    }
    else{
      movrec.shapeColor="black";
      fixrec.shapeColor="black";

    }*/
  drawSprites();
}