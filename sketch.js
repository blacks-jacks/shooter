var fondo;
var sprite , shooter;

function preload(){
   fondo= loadImage ("arboles.avif");
  jugador = loadImage("shooter_2.png");
}

function setup() {
  createCanvas(1350,645);

shooter=createSprite(100,400);
shooter.addImage(jugador);
shooter.scale=0.7
}
function draw() {

  background(fondo);
  if(keyDown("UP_ARROW")){
shooter.y=shooter.y-30;
  }
  if(keyDown("DOWN_ARROW")){
  shooter.y=shooter.y+30;
  }
  drawSprites();
  
}

