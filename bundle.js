"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0===i)return("string"===t?String:Number)(e);i=i.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(i){var a=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(i);return _possibleConstructorReturn(this,a?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var game,canMergeDown,canMergeLeft,canMergeRight,sessionID,Preloader=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"Preloader"})}return _createClass(t,[{key:"preload",value:function(){try{var t={action:"startDownloading",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(i=window)&&i.parent.postMessage(t,"*"),this.loadText=this.add.text(game.config.width/2,game.config.height/2,"ЗАГРУЗКА...",{fontFamily:"RubikOne-Regular",fontSize:64,color:"#e3f2ed"}).setOrigin(.5),this.loadText1=this.add.text(game.config.width/2,game.config.height/2,"Loading ...",{fontFamily:"Rubik-Regular",fontSize:64,color:"#e3f2ed"}).alpha=0,this.loadText2=this.add.text(game.config.width/2,game.config.height/2,"Loading ...",{fontFamily:"Rubik-Medium",fontSize:64,color:"#e3f2ed"}).alpha=0,this.loadText3=this.add.text(game.config.width/2,game.config.height/2,"Loading ...",{fontFamily:"Rubik-SemiBold",fontSize:64,color:"#e3f2ed"}).alpha=0;for(var e=2;e<=8192;e*=2)this.load.image("".concat(e),"assets/".concat(e,".png"));this.load.image("bg","assets/bg.png"),this.load.image("info","assets/info.png"),this.load.image("mainBg","assets/mainBg.png"),this.load.image("gameAreaBg","assets/gameAreaBg.png"),this.load.image("button","assets/button.png"),this.load.image("startEmpty","assets/startEmpty.png"),this.load.image("startSelected","assets/startSelected.png"),this.load.image("resumeEmpty","assets/resumeEmpty.png"),this.load.image("resumeSelected","assets/resumeSelected.png"),this.load.image("exitEmpty","assets/exitEmpty.png"),this.load.image("exitSelected","assets/exitSelected.png"),this.load.image("restartEmpty","assets/restartEmpty.png"),this.load.image("restartSelected","assets/restartSelected.png"),this.load.image("menuBg","assets/menuBg.png"),this.load.image("pauseTitle","assets/pause.png"),this.load.image("gameOverTitle","assets/gameOver.png"),this.load.image("controlInfo","assets/controlInfo.png"),this.load.image("ageInfo","assets/ageInfo.png"),this.load.image("line","assets/line.png"),this.load.audio("mainTheme","assets/sounds/mainTheme.mp3"),this.load.audio("merge","assets/sounds/merge.mp3"),this.load.audio("land","assets/sounds/land.mp3"),this.load.audio("movefast","assets/sounds/moveFast.mp3"),this.load.audio("gameOver","assets/sounds/gameOver.mp3")}catch(e){var i={action:"startDownloadingError",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(t=window)&&t.parent.postMessage(i,"*")}}},{key:"create",value:function(){try{var t={action:"finishDownload",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(i=window)&&i.parent.postMessage(t,"*")}catch(e){var i={action:"downloadError",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(t=window)&&t.parent.postMessage(i,"*")}this.scene.start("MainMenu")}}]),t}(),preloader=new Preloader,gameState={isMenu:!1,onGame:!1,onPause:!1,OnGameOver:!1,score:0},_startGame={action:"startGame",allGameSessionId:sessionID,gameSessionId:gameId,timeStamp:Date.now()},MainMenu=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"MainMenu"})}return _createClass(t,[{key:"create",value:function(){var t=this;posted=!1,gameState.isMenu=!0,this.mainBg=this.add.image(game.config.width/2,game.config.height/2,"mainBg").setOrigin(.5),this.mainBg.setDisplaySize(game.config.width,game.config.height),this.selector=this.add.image(game.config.width/2,game.config.height/2+100,"button").setOrigin(.5),this.startBtn=this.add.image(game.config.width/2,game.config.height/2+100,"startEmpty").setOrigin(.5),this.exitBtn=this.add.image(game.config.width/2,this.startBtn.y+120,"exitSelected").setOrigin(.5,.6),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.exitGame()}),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5),this.ageInfo=this.add.image(game.config.width-150,100,"ageInfo"),this.controlsInfo=this.add.image(260,100,"controlInfo").setOrigin(.5),this.loadScore()}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_2048")&&(this.heigScoreText=this.add.text(game.config.width/2,game.config.height-100,"".concat(JSON.parse(localStorage.getItem("heighScore_2048"))),{fontFamily:"Rubik-Medium",fontSize:64,fontStyle:"normal",color:"#2A185B"}).setOrigin(.5),this.heigScoreTitle=this.add.text(this.heigScoreText.x,this.heigScoreText.y-75,"Рекорд",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#2A185BB2"}).setOrigin(.5))}},{key:"moveSelector",value:function(e){if(gameState.isMenu)switch(e){case"up":this.selector.y=this.startBtn.y,this.startBtn.setTexture("startEmpty"),this.exitBtn.setTexture("exitSelected");break;case"down":this.selector.y=this.exitBtn.y,this.startBtn.setTexture("startSelected"),this.exitBtn.setTexture("exitEmpty")}}},{key:"startGame",value:function(){if(gameState.isMenu){gameState.isMenu=!1;try{_startGame.gameSessionId=generateUUID(),_startGame.allGameSessionId=sessionID,null!=(i=window)&&i.parent.postMessage(_startGame,"*")}catch(e){var t,i={action:"startGameError",allGameSessionId:sessionID,gameSessionId:gameId,timeStamp:Date.now()};null!=(t=window)&&t.parent.postMessage(i,"*")}this.scene.stop("MainMenu"),this.scene.start("gameScene")}}},{key:"exitGame",value:function(){var e,t;gameState.isMenu&&!posted&&(t={action:"closeGameSession",allGameSessionId:sessionID,timeStamp:Date.now()},null!=(e=window)&&e.parent.postMessage(t,"*"),posted=!0)}},{key:"gameToggle",value:function(){if(gameState.isMenu)switch(this.selector.y){case this.startBtn.y:this.startGame();break;case this.exitBtn.y:this.exitGame()}}},{key:"update",value:function(){}}]),t}(),mainMenu=new MainMenu,GameScene=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"gameScene"})}return _createClass(t,[{key:"create",value:function(){var t=this;gameState.isMenu=!1,gameState.onGame=!0,this.loadedScore=!1,this.canAdd=!0,canMerge=!0,this.bg=this.add.image(game.config.width/2,game.config.height/2,"bg").setOrigin(.5),this.bg.setDisplaySize(game.config.width,game.config.height),this.moveFastSound=this.sound.add("movefast",{loop:!1,volume:.5}),this.landSound=this.sound.add("land",{loop:!1,volume:.5}),this.mergeSound=this.sound.add("merge",{loop:!1,volume:.5}),this.mainTheme=this.sound.add("mainTheme",{loop:!0,volume:.1}),this.mainTheme.play(),this.gameArea=this.add.image(1260,game.config.height/2-20,"gameAreaBg").setOrigin(.5),this.info=this.add.image(55,56,"info").setOrigin(0),this.board=[];for(var e=0;e<SIZE;e++){this.board[e]=[];for(var i=0;i<SIZE;i++){var a=this.add.sprite(this.tileDestination(i)+this.gameArea.x-this.gameArea.width/2+2*BLOCK_SPACE,this.tileDestination(e)-BLOCK_SIZE/2-2*BLOCK_SPACE,"0").setScale(.75);a.alpha=0,this.board[e][i]={tileValue:0,tileSprite:a}}}this.predictValue=2,this.predict=this.add.image(550,200,"".concat(this.predictValue)).setOrigin(.5),this.predict.setDisplaySize(104,104),this.predictTitle=this.add.text(this.predict.x-45,this.predict.y-100,"ДАЛЬШЕ",{fill:"#B39AEA",fontFamily:"Rubik-SemiBold",fontSize:44}).setOrigin(.5),this.scoreText=this.add.text(this.predictTitle.x+45,game.config.height-340,"СЧЕТ",{fontFamily:"Rubik-SemiBold",fontSize:"44px",fontStyle:"bold",color:"#B39AEA"}).setOrigin(.5),this.score=this.add.text(this.scoreText.x+60,this.scoreText.y+80,gameState.score,{fontFamily:"RubikOne-Regular",fontSize:"100px",fontStyle:"bold",fill:"#442D68",align:"right"}).setOrigin(1,.5),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||!gameState.onGame||(t.scene.launch("Pause"),t.scene.pause())}),this.canMove=!1,this.addTile(),this.falling=this.time.addEvent({delay:500,callback:this.fall,callbackScope:this,loop:!0}),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Rubik-Medium",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5),this.loadScore(),this.checkCells=this.board[0]}},{key:"saveScore",value:function(){this.heighScore=gameState.score,this.oldScore=JSON.parse(localStorage.getItem("heighScore_2048")),this.heighScore>this.oldScore?localStorage.setItem("heighScore_2048",JSON.stringify(this.heighScore)):this.heighScore=this.oldScore,localStorage.setItem("lvl_arcnd",JSON.stringify(gameState.lvl))}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_2048")?(this.hieghScoreText=this.add.text(this.score.x-90,this.score.y+110,"РЕКОРД",{fontFamily:"Rubik-SemiBold",fontSize:"44px",fontStyle:"bold",color:"#B39AEA"}).setOrigin(.5),this.hieghScoreNum=this.add.text(this.hieghScoreText.x+50,this.hieghScoreText.y+68," ",{fontFamily:"Rubik-SemiBold",fontSize:"82px",fontStyle:"bold",color:"#B39AEA"}).setOrigin(.8,.5),this.hieghScoreNum.setText(JSON.parse(localStorage.getItem("heighScore_2048"))),this.loadedScore=!0):this.loadedScore=!1}},{key:"refreshScore",value:function(){localStorage.getItem("heighScore_2048")&&this.loadedScore&&this.hieghScoreNum.setText(JSON.parse(localStorage.getItem("heighScore_2048")))}},{key:"tileDestination",value:function(e){return e*(BLOCK_SIZE+BLOCK_SPACE)+BLOCK_SIZE/2+BLOCK_SPACE}},{key:"addTile",value:function(){if(this.canAdd&&!1===onMerge){this.canMove=!0;for(var e=[],t=0;t<SIZE;t++)0===this.board[0][t].tileValue&&e.push(t);var i=Phaser.Math.RND.pick(e);this.board[0][i].tileValue=this.predictValue,this.board[0][i].tileSprite.setTexture("".concat(this.board[0][i].tileValue)),this.board[0][i].tileSprite.alpha=1,this.playRow=0,this.playCol=i,this.udatePredict()}}},{key:"udatePredict",value:function(){this.predictValue=Phaser.Math.RND.pick([2,4,8,16,32]),this.predict.setTexture("".concat(this.predictValue))}},{key:"fall",value:function(){!0===gameState.onGame&&(this.playRow<SIZE-1?void 0!==this.board[this.playRow+1]&&(0===this.board[this.playRow+1][this.playCol].tileValue?(this.board[this.playRow+1][this.playCol].tileValue=this.board[this.playRow][this.playCol].tileValue,this.board[this.playRow][this.playCol].tileValue=0,this.board[this.playRow+1][this.playCol].tileSprite.alpha=1,this.board[this.playRow+1][this.playCol].tileSprite.setTexture("".concat(this.board[this.playRow+1][this.playCol].tileValue)),this.board[this.playRow][this.playCol].tileSprite.alpha=0,this.playRow++):this.board[this.playRow+1][this.playCol].tileValue===this.board[this.playRow][this.playCol].tileValue?(this.mergeTiles(this.board[this.playRow+1][this.playCol],this.board[this.playRow][this.playCol]),this.playRow++):(this.landSound.play(),this.checkBoard(),this.addTile())):(this.landSound.play(),this.checkBoard(),this.addTile()))}},{key:"move",value:function(e){if(gameState.onGame&&this.canMove&&(this.playCol<SIZE-1||0<=this.playCol))switch(e){case"left":void 0!==this.board[this.playRow][this.playCol-1]&&0===this.board[this.playRow][this.playCol-1].tileValue&&(this.board[this.playRow][this.playCol-1].tileValue=this.board[this.playRow][this.playCol].tileValue,this.board[this.playRow][this.playCol].tileValue=0,this.board[this.playRow][this.playCol].tileSprite.alpha=0,this.board[this.playRow][this.playCol-1].tileSprite.alpha=1,this.board[this.playRow][this.playCol-1].tileSprite.setTexture("".concat(this.board[this.playRow][this.playCol-1].tileValue)),this.playCol--);break;case"right":void 0!==this.board[this.playRow][this.playCol+1]&&0===this.board[this.playRow][this.playCol+1].tileValue&&(this.board[this.playRow][this.playCol+1].tileValue=this.board[this.playRow][this.playCol].tileValue,this.board[this.playRow][this.playCol].tileValue=0,this.board[this.playRow][this.playCol].tileSprite.alpha=0,this.board[this.playRow][this.playCol+1].tileSprite.alpha=1,this.board[this.playRow][this.playCol+1].tileSprite.setTexture("".concat(this.board[this.playRow][this.playCol+1].tileValue)),this.playCol++)}}},{key:"checkBoard",value:function(){for(var e=0;e<SIZE;e++)for(var t=0;t<SIZE;t++)if(0!==this.board[e][t].tileValue&&(e!==this.playRow||t!==this.playCol)){if(onMerge=!0,void 0!==this.board[e+1]&&this.board[e][t].tileValue===this.board[e+1][t].tileValue){this.mergeTiles(this.board[e+1][t],this.board[e][t]);break}if(void 0!==this.board[e][t-1]&&this.board[e][t].tileValue===this.board[e][t-1].tileValue){this.mergeTiles(this.board[e][t-1],this.board[e][t]);break}if(void 0!==this.board[e][t+1]&&this.board[e][t].tileValue===this.board[e][t+1].tileValue){this.mergeTiles(this.board[e][t+1],this.board[e][t]);break}void 0!==this.board[e+1]&&0===this.board[e+1][t].tileValue&&canMove&&(this.board[e+1][t].tileValue=this.board[e][t].tileValue,this.board[e+1][t].tileSprite.alpha=1,this.board[e+1][t].tileSprite.setTexture("".concat(this.board[e+1][t].tileValue)),this.board[e][t].tileValue=0,this.board[e][t].tileSprite.alpha=0,this.checkBoard())}onMerge=!1,this.checkGame()&&(this.mainTheme.stop(),this.scene.stop(),this.scene.start(gameOver))}},{key:"restoreField",value:function(){for(var e=0;e<SIZE;e++)for(var t=0;t<SIZE;t++){var i=this.add.sprite(this.tileDestination(t)+this.gameArea.x-this.gameArea.width/2+2*BLOCK_SPACE,this.tileDestination(e)-BLOCK_SIZE/2-2*BLOCK_SPACE,"0").setScale(.35);i.alpha=0,i.visible=0,this.board[e][t].tileSprite.x=i.x,this.board[e][t].tileSprite.y=i.y}}},{key:"mergeThree",value:function(t,i,a){var s,o,n,r,l,h,c=this;t.tileValue===i.tileValue&&i.tileValue===a.tileValue&&(this.canMove=!1,this.falling.paused=!0,s=i.tileSprite.x,o=i.tileSprite.y,n=t.tileSprite.x,r=t.tileSprite.y,l=a.tileSprite.x,h=a.tileSprite.y,this.animMerge=this.tweens.add({targets:[t.tileSprite,a.tileSprite],y:i.tileSprite.y,x:i.tileSprite.x,scale:2,duration:100,onComplete:function(e){i.tileSprite.x=s,i.tileSprite.y=o,t.tileSprite.x=n,t.tileSprite.y=r,a.tileSprite.x=l,a.tileSprite.y=h,i.tileValue=4*i.tileValue,t.tileValue=0,a.tileValue=0,gameState.score+=i.tileValue,c.checkBoard(),c.restoreField(),c.falling.paused=!1}}))}},{key:"mergeTiles",value:function(t,i){var a,s,o,n,r=this;t.tileValue===i.tileValue&&8192!==t.tileValue&&canMerge&&(this.canAdd=!1,this.canMove=!1,this.falling.paused=!0,canMerge=canMove=!1,a=i.tileSprite.x,s=i.tileSprite.y,o=t.tileSprite.x,n=t.tileSprite.y,this.mergeSound.play(),this.animMerge=this.tweens.add({targets:[i.tileSprite],y:t.tileSprite.y,x:t.tileSprite.x,duration:100,onComplete:function(e){i.tileSprite.x=a,i.tileSprite.y=s,t.tileSprite.x=o,t.tileSprite.y=n,t.tileValue+=i.tileValue,t.tileSprite.setTexture("".concat(t.tileValue)),i.tileValue=0,i.tileSprite.alpha=0,gameState.score+=t.tileValue,canMerge=canMove=!0,r.falling.paused=!1,r.checkBoard(),r.restoreField(),r.saveScore(),r.refreshScore(),r.canAdd=!0}}))}},{key:"checkGame",value:function(){for(var e=!1,t=[],i=SIZE-1;0<=i;i--){t[i]=[];for(var a=SIZE-1;0<=a;a--)t[i].push(this.board[a][i])}for(var s=SIZE-1;0<=s;s--){if(t[s].every(this.checkCol)){e=!0;break}e=!1}return e}},{key:"checkCol",value:function(e){return 0<e.tileValue}},{key:"update",value:function(){this.score.setText("".concat(gameState.score),{fontFamily:"RubikOne-Regular",fontSize:"100px",fontStyle:"bold",fill:"#442D68",align:"right"})}}]),t}(),gameScene=new GameScene,Pause=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"Pause"})}return _createClass(t,[{key:"create",value:function(){var t=this;posted=!1,gameState.onPause=!0,gameState.onGame=!1;try{var i={action:"gamePause",allGameSessionId:_startGame.allGameSessionId,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()};null!=(a=window)&&a.parent.postMessage(i,"*")}catch(e){var a={action:"gamePauseError",allGameSessionId:_startGame.allGameSessionId,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()};null!=(i=window)&&i.parent.postMessage(a,"*")}this.pauseBg=this.add.image(game.config.width/2,game.config.height/2,"menuBg").setOrigin(.5),this.pauseBg.setDisplaySize(game.config.width,game.config.height),this.pauseTitle=this.add.image(game.config.width/2,game.config.height/4,"pauseTitle").setOrigin(.5),this.selector=this.add.image(game.config.width/2,game.config.height/2+50,"button").setOrigin(.5),this.resumeBtn=this.add.image(game.config.width/2,game.config.height/2+50,"resumeEmpty").setOrigin(.5),this.exitBtn=this.add.image(game.config.width/2,this.resumeBtn.y+120,"exitSelected").setOrigin(.5,.6),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.exitGame()}),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5),this.contolInfo=this.add.image(game.config.width-260,80,"controlInfo"),this.score=this.add.text(game.config.width/2-150,game.config.height-100,"".concat(gameState.score),{fontFamily:"Rubik-Medium",fontStyle:"bold",fontSize:"64px",fill:"#2A185B"}).setOrigin(.5),this.scoreTitle=this.add.text(this.score.x,this.score.y-75,"Счет",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#2A185BB2"}).setOrigin(.5),this.loadScore()}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_2048")&&(this.heigScoreText=this.add.text(game.config.width/2+150,game.config.height-100,"".concat(JSON.parse(localStorage.getItem("heighScore_2048"))),{fontFamily:"Rubik-Medium",fontSize:64,fontStyle:"bold",color:"#2A185B",align:"center"}).setOrigin(.5),this.heigScoreTitle=this.add.text(this.heigScoreText.x,this.heigScoreText.y-75,"Рекорд",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#2A185BB2"}).setOrigin(.5),this.line=this.add.image(game.config.width/2,game.config.height-100,"line").setOrigin(.5))}},{key:"moveSelector",value:function(e){if(gameState.onPause)switch(e){case"up":this.selector.y=this.resumeBtn.y,this.resumeBtn.setTexture("resumeEmpty"),this.exitBtn.setTexture("exitSelected");break;case"down":this.selector.y=this.exitBtn.y,this.resumeBtn.setTexture("resumeSelected"),this.exitBtn.setTexture("exitEmpty")}}},{key:"gameToggle",value:function(){if(gameState.onPause)switch(this.selector.y){case this.resumeBtn.y:this.resumeGame();break;case this.exitBtn.y:this.exitGame()}}},{key:"resumeGame",value:function(){if(gameState.onPause){gameState.onPause=!1,gameState.onGame=!0;try{var t={action:"gameResume",allGameSessionId:_startGame.allGameSessionId,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()};null!=(i=window)&&i.parent.postMessage(t,"*")}catch(e){var i={action:"gameResumeError",allGameSessionId:_startGame.allGameSessionId,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()};null!=(t=indow)&&t.parent.postMessage(i,"*")}this.scene.stop("Pause"),this.scene.resume("gameScene")}}},{key:"exitGame",value:function(){var e,t,i;gameState.onPause&&!posted&&(t={action:"closeGameSession",allGameSessionId:sessionID,timeStamp:Date.now()},i={action:"gameOver",allGameSessionId:sessionID,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()},null!=(e=window)&&e.parent.postMessage(i,"*"),null!=(e=window)&&e.parent.postMessage(t,"*"),posted=!0)}},{key:"update",value:function(){}}]),t}(),pause=new Pause,GameOver=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"GameOver"})}return _createClass(t,[{key:"create",value:function(){var e,t=this,i=(posted=!1,{action:"gameOver",allGameSessionId:sessionID,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()});null!=(e=window)&&e.parent.postMessage(i,"*"),gameState.onGame=!1,gameState.isOver=!0,this.gameOverSound=this.sound.add("gameOver",{loop:!1,volume:.5}),this.gameOverSound.play(),this.gameOverBg=this.add.image(game.config.width/2,game.config.height/2,"menuBg").setOrigin(.5),this.gameOverBg.setDisplaySize(game.config.width,game.config.height),this.gameOverTitle=this.add.image(game.config.width/2,game.config.height/4,"gameOverTitle").setOrigin(.5),this.selector=this.add.image(game.config.width/2,game.config.height/2+50,"button").setOrigin(.5),this.restartBtn=this.add.image(game.config.width/2,game.config.height/2+50,"restartEmpty").setOrigin(.5),this.exitBtn=this.add.image(game.config.width/2,this.restartBtn.y+120,"exitSelected").setOrigin(.5,.6),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.exitGame()}),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5),this.contolInfo=this.add.image(game.config.width-260,80,"controlInfo"),this.score=this.add.text(game.config.width/2-150,game.config.height-100,"".concat(gameState.score),{fontFamily:"Rubik-Medium",fontStyle:"bold",fontSize:"64px",fill:"#2A185B"}).setOrigin(.5),this.scoreTitle=this.add.text(this.score.x,this.score.y-75,"Счет",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#2A185BB2"}).setOrigin(.5),this.loadScore()}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_2048")&&(this.heigScoreText=this.add.text(game.config.width/2+150,game.config.height-100,"".concat(JSON.parse(localStorage.getItem("heighScore_2048"))),{fontFamily:"Rubik-Medium",fontSize:64,fontStyle:"bold",color:"#2A185B",align:"center"}).setOrigin(.5),this.heigScoreTitle=this.add.text(this.heigScoreText.x,this.heigScoreText.y-75,"Рекорд",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#2A185BB2"}).setOrigin(.5),this.line=this.add.image(game.config.width/2,game.config.height-100,"line").setOrigin(.5))}},{key:"moveSelector",value:function(e){if(gameState.isOver)switch(e){case"up":this.selector.y=this.restartBtn.y,this.restartBtn.setTexture("restartEmpty"),this.exitBtn.setTexture("exitSelected");break;case"down":this.selector.y=this.exitBtn.y,this.restartBtn.setTexture("restartSelected"),this.exitBtn.setTexture("exitEmpty")}}},{key:"gameToggle",value:function(){if(gameState.isOver)switch(this.selector.y){case this.restartBtn.y:this.restartGame();break;case this.exitBtn.y:this.exitGame()}}},{key:"restartGame",value:function(){if(gameState.isOver){gameState.isOver=!1,gameState.onGame=!0,gameState.score=0,canAdd=!(canMerge=!1),ocupated=[];try{_startGame.gameSessionId=generateUUID(),_startGame.allGameSessionId=sessionID,null!=(i=window)&&i.parent.postMessage(_startGame,"*")}catch(e){var t,i={action:"startGameError",allGameSessionId:sessionID,gameSessionId:gameId,timeStamp:Date.now()};null!=(t=window)&&t.parent.postMessage(i,"*")}this.scene.start("gameScene"),this.scene.stop()}}},{key:"exitGame",value:function(){var e,t;gameState.isOver&&!posted&&(t={action:"closeGameSession",allGameSessionId:sessionID,timeStamp:Date.now()},null!=(e=window)&&e.parent.postMessage(t,"*"),posted=!0)}},{key:"update",value:function(){}}]),t}(),gameOver=new GameOver,SIZE=7,BLOCK_SIZE=150,BLOCK_SPACE=10,canMerge=!1,canAdd=!0,ocupated=[],canMove=!0,game_version="0.2.6s",onMerge=!1,posted=!1,gameState={onMenu:!1,onGame:!1,onPause:!1,isOver:!1,score:0},gameId=generateUUID();window.onload=function(){var e={type:Phaser.CANVAS,width:1920,height:1080,parent:"phaser-example",scene:[preloader,mainMenu,gameScene,pause,gameOver],backgroundColor:"#442D68",scale:{mode:Phaser.Scale.FIT},audio:{disableWebAudio:!0}};sessionID=generateUUID();try{var t={action:"startGameSession",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(i=window)&&i.parent.postMessage(t,"*")}catch(e){var i={action:"startGameSessionError",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(t=window)&&t.parent.postMessage(i,"*")}game=new Phaser.Game(e)};