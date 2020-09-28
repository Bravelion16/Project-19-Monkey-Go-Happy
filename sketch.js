var back,backImage;

var monkey,monkey_running;

var banana,bananaImage,bananaGroup;

var stone,stoneImage,stoneGroup;

var score;

function preload() {
  backImage = loadImage('jungle.png');
  
  monkey_running = loadAnimation('Monkey_01.png','Monkey_02.png','Monkey_03.png','Monkey_04.png','Monkey_05.png','Monkey_06.png','Monkey_07.png','Monkey_08.png','Monkey_09.png','Monkey_10.png');
  
  bananaImage = loadImage('banana.png');
  
  stoneImage = loadImage('stone.png');
}

function setup() {
  createCanvas(400, 400);
  
  back = createSprite(200,200);
  back.addImage(backImage);
  
  //monkey
}

function draw() {
  background(220);
  
  drawSprites();
}