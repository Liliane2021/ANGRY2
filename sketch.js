// Constante: você não quer haja uma nova atribuição de valor para uma variável durante a execução do bloco

// Matter = Importar
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1;

function setup(){
  
    var canvas = createCanvas(400,400);
    
 //Criação do Motor da Mecanica 
  engine=Engine.create();
  
  
  //Criação do Mundo do Motor
    world = engine.world;

    box1 = new Box(200,300,50,50);
    
  
}

function draw(){
    background(0);
  
   // Atualização do Motor
   Engine.update(engine);
    
   // display - Mostrar/Exibir os objetos
   box1.display();
   
}