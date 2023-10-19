var gameState = {
    isMenu: false,
    onGame: false,
    onPause: false,
    OnGameOver: false,
    score: 0
}

var startGame = {
    action: 'startGame',
    allGameSessionId : sessionID,
    gameSessionId: gameId,
    timeStamp: Date.now()
}

class MainMenu extends Phaser.Scene{
    constructor (){
        super({
            key: 'MainMenu'
        });
    }

    

    create(){
        gameState.isMenu = true;
        this.mainBg = this.add.image(game.config.width/2, game.config.height/2, 'mainBg').setOrigin(0.5);
        this.mainBg.setDisplaySize(game.config.width, game.config.height);

        this.selector = this.add.image(game.config.width/2, game.config.height/2+100, 'button').setOrigin(0.5);
        this.startBtn = this.add.image(game.config.width/2, game.config.height/2+100, 'startEmpty').setOrigin(0.5);
        this.exitBtn = this.add.image(game.config.width/2, this.startBtn.y + 120, 'exitSelected').setOrigin(0.5, 0.6);

        document.addEventListener('keydown', (e) => {
            if(e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196){
                this.exitGame();
            }
        })
        
        let canvas = document.getElementsByTagName('canvas')[0];
        let posX = [];
        let posY = [];
        
        for(let i = this.startBtn.x - (this.startBtn.width/2); i < this.startBtn.x + (this.startBtn.width/2); i++){
            posX.push(i);
        }
        for(let n = this.startBtn.y - (this.startBtn.height/2); n < this.startBtn.y + (this.startBtn.height/2); n++){
            posY.push(n);
        }

        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Nunito-black', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        this.ageInfo = this.add.image(game.config.width - 150, 100, 'ageInfo');
        this.controlsInfo = this.add.image(260, 100, 'controlInfo').setOrigin(0.5)
        this.loadScore()
    }

    loadScore(){
        if(localStorage.getItem('heighScore_2048')){
            this.heigScoreText = this.add.text(game.config.width / 2, game.config.height - 100, `${JSON.parse(localStorage.getItem('heighScore_2048'))}`, {
                fontFamily: 'Rubik-Medium',
                fontSize: 64,
                fontStyle: 'normal',
                color: '#2A185B',
            }).setOrigin(0.5)
            this.heigScoreTitle = this.add.text(this.heigScoreText.x, this.heigScoreText.y - 75, "Рекорд", {
                fontFamily: 'Rubik-Regular',
                fontSize: 48,
                fontStyle: 'normal',
                color: '#2A185BB2',
            }).setOrigin(0.5)
        }
    }

    checkPosX(e, posX){
        
        let set = false;
        posX.forEach(pos => {
            if(pos === e.offsetX){
                set = true;
            }
        });
        return set;
    }

    checkPosY(e, posY){
        let set = false;
        posY.forEach(pos => {
            if(Math.floor(pos) === e.offsetY){
                set = true;
            }
        });
        return set;
    }

    handleClick(checkPosX, checkPosY){
        if(checkPosX && checkPosY){
            this.scene.stop();
            this.scene.start('gameScene');
        }
    }

    moveSelector(direction){
        if(gameState.isMenu){
            switch(direction){
                case 'up':
                    this.selector.y = this.startBtn.y;
                    this.startBtn.setTexture('startEmpty');
                    this.exitBtn.setTexture('exitSelected');
                    break;
                case 'down':
                    this.selector.y = this.exitBtn.y;
                    this.startBtn.setTexture('startSelected');
                    this.exitBtn.setTexture('exitEmpty');
                    break;
                default:
                    break;
            }
        }
    }

    startGame(){
        if(gameState.isMenu){
            gameState.isMenu = false;
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

            this.scene.stop('MainMenu');
            this.scene.start('gameScene');
        }
    }

    exitGame(){
        if(gameState.isMenu){
            let closeGameSession = {
                action: 'closeGameSession',
                allGameSessionId : sessionID,
                timeStamp : Date.now()
            }
    
            window?.parent.postMessage(closeGameSession, '*');
        }
    }

    gameToggle(){
        if(gameState.isMenu){
            switch(this.selector.y){
                case this.startBtn.y:
                    this.startGame();
                    break;
                case this.exitBtn.y:
                    this.exitGame();
                    break;
                default:
                    break;
            }
        }
    }

    update(){
       
    }
}

var mainMenu = new MainMenu();