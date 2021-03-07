class Game {
    constructor() {
        
    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }
    

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        player1 = createSprite(200, 200);
        player1.addImage("player1", player_img);

        player2 = createSprite(200, 200);
        player2.addImage("player2", player_img);
        players = [player1, player2];

    }

    play() {
        textSize(50)
                fill("blue")
               text("player1"+  players[1].score,200,200)
               text("player2"+  players[0].score,200,300)
 
        form.hide();

        Player.getPlayerInfo();

        if (allPlayers !== undefined) {
            var index = 0
            var x = 100;
            var y = 200;
            text("player1"+ allPlayers.player1.score,600,50)
                text("player2"+ allPlayers.player2.score,600,150)

            drawSprites()
            for (var plr in allPlayers) {

                index = index + 1;
                x = displayWidth - allPlayers[plr].distance;

                y = 500;
             
                ellipse(players[index-1].x,players[index-1].y,60,60)
                players[index - 1].x = x
                players[index - 1].y = y

                // Differentiate the main player by printing
                // the name of the player on the basket. 


                if (index === player.index) {
                    fill("red")
                    textSize(25)
                    text(allPlayers[plr].name, x, y)
                   // camera.position.x = players[index - 1].x
                    drawSprites()
                }

            }

        }

        // Give movements for the players using arrow keys
        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance = player.distance - 10

            player.update()
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance = player.distance + 10
           
            player.update()
        }


        //console.log(fruits)
        // Create and spawn fruits randomly
        if (frameCount % 20 === 0) {
            fruits = createSprite(random(100, 3000), 20, 100, 100)
            fruits.velocityY = 6
            var rand = Math.round(random(1, 5))
            switch (rand) {
              case 1: fruits.addImage("fru", fruit1_img)
                break;
              case 2: fruits.addImage("fruit", fruit2_img)
                break;
              case 3: fruits.addImage("fruit1", fruit3_img)
                break;
              case 4: fruits.addImage("fruit2", fruit4_img)
                break;
              case 5: fruits.addImage("fruit3", fruit5_img)
                break;
            }
            fruitGroup.add(fruits)
          }
        if (player.index !== null) {
            /*for (var i = 0; i > fruitGroup.lenght; i++) {
                if (fruitGroup.get(i).isTouching(players)) {
                    fruitGroup.get(i).destroy()
                    player.score= player.score+1
                    player.update()
                    
                }*/
                if(fruitGroup.isTouching(players)){
                    player.score= player.score+1
                    player.update()
                    fruitGroup.destroyEach()
                }
                
            }
            if(player.score >=10){
                this.end()
              } 
           
            
                
         //console.log(player.score)
        }
        
        end(){
            game.update(2)
            drawSprites()
        
}
    }

   
