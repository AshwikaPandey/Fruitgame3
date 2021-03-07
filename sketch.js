var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player, form, game;
var player1, player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var fruit3
 

var player_img;
var player1score = 0;
var player2score = 0;
;

function preload() {
  
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");


  back_img = loadImage("fruitImage.jpg")

}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  fruitGroup = new Group();

}

function draw() {
  background(back_img);
  
 

  if (playerCount === 2) {

    game.update(1)
  }
  if (gameState === 1) {
    clear()
    game.play()
    background(back_img)
  drawSprites()
  fill("blue") 
  text("Player1"+ ":  "+ player.score,20,150)
   
      
  }

  if (gameState === 2) {
    background("pink")
    clear()
    
    fill("blue")
    textSize(50)
    
    text("Game End",200,200)
    
    
  }
  
  // Add conditions for gameStates and playerCount
 
}