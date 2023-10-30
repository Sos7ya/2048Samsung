class Pause extends Phaser.Scene{
    constructor(){
        super({
            key: 'Pause'
        })
    }

    create(){
        posted = false;
        gameState.onPause = true;
        gameState.onGame = false;

        try{
            let gamePause = {
                action: 'gamePause',
                allGameSessionId: startGame.allGameSessionId,
                gameSessionId: startGame.gameSessionId,
                score: gameState.score,
                timeStamp : Date.now()
            }
    
            window?.parent.postMessage(gamePause, '*');
        
        

        this.pauseBg = this.add.image(game.config.width/2, game.config.height/2, 'menuBg').setOrigin(0.5);
        this.pauseBg.setDisplaySize(game.config.width, game.config.height);

        this.pauseTitle = this.add.image(game.config.width/2, game.config.height/4, 'pauseTitle').setOrigin(0.5);

        this.selector = this.add.image(game.config.width/2, game.config.height/2+50, 'button').setOrigin(0.5);
        this.resumeBtn = this.add.image(game.config.width/2, game.config.height/2+50, 'resumeEmpty').setOrigin(0.5);
        this.exitBtn = this.add.image(game.config.width/2, this.resumeBtn.y + 120, 'exitSelected').setOrigin(0.5, 0.6);

        document.addEventListener('keydown',(e)=>{
            if(e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196){
                this.exitGame()
            }
        })

        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Nunito-black', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        this.contolInfo = this.add.image(game.config.width - 260, 80, 'controlInfo');
        this.score = this.add.text(game.config.width/2-150, game.config.height - 100, `${gameState.score}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '64px', fill: '#2A185B' }).setOrigin(0.5);
        this.scoreTitle = this.add.text (this.score.x, this.score.y - 75, "Счет", {
            fontFamily: 'Rubik-Regular',
            fontSize: 48,
            fontStyle: 'normal',
            color: '#2A185BB2',
        }).setOrigin(0.5);
        this.loadScore();
    }
    catch(er){
        let gamePauseError = {
            action: 'gamePauseError',
            allGameSessionId: startGame.allGameSessionId,
            gameSessionId: startGame.gameSessionId,
            score: gameState.score,
            timeStamp : Date.now()
        }

        window?.parent.postMessage(gamePauseError, '*');
    }
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
        if(gameState.onPause){
            switch(direction){
                case 'up':
                    this.selector.y = this.resumeBtn.y;
                    this.resumeBtn.setTexture('resumeEmpty');
                    this.exitBtn.setTexture('exitSelected');
                    break;
                case 'down':
                    this.selector.y = this.exitBtn.y;
                    this.resumeBtn.setTexture('resumeSelected');
                    this.exitBtn.setTexture('exitEmpty');
                    break;
                default:
                    break;
            }
        }
    }

    gameToggle(){
        if(gameState.onPause){
            switch(this.selector.y){
                case this.resumeBtn.y:
                    this.resumeGame();
                    break;
                case this.exitBtn.y:
                    this.exitGame();
                    break;
                default:
                    break;
            }
        }
    }

    resumeGame(){
        if(gameState.onPause){
            gameState.onPause = false;
            gameState.onGame = true;

            try{
                let gameResume = {
                    action: 'gameResume',
                    allGameSessionId: startGame.allGameSessionId,
                    gameSessionId: startGame.gameSessionId,
                    score: gameState.score,
                    timeStamp : Date.now()
                }
    
                window?.parent.postMessage(gameResume, '*');
                this.scene.stop('Pause');
                this.scene.resume('gameScene');
            }
            catch(er){
                let gameResumeError = {
                    action: 'gameResumeError',
                    allGameSessionId: startGame.allGameSessionId,
                    gameSessionId: startGame.gameSessionId,
                    score: gameState.score,
                    timeStamp : Date.now()
                }

                indow?.parent.postMessage(gameResumeError, '*');
            }
        }
    }

    exitGame(){
        if(gameState.onPause){
            if(!posted){
                let closeGameSession = {
                    action: 'closeGameSession',
                    allGameSessionId : sessionID,
                    timeStamp : Date.now()
                }
    
                let gameOver = {
                    action: 'gameOver',
                    allGameSessionId : sessionID,
                    gameSessionId : startGame.gameSessionId,
                    score : gameState.score,
                    timeStamp : Date.now()
                }
        
                window?.parent.postMessage(gameOver, '*');
                window?.parent.postMessage(closeGameSession, '*');
                posted = true;
            }
        }
    }

    update(){

    }
}

var pause = new Pause();