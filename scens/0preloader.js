class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Preloader'
        });
    }
    preload() {
        try{
            let startDownloading = {
                action: 'startDownloading',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(startDownloading, '*');
        

        this.loadText = this.add.text(game.config.width/2, game.config.height/2, 'ЗАГРУЗКА...', { fontFamily: 'RubikOne-Regular', fontSize: 64, color: '#e3f2ed' }).setOrigin(0.5);
        this.loadText1 = this.add.text(game.config.width/2, game.config.height/2, 'Loading ...', { fontFamily: 'Rubik-Regular', fontSize: 64, color: '#e3f2ed' }).alpha = 0;
        this.loadText2 = this.add.text(game.config.width/2, game.config.height/2, 'Loading ...', { fontFamily: 'Rubik-Medium', fontSize: 64, color: '#e3f2ed' }).alpha = 0;
        this.loadText3 = this.add.text(game.config.width/2, game.config.height/2, 'Loading ...', { fontFamily: 'Rubik-SemiBold', fontSize: 64, color: '#e3f2ed' }).alpha = 0;

        
        for(let n = 2; n <= 8192; n*=2){
          this.load.image(`${n}`, `assets/${n}.png`);
        }
        this.load.image('bg', 'assets/bg.png');
        this.load.image('info', 'assets/info.png');
        this.load.image('mainBg', 'assets/mainBg.png');
        this.load.image('gameAreaBg', 'assets/gameAreaBg.png');
        this.load.image('button', 'assets/button.png');
        this.load.image('startEmpty', 'assets/startEmpty.png');
        this.load.image('startSelected', 'assets/startSelected.png');
        this.load.image('resumeEmpty', 'assets/resumeEmpty.png');
        this.load.image('resumeSelected', 'assets/resumeSelected.png');
        this.load.image('exitEmpty', 'assets/exitEmpty.png');
        this.load.image('exitSelected', 'assets/exitSelected.png');
        this.load.image('restartEmpty', 'assets/restartEmpty.png');
        this.load.image('restartSelected', 'assets/restartSelected.png');
        this.load.image('menuBg', 'assets/menuBg.png');
        this.load.image('pauseTitle', 'assets/pause.png');
        this.load.image('gameOverTitle', 'assets/gameOver.png');
        this.load.image('controlInfo', 'assets/controlInfo.png');
        this.load.image('ageInfo', 'assets/ageInfo.png');
        this.load.image('line', 'assets/line.png');
        
        this.load.audio('mainTheme', 'assets/sounds/mainTheme.mp3');
        this.load.audio('merge', 'assets/sounds/merge.mp3');
        this.load.audio('land', 'assets/sounds/land.mp3');
        this.load.audio('movefast', 'assets/sounds/moveFast.mp3');
        // this.load.audio('moveSides', 'assets/sounds/moveSides.mp3');
        this.load.audio('gameOver', 'assets/sounds/gameOver.mp3');
        }
        
        catch(er){
            let startDownloadingError = {
                action: 'startDownloadingError',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(startDownloadingError, '*');
        }
        
      }

    create() {
        try{
            let finishDownload = {
                action: 'finishDownload',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(finishDownload, '*')
        }
        catch(er){
            let downloadError = {
                action: 'downloadError',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(downloadError, '*')
        }
        this.scene.start('MainMenu');
    }
}

var preloader = new Preloader();