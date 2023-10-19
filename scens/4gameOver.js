class GameOver extends Phaser.Scene{
    constructor(){
        super({
            key: 'GameOver'
        })
    }

    create(){

        let gameOver = {
            action: 'gameOver',
            allGameSessionId : sessionID,
            gameSessionId : startGame.gameSessionId,
            score : gameState.score,
            timeStamp : Date.now()
        }

        window?.parent.postMessage(gameOver, '*');

        gameState.onGame = false;
        gameState.isOver = true;
        this.gameOverSound = this.sound.add('gameOver', {loop: false, volume: 0.5});
        this.gameOverSound.play();
        this.gameOverBg = this.add.image(game.config.width/2, game.config.height/2, 'menuBg').setOrigin(0.5);
        this.gameOverBg.setDisplaySize(game.config.width, game.config.height);

        this.gameOverTitle = this.add.image(game.config.width/2, game.config.height/4, 'gameOverTitle').setOrigin(0.5);
        this.selector = this.add.image(game.config.width/2, game.config.height/2+50, 'button').setOrigin(0.5);
        this.restartBtn = this.add.image(game.config.width/2, game.config.height/2+50, 'restartEmpty').setOrigin(0.5);
        this.exitBtn = this.add.image(game.config.width/2, this.restartBtn.y + 120, 'exitSelected').setOrigin(0.5, 0.6);

        document.addEventListener('keydown',(e)=>{
            if(e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196){
                this.exitGame()
            }
        })

        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Nunito-black', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        this.contolInfo = this.add.image(game.config.width - 260, 80, 'controlInfo')
        this.score = this.add.text(game.config.width/2-150, game.config.height - 100, `${gameState.score}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '64px', fill: '#2A185B' }).setOrigin(0.5);
        this.scoreTitle = this.add.text (this.score.x, this.score.y - 75, "Счет", {
            fontFamily: 'Rubik-Regular',
            fontSize: 48,
            fontStyle: 'normal',
            color: '#2A185BB2',
        }).setOrigin(0.5);
        this.loadScore()
    }

    loadScore(){
        if(localStorage.getItem('heighScore_2048')){
            this.heigScoreText = this.add.text(game.config.width / 2 + 150, game.config.height - 100,`${JSON.parse(localStorage.getItem('heighScore_2048'))}`, {
                fontFamily: 'Rubik-Medium',
                fontSize: 64,
                fontStyle: 'bold',
                color: '#2A185B',
                align: 'center'
            }).setOrigin(0.5);

            this.heigScoreTitle = this.add.text(this.heigScoreText.x, this.heigScoreText.y - 75, "Рекорд", {
                fontFamily: 'Rubik-Regular',
                fontSize: 48,
                fontStyle: 'normal',
                color: '#2A185BB2',
            }).setOrigin(0.5);

            this.line = this.add.image(game.config.width / 2, game.config.height - 100, 'line').setOrigin(0.5);
        }
    }

    moveSelector(direction){
        if(gameState.isOver){
            switch(direction){
                case 'up':
                    this.selector.y = this.restartBtn.y;
                    this.restartBtn.setTexture('restartEmpty');
                    this.exitBtn.setTexture('exitSelected');
                    break;
                case 'down':
                    this.selector.y = this.exitBtn.y;
                    this.restartBtn.setTexture('restartSelected');
                    this.exitBtn.setTexture('exitEmpty');
                    break;
                default:
                    break;
            }
        }
    }

    gameToggle(){
        if(gameState.isOver){
            switch(this.selector.y){
                case this.restartBtn.y:
                    this.restartGame();
                    break;
                case this.exitBtn.y:
                    this.exitGame();
                    break;
                default:
                    break;
            }
        }
    }

    restartGame(){
        if(gameState.isOver){
            gameState.isOver = false;
            gameState.onGame = true;
            gameState.score = 0
            canMerge = false;
            canAdd = true;

            ocupated = [];
            canMergeDown ;
            canMergeLeft ;
            canMergeRight ;
            try{
                startGame.gameSessionId = generateUUID();
                startGame.allGameSessionId = sessionID;
                window?.parent.postMessage(startGame, '*');
            }
            
            catch(er){
                var startGameError = {
                    action: 'startGameError',
                    allGameSessionId : sessionID,
                    gameSessionId: gameId,
                    timeStamp: Date.now()
                }
                window?.parent.postMessage(startGameError, '*');
            }
            this.scene.start('gameScene');
            this.scene.stop();
            
        }
    }

    exitGame(){
        if(gameState.isOver){

            let closeGameSession = {
                action: 'closeGameSession',
                allGameSessionId : sessionID,
                timeStamp : Date.now()
            }
    
            window?.parent.postMessage(closeGameSession, '*');
        }
    }

    update(){

    }
}

var gameOver = new GameOver();