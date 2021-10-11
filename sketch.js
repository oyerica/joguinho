var arco , flecha,  cena;
var imagemArco, imagemFlecha, imagemBalao_Verde, imagemBalao_Vermelho, imagemBalao_Rosa ,imagemBalao_AZul, imagemDeFundo;

var placar=0;

function preload(){
  
  imagemDeFundo = loadImage("background0.png");
  imagemFlecha = loadImage("arrow0.png");
  imagemArco = loadImage("bow0.png");
  imagemBalao_Vermelho = loadImage("red_balloon0.png");
  imagemBalao_Verde = loadImage("green_balloon0.png");
  imagemBalao_Rosa = loadImage("pink_balloon0.png");
  imagemBalao_AZul = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //criando plano de fundo
  cena = createSprite(0,0,400,400);
  cena.addImage(imagemDeFundo);
  cena.scale = 2.5
  
  // criando arco para atirar as flechas
  arco = createSprite(380,220,20,50);
  arco.addImage(imagemArco); 
  arco.scale = 1;
  
   placar = 0    
}

function draw() {
 background(0);
  // movendo o chão
    cena.velocityX = -3 

    if (cena.x < 0){
      cena.x = cena.width/2;
    }
  
  //movendo o arco
  arco.y = World.mouseY
  
   // atirando a flecha quando espaço é pressionado
  if (keyDown("space")) {
    criarFlecha();
    
  }
   
  //criando inimigos continuos
  var selecionar_balao = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (selecionar_balao == 1) {
      balaoVermelho();
    } else if (selecionar_balao == 2) {
      balaoVerde();
    } else if (selecionar_balao == 3) {
      balaoAzul();
    } else {
      balaoRosa();
    }
  }  
    
  drawSprites();
  text("Placar: "+ placar, 300,50);
}


// criando flechas para o arco
 function criarFlecha() {
  var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(imagemFlecha);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
}

function balaoVermelho() {
  var vermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage(imagemBalao_Vermelho);
  vermelho.velocityX = 3;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;
}

function balaoAzul() {
  var azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(imagemBalao_Azul);
  azul.velocityX = 3;
  azul.lifetime = 150;
  azul.scale = 0.1;
}

function balaoVerde() {
  var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(imagemBalao_Verde);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;
}

function balaoRosa() {
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(imagemBalao_Rosa);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 1
}
