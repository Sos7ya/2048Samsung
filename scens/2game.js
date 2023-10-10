class GameScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'gameScene'
        })
    }

    create(){
        gameState.isMenu = false;
        gameState.onGame = true;
        this.loadedScore = false;
        this.canAdd = true;
        canMerge = true;
        this.bg = this.add.image(game.config.width/2, game.config.height/2, 'bg').setOrigin(0.5);
        this.bg.setDisplaySize(game.config.width, game.config.height);
        // this.moveSidesSound = this.sound.add('moveSides', {loop: false, volume: 0.5});
        this.moveFastSound = this.sound.add('movefast', {loop: false, volume: 0.5});
        this.landSound = this.sound.add('land', {loop: false, volume: 0.5});
        this.mergeSound = this.sound.add('merge', {loop: false, volume: 0.5});
        this.mainTheme = this.sound.add('mainTheme', {loop: true, volume: 0.1});
        
        this.mainTheme.play();
        this.gameArea = this.add.image(1260, game.config.height / 2-20, 'gameAreaBg').setOrigin(0.5);
        this.info = this.add.image(55, 56, 'info').setOrigin(0);

        this.board = [];
        for(let i = 0; i< SIZE; i++){
            this.board[i] = [];
            for(let j = 0; j < SIZE; j++){
                let cell = this.add.sprite(this.tileDestination(j) + this.gameArea.x-(this.gameArea.width/2)+(BLOCK_SPACE*2), this.tileDestination(i) - BLOCK_SIZE / 2 - (BLOCK_SPACE*2), '0').setScale(0.75);
                cell.alpha = 0
                this.board[i][j] = {
                    tileValue: 0,
                    tileSprite: cell
                }
            }
        }
        this.predictValue = 2;
        this.predict = this.add.image(550, 200, `${this.predictValue}`).setOrigin(0.5);
        this.predict.setDisplaySize(104, 104);

        this.predictTitle = this.add.text(this.predict.x-45, this.predict.y-100, 'ДАЛЬШЕ',{ fill: '#B39AEA', fontFamily: 'Rubik-SemiBold', fontSize: 44}).setOrigin(0.5);
        
        this.scoreText = this.add.text(this.predictTitle.x+45, game.config.height - 340, 'СЧЕТ', { fontFamily: 'Rubik-SemiBold', fontSize: '44px', fontStyle: 'bold', color: '#B39AEA' }).setOrigin(0.5);
        this.score = this.add.text(this.scoreText.x+60, this.scoreText.y+80, gameState.score, { fontFamily: 'RubikOne-Regular', fontSize: '100px', fontStyle: 'bold', fill: '#442D68', align: 'right'}).setOrigin(1, 0.5);
        
        document.addEventListener('keydown',(e)=>{
            if((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196)&&gameState.onGame){
                this.scene.launch('Pause');
                this.scene.pause();
            }
        });
        this.canMove = false;
        this.addTile();

        this.falling = this.time.addEvent({delay: 500, callback: this.fall, callbackScope: this, loop: true});

        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        this.loadScore();
        this.checkCells = this.board[0];
    }

    saveScore(){
        this.heighScore = gameState.score;
        this.oldScore = JSON.parse(localStorage.getItem('heighScore_2048'));
        this.heighScore > this.oldScore ? localStorage.setItem('heighScore_2048', JSON.stringify(this.heighScore)) : this.heighScore = this.oldScore;
        localStorage.setItem('lvl_arcnd', JSON.stringify(gameState.lvl));
    }

    loadScore(){
        if(localStorage.getItem('heighScore_2048')){
            this.hieghScoreText = this.add.text(this.score.x-90, this.score.y+110, `РЕКОРД`, {fontFamily: 'Rubik-SemiBold', fontSize: '44px', fontStyle: 'bold', color: '#B39AEA'}).setOrigin(0.5);
            this.hieghScoreNum = this.add.text(this.hieghScoreText.x+50, this.hieghScoreText.y+68, ' ', {fontFamily: 'Rubik-SemiBold', fontSize: '82px', fontStyle: 'bold', color: '#B39AEA'}).setOrigin(0.8, 0.5);
            this.hieghScoreNum.setText(JSON.parse(localStorage.getItem('heighScore_2048')));
            this.loadedScore = true;
        }
        else{
            this.loadedScore = false;
        }
    }

    refreshScore(){
        if(localStorage.getItem('heighScore_2048')&&this.loadedScore){
            this.hieghScoreNum.setText(JSON.parse(localStorage.getItem('heighScore_2048')));
        }
    }

    tileDestination(pos) {
        return pos * (BLOCK_SIZE + BLOCK_SPACE) + BLOCK_SIZE / 2 + BLOCK_SPACE;
    }

    addTile(){
        if(this.canAdd && onMerge===false){
            this.canMove = true;
            let emptyCells = [];
            for(let i = 0; i < SIZE; i++){
                if(this.board[0][i].tileValue === 0){
                    emptyCells.push(i);
                }
            }

            let randomCol = Phaser.Math.RND.pick(emptyCells);

            this.board[0][randomCol].tileValue = this.predictValue;
            this.board[0][randomCol].tileSprite.setTexture(`${this.board[0][randomCol].tileValue}`);
            this.board[0][randomCol].tileSprite.alpha = 1;

            this.playRow = 0;
            this.playCol = randomCol;

            this.udatePredict();
        }
        else{
            return;
        }
    }

    udatePredict() {
        this.predictValue = Phaser.Math.RND.pick([2, 4, 8, 16, 32]);
        this.predict.setTexture(`${this.predictValue}`);
    }

    fall(){
        if(gameState.onGame === true){
            if((this.playRow < SIZE-1)){
                if(this.board[this.playRow+1] !== undefined){
                    if(this.board[this.playRow+1][this.playCol].tileValue === 0){
                        this.board[this.playRow+1][this.playCol].tileValue = this.board[this.playRow][this.playCol].tileValue;
                        this.board[this.playRow][this.playCol].tileValue = 0;
    
                        this.board[this.playRow+1][this.playCol].tileSprite.alpha = 1;
                        this.board[this.playRow+1][this.playCol].tileSprite.setTexture(`${this.board[this.playRow+1][this.playCol].tileValue}`);
                        this.board[this.playRow][this.playCol].tileSprite.alpha = 0;
    
                        this.playRow++;
                    }
                    else{
                        if(this.board[this.playRow+1][this.playCol].tileValue===this.board[this.playRow][this.playCol].tileValue){
                            this.mergeTiles(this.board[this.playRow+1][this.playCol],this.board[this.playRow][this.playCol]);
                            this.playRow++;
                        }
                        else{
                            this.landSound.play();
                            this.checkBoard();
                            this.addTile();
                        }
                    }
                }
            }
            else{
                this.landSound.play();
                this.checkBoard();
                this.addTile();
            }
        }
    }

    move(direction){
        if(gameState.onGame&&this.canMove){
            if(this.playCol < SIZE - 1 || this.playCol >= 0){
                switch(direction){
                    case 'left':
                        if(this.board[this.playRow][this.playCol-1]!==undefined && this.board[this.playRow][this.playCol - 1].tileValue === 0){
                            this.board[this.playRow][this.playCol - 1].tileValue = this.board[this.playRow][this.playCol].tileValue;
                            this.board[this.playRow][this.playCol].tileValue = 0;
                            this.board[this.playRow][this.playCol].tileSprite.alpha = 0;
                            this.board[this.playRow][this.playCol - 1].tileSprite.alpha = 1;
                            this.board[this.playRow][this.playCol - 1].tileSprite.setTexture(`${this.board[this.playRow][this.playCol - 1].tileValue}`);

                            this.playCol--;
                        }
                    break;

                    case 'right':
                        if(this.board[this.playRow][this.playCol+1]!==undefined &&this.board[this.playRow][this.playCol + 1].tileValue === 0){
                            this.board[this.playRow][this.playCol + 1].tileValue = this.board[this.playRow][this.playCol].tileValue;
                            this.board[this.playRow][this.playCol].tileValue = 0;
                            this.board[this.playRow][this.playCol].tileSprite.alpha = 0;
                            this.board[this.playRow][this.playCol + 1].tileSprite.alpha = 1;
                            this.board[this.playRow][this.playCol + 1].tileSprite.setTexture(`${this.board[this.playRow][this.playCol + 1].tileValue}`);

                            this.playCol++;
                        }
                    break;

                    default:
                    break;
                }
            }
        }
    }

    checkBoard(){
        for(let i = 0; i < SIZE; i++){
            for(let j = 0; j < SIZE; j++){
                if(this.board[i][j].tileValue !== 0 && (i !== this.playRow || j !== this.playCol)){
                
                    onMerge = true;
                    if(this.board[i+1]!==undefined && this.board[i][j].tileValue === this.board[i+1][j].tileValue){
                       
                        this.mergeTiles(this.board[i+1][j], this.board[i][j]);
                        break;
                    }
                    else if((this.board[i][j-1]!==undefined) && (this.board[i][j].tileValue === this.board[i][j-1].tileValue)){
                       
                        this.mergeTiles(this.board[i][j-1], this.board[i][j]);
                        break;
                    }
                    else if((this.board[i][j+1]!==undefined) && (this.board[i][j].tileValue === this.board[i][j+1].tileValue)){
                       
                        this.mergeTiles(this.board[i][j+1], this.board[i][j]);
                        break;
                    }
                    else if((this.board[i+1]!==undefined && this.board[i+1][j].tileValue === 0)&&canMove){
                        
                        this.board[i+1][j].tileValue = this.board[i][j].tileValue;
                        this.board[i+1][j].tileSprite.alpha = 1;
                        this.board[i+1][j].tileSprite.setTexture(`${this.board[i+1][j].tileValue}`);

                        this.board[i][j].tileValue = 0;
                        this.board[i][j].tileSprite.alpha = 0;
                        this.checkBoard();
                    }
                }
            }
        }
        onMerge = false;
        if(this.checkGame()){
            this.mainTheme.stop();
            this.scene.stop();
            this.scene.start(gameOver);
        }
    }

    restoreField(){
        for (var i = 0; i < SIZE; i++) {
            for (var j = 0; j < SIZE; j++) {
                var cell2 = this.add.sprite(this.tileDestination(j) + this.gameArea.x-(this.gameArea.width/2)+(BLOCK_SPACE*2), this.tileDestination(i) - BLOCK_SIZE / 2 - (BLOCK_SPACE*2), '0').setScale(0.35);
                cell2.alpha = 0;
                cell2.visible = 0;
            
                this.board[i][j].tileSprite.x = cell2.x;
                this.board[i][j].tileSprite.y = cell2.y;
            }
        }
    }


    mergeThree(first, second, third){
        if(first.tileValue === second.tileValue && second.tileValue === third.tileValue){
            this.canMove = false;
            this.falling.paused = true;
            let startX = second.tileSprite.x;
            let startY = second.tileSprite.y;
            let start1X = first.tileSprite.x;
            let start1Y = first.tileSprite.y;
            let start2X = third.tileSprite.x;
            let start2Y = third.tileSprite.y;
         
            this.animMerge = this.tweens.add({
                targets: [first.tileSprite, third.tileSprite],
                y: second.tileSprite.y,
                x: second.tileSprite.x,
                scale: 2,
                duration: 100,
                onComplete: (tweens) => {
                    second.tileSprite.x = startX;
                    second.tileSprite.y = startY;
                    first.tileSprite.x = start1X;
                    first.tileSprite.y = start1Y;
                    third.tileSprite.x = start2X;
                    third.tileSprite.y = start2Y;
              
                    second.tileValue = second.tileValue * 4;
                    first.tileValue = 0;
                    third.tileValue = 0;
                    gameState.score += second.tileValue;
    
                    this.checkBoard();
                    this.restoreField();

                    this.falling.paused = false;
                }
            })
        }
    }

    mergeTiles(firsrt, second) {
        if ((firsrt.tileValue === second.tileValue)&&(firsrt.tileValue!==8192)&&canMerge) {

            this.canAdd = false;
            this.canMove = false;
            this.falling.paused = true;
            canMove = false;
            canMerge = false;
            let startX = second.tileSprite.x;
            let startY = second.tileSprite.y;
            let start1X = firsrt.tileSprite.x;
            let start1Y = firsrt.tileSprite.y;
          
          
            this.mergeSound.play();
            this.animMerge = this.tweens.add({
                targets: [second.tileSprite],
                y: firsrt.tileSprite.y,
                x: firsrt.tileSprite.x,
                 
                duration: 100,
                onComplete: (tweens) => {
                    second.tileSprite.x = startX;
                    second.tileSprite.y = startY;
                    firsrt.tileSprite.x = start1X;
                    firsrt.tileSprite.y = start1Y;
                    firsrt.tileValue +=  second.tileValue;
                    firsrt.tileSprite.setTexture(`${firsrt.tileValue}`);
                    second.tileValue = 0;
              
                    second.tileSprite.alpha = 0;
                    gameState.score += firsrt.tileValue;
                    canMove = true;
                    canMerge = true;
                    this.falling.paused = false;
                    this.checkBoard()
                    this.restoreField();
                    
                    this.saveScore();
                    this.refreshScore();
                    this.canAdd = true;
                }
            })
        }
        else{
            return
        }
    }

    checkGame(){
        let gameisOver = false;
        let col = [];
        for(let i = SIZE-1; i >= 0; i--){
            col[i] = []
            for(let y = SIZE-1; y >= 0; y--){
                col[i].push(this.board[y][i]);
            }
        }

        for(let e = SIZE-1; e >= 0; e--){
            if(col[e].every(this.checkCol)){
                gameisOver = true;
                break;
            }
            else{
                gameisOver = false;
            } 
        }
        return gameisOver;
    }

    checkCol(el){
        return el.tileValue > 0;
    }
    
    

    update(){
        this.score.setText(`${gameState.score}`, { fontFamily: 'RubikOne-Regular', fontSize: '100px', fontStyle: 'bold', fill: '#442D68', align: 'right'});
    }
}

var gameScene = new GameScene();