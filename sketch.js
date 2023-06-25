var arco, flecha, cenario;
var ImgArco, ImgFlecha, ImgBalãoVerde;
var ImgBalãoVermelho, ImgBalãoRosa ,ImgBalãoAzul ;
var ImgFundo;
var pontos=0;
var Balao;



function preload(){
  
  ImgFundo = loadImage("imagem do fundo.png");
  ImgFlecha = loadImage("flecha.png");
  ImgArco = loadImage("arco.png");
  ImgBalãoVermelho = loadImage("balão vermelho.png");
  ImgBalãoRosa = loadImage("balão rosa.png");
  ImgBalãoVerde = loadImage("balão verde.png");
  ImgBalãoAzul = loadImage("balão azul.png");

  
}

function createArrow() {
  var flecha= createSprite(100, 100, 60, 10);
   flecha.addImage(ImgFlecha);
   flecha.x = 360;
   flecha.y=flecha.y;
   flecha.velocityX = -4;
   flecha.lifetime = 100;
   flecha.scale = 0.3;
   flecha.y = World.mouseY
  }

  function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  }

  function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue .addImage(ImgBalãoAzul);
  blue .velocityX = 3;
  blue .lifetime = 150;
  blue .scale = 0.1;
  }

  function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(ImgBalãoVerde);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  }

  function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(ImgBalãoRosa);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;



  }

function setup() {
  createCanvas(400, 400);
  
  cenario = createSprite(0,0,400,400);
  cenario.addImage( ImgFundo);
  cenario.scale = 2.5
  
  // criando arco para a flecha
  arco = createSprite(380,220,20,50);
  arco.addImage(ImgArco); 
  arco.scale = 1;
  
   pontos = 0    
}

function draw() {
 background(0);
  // chão em movimento
    cenario.velocityX = -3 

    if (cenario.x < 0){
      cenario.x = cenario.width/2;
    }
  
  //arco em movimento
  arco.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  

  
  var selecionar_balao = Math.round(random(1,9))
  function SpawnarBalao(){  
  
    if (World.frameCount % 100 == 0) {
     Balao=createSprite(600,180,10,40);  
     Balao.velocityX=-3; 
     switch(selecionar_balao){
     case 1:Balao=red;
           break;
     case 2:Balao=blue;
             break;
     case 3:Balao=green;
             break;
     case 4:Balao=pink;
             break;
  }
   }
 }
  SpawnarBalao(),
  drawSprites();

  
}

  // Criar flechas para o arco
 