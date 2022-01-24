
var trex ,trex_correndo, bordas;

function preload(){
  trex_correndo = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(30,160,20,50);
  trex.addAnimation("corrida",trex_correndo);
  trex.scale = 0.5;

  bordas = createEdgeSprites();
  
}

function draw(){
  background(220);

  console.log(trex.y);

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;

  trex.collide(bordas[3]);

  drawSprites();

}