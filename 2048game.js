"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0===i)return("string"===t?String:Number)(e);i=i.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(i){var a=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(i);return _possibleConstructorReturn(this,a?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var game,canMergeDown,canMergeLeft,canMergeRight,Preloader=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"Preloader"})}return _createClass(t,[{key:"preload",value:function(){this.loadText=this.add.text(game.config.width/2,game.config.height/2,"ЗАГРУЗКА...",{fontFamily:"RubikOne-Regular",fontSize:64,color:"#e3f2ed"}),this.loadText1=this.add.text(game.config.width/2,game.config.height/2,"Loading ...",{fontFamily:"Rubik-Regular",fontSize:64,color:"#e3f2ed"}).alpha=0,this.loadText2=this.add.text(game.config.width/2,game.config.height/2,"Loading ...",{fontFamily:"Rubik-Medium",fontSize:64,color:"#e3f2ed"}).alpha=0,this.loadText3=this.add.text(game.config.width/2,game.config.height/2,"Loading ...",{fontFamily:"Rubik-SemiBold",fontSize:64,color:"#e3f2ed"}).alpha=0;for(var e=2;e<=8192;e*=2)this.load.image("".concat(e),"assets/".concat(e,".png"));this.load.image("info","assets/info.png"),this.load.image("mainBg","assets/mainBg.png"),this.load.image("gameAreaBg","assets/gameAreaBg.png"),this.load.image("button","assets/button.png"),this.load.image("startEmpty","assets/startEmpty.png"),this.load.image("startSelected","assets/startSelected.png"),this.load.image("resumeEmpty","assets/resumeEmpty.png"),this.load.image("resumeSelected","assets/resumeSelected.png"),this.load.image("exitEmpty","assets/exitEmpty.png"),this.load.image("exitSelected","assets/exitSelected.png"),this.load.image("restartEmpty","assets/restartEmpty.png"),this.load.image("restartSelected","assets/restartSelected.png"),this.load.image("menuBg","assets/menuBg.png"),this.load.image("pauseTitle","assets/pause.png"),this.load.image("gameOverTitle","assets/gameOver.png"),this.load.audio("mainTheme","assets/sounds/mainTheme.mp3"),this.load.audio("merge","assets/sounds/merge.mp3"),this.load.audio("land","assets/sounds/land.mp3"),this.load.audio("movefast","assets/sounds/moveFast.mp3"),this.load.audio("moveSides","assets/sounds/moveSides.mp3"),this.load.audio("gameOver","assets/sounds/gameOver.mp3")}},{key:"create",value:function(){this.scene.start("MainMenu")}}]),t}(),preloader=new Preloader,gameState={isMenu:!1,onGame:!1,onPause:!1,OnGameOver:!1,score:0},MainMenu=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"MainMenu"})}return _createClass(t,[{key:"create",value:function(){for(var t=this,e=(gameState.isMenu=!0,this.mainBg=this.add.image(game.config.width/2,game.config.height/2,"mainBg").setOrigin(.5),this.mainBg.setDisplaySize(game.config.width,game.config.height),this.selector=this.add.image(game.config.width/2,game.config.height/2+100,"button").setOrigin(.5),this.startBtn=this.add.image(game.config.width/2,game.config.height/2+100,"startEmpty").setOrigin(.5),this.exitBtn=this.add.image(game.config.width/2,this.startBtn.y+120,"exitSelected").setOrigin(.5,.6),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.exitGame()}),document.getElementsByTagName("canvas")[0],[]),i=[],a=this.startBtn.x-this.startBtn.width/2;a<this.startBtn.x+this.startBtn.width/2;a++)e.push(a),console.log(a);for(var s=this.startBtn.y-this.startBtn.height/2;s<this.startBtn.y+this.startBtn.height/2;s++)i.push(s);this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}},{key:"checkPosX",value:function(t,e){console.log("Координаты клика:".concat(t.offsetX,", ").concat(t.offsetY));var i=!1;return e.forEach(function(e){e===t.offsetX&&(i=!0)}),i}},{key:"checkPosY",value:function(t,e){var i=!1;return e.forEach(function(e){Math.floor(e)===t.offsetY&&(i=!0)}),i}},{key:"handleClick",value:function(e,t){e&&t&&(this.scene.stop(),this.scene.start("gameScene"))}},{key:"moveSelector",value:function(e){if(gameState.isMenu)switch(e){case"up":this.selector.y=this.startBtn.y,this.startBtn.setTexture("startEmpty"),this.exitBtn.setTexture("exitSelected");break;case"down":this.selector.y=this.exitBtn.y,this.startBtn.setTexture("startSelected"),this.exitBtn.setTexture("exitEmpty")}}},{key:"startGame",value:function(){gameState.isMenu&&(gameState.isMenu=!1,this.scene.stop("MainMenu"),this.scene.start("gameScene"))}},{key:"exitGame",value:function(){var e;gameState.isMenu&&null!=(e=window)&&e.postMessage("GameExit","*")}},{key:"gameToggle",value:function(){if(gameState.isMenu)switch(this.selector.y){case this.startBtn.y:this.startGame();break;case this.exitBtn.y:this.exitGame()}}},{key:"update",value:function(){}}]),t}(),mainMenu=new MainMenu,GameScene=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"gameScene"})}return _createClass(t,[{key:"create",value:function(){var t=this;gameState.isMenu=!1,gameState.onGame=!0,this.moveSidesSound=this.sound.add("moveSides",{loop:!1,volume:.5}),this.moveFastSound=this.sound.add("movefast",{loop:!1,volume:.5}),this.landSound=this.sound.add("land",{loop:!1,volume:.5}),this.mergeSound=this.sound.add("merge",{loop:!1,volume:.5}),this.mainTheme=this.sound.add("mainTheme",{loop:!0,volume:.1}),this.mainTheme.play(),this.gameArea=this.add.image(1260,game.config.height/2-20,"gameAreaBg").setOrigin(.5),this.info=this.add.image(55,56,"info").setOrigin(0),this.board=[];for(var e=0;e<SIZE;e++){this.board[e]=[];for(var i=0;i<SIZE;i++){var a=this.add.sprite(this.tileDestination(i)+this.gameArea.x-this.gameArea.width/2+2*BLOCK_SPACE,this.tileDestination(e)-BLOCK_SIZE/2-2*BLOCK_SPACE,"0").setScale(.75);a.alpha=0,this.board[e][i]={tileValue:0,tileSprite:a}}}this.predictValue=2,this.predict=this.add.image(550,200,"".concat(this.predictValue)).setOrigin(.5),this.predict.setDisplaySize(104,104),this.predictTitle=this.add.text(this.predict.x-45,this.predict.y-100,"ДАЛЬШЕ",{fill:"#B39AEA",fontFamily:"Rubik-SemiBold",fontSize:44}).setOrigin(.5),this.scoreText=this.add.text(this.predictTitle.x+45,game.config.height-500,"СЧЕТ",{fontFamily:"Rubik-SemiBold",fontSize:"44px",fontStyle:"bold",color:"#B39AEA"}).setOrigin(.5),this.score=this.add.text(this.scoreText.x+60,this.scoreText.y+80,gameState.score,{fontFamily:"RubikOne-Regular",fontSize:"100px",fontStyle:"bold",fill:"#442D68",align:"right"}).setOrigin(1,.5),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||!gameState.onGame||(t.scene.launch("Pause"),t.scene.pause())}),this.addTile(),this.falling=this.time.addEvent({delay:500,callback:this.fall,callbackScope:this,loop:!0}),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}},{key:"tileDestination",value:function(e){return e*(BLOCK_SIZE+BLOCK_SPACE)+BLOCK_SIZE/2+BLOCK_SPACE}},{key:"addTile",value:function(){for(var e=[],t=0;t<SIZE;t++)0===this.board[0][t].tileValue&&e.push(t);var i=Phaser.Math.RND.pick(e);this.board[0][i].tileValue=this.predictValue,this.board[0][i].tileSprite.setTexture("".concat(this.board[0][i].tileValue)),this.board[0][i].tileSprite.alpha=1,this.playRow=0,this.playCol=i,this.udatePredict()}},{key:"udatePredict",value:function(){this.predictValue=Phaser.Math.RND.pick([2,4,8,16,32]),this.predict.setTexture("".concat(this.predictValue))}},{key:"fall",value:function(){this.playRow<SIZE-1?void 0!==this.board[this.playRow+1]&&(0===this.board[this.playRow+1][this.playCol].tileValue?(this.board[this.playRow+1][this.playCol].tileValue=this.board[this.playRow][this.playCol].tileValue,this.board[this.playRow][this.playCol].tileValue=0,this.board[this.playRow+1][this.playCol].tileSprite.alpha=1,this.board[this.playRow+1][this.playCol].tileSprite.setTexture("".concat(this.board[this.playRow+1][this.playCol].tileValue)),this.board[this.playRow][this.playCol].tileSprite.alpha=0,this.playRow++):this.board[this.playRow+1][this.playCol].tileValue===this.board[this.playRow][this.playCol].tileValue?(this.mergeTiles(this.board[this.playRow+1][this.playCol],this.board[this.playRow][this.playCol]),this.playRow++):(this.landSound.play(),this.checkBoard(),this.addTile())):(this.landSound.play(),this.checkBoard(),this.addTile())}},{key:"move",value:function(e){if(gameState.onGame&&(this.playCol<SIZE-1||0<=this.playCol))switch(e){case"left":void 0!==this.board[this.playRow][this.playCol-1]&&0===this.board[this.playRow][this.playCol-1].tileValue&&(this.board[this.playRow][this.playCol-1].tileValue=this.board[this.playRow][this.playCol].tileValue,this.board[this.playRow][this.playCol].tileValue=0,this.board[this.playRow][this.playCol].tileSprite.alpha=0,this.board[this.playRow][this.playCol-1].tileSprite.alpha=1,this.board[this.playRow][this.playCol-1].tileSprite.setTexture("".concat(this.board[this.playRow][this.playCol-1].tileValue)),this.playCol--);break;case"right":void 0!==this.board[this.playRow][this.playCol+1]&&0===this.board[this.playRow][this.playCol+1].tileValue&&(this.board[this.playRow][this.playCol+1].tileValue=this.board[this.playRow][this.playCol].tileValue,this.board[this.playRow][this.playCol].tileValue=0,this.board[this.playRow][this.playCol].tileSprite.alpha=0,this.board[this.playRow][this.playCol+1].tileSprite.alpha=1,this.board[this.playRow][this.playCol+1].tileSprite.setTexture("".concat(this.board[this.playRow][this.playCol+1].tileValue)),this.playCol++)}}},{key:"checkBoard",value:function(){for(var e=[],t=0;t<SIZE;t++)for(var i=0;i<SIZE;i++)if(0===this.board[t][i].tileValue||t===this.playRow&&i===this.playCol)0<this.board[2][i].tileValue&&(e.push(this.board[1][i]),e.length===this.board[2].length)&&(this.mainTheme.stop(),this.scene.stop(),this.scene.start(gameOver));else{if(void 0!==this.board[t+1]&&this.board[t][i].tileValue===this.board[t+1][i].tileValue){this.mergeTiles(this.board[t+1][i],this.board[t][i]);break}if(void 0!==this.board[t][i-1]&&this.board[t][i].tileValue===this.board[t][i-1].tileValue){this.mergeTiles(this.board[t][i-1],this.board[t][i]);break}if(void 0!==this.board[t][i+1]&&this.board[t][i].tileValue===this.board[t][i+1].tileValue){this.mergeTiles(this.board[t][i+1],this.board[t][i]);break}void 0!==this.board[t+1]&&0===this.board[t+1][i].tileValue&&canMove&&(this.board[t+1][i].tileValue=this.board[t][i].tileValue,this.board[t+1][i].tileSprite.alpha=1,this.board[t+1][i].tileSprite.setTexture("".concat(this.board[t+1][i].tileValue)),this.board[t][i].tileValue=0,this.board[t][i].tileSprite.alpha=0,this.checkBoard())}}},{key:"restoreField",value:function(){for(var e=0;e<SIZE;e++)for(var t=0;t<SIZE;t++){var i=this.add.sprite(this.tileDestination(t)+this.gameArea.x-this.gameArea.width/2+2*BLOCK_SPACE,this.tileDestination(e)-BLOCK_SIZE/2-2*BLOCK_SPACE,"0").setScale(.35);i.alpha=0,i.visible=0,this.board[e][t].tileSprite.x=i.x,this.board[e][t].tileSprite.y=i.y}}},{key:"mergeThree",value:function(t,i,a){var s,o,r,n,l,h,c=this;t.tileValue===i.tileValue&&i.tileValue===a.tileValue&&(this.falling.paused=!0,s=i.tileSprite.x,o=i.tileSprite.y,r=t.tileSprite.x,n=t.tileSprite.y,l=a.tileSprite.x,h=a.tileSprite.y,this.animMerge=this.tweens.add({targets:[t.tileSprite,a.tileSprite],y:i.tileSprite.y,x:i.tileSprite.x,scale:2,duration:100,onComplete:function(e){i.tileSprite.x=s,i.tileSprite.y=o,t.tileSprite.x=r,t.tileSprite.y=n,a.tileSprite.x=l,a.tileSprite.y=h,i.tileValue=4*i.tileValue,t.tileValue=0,a.tileValue=0,gameState.score+=i.tileValue,c.checkBoard(),c.restoreField(),c.falling.paused=!1}}))}},{key:"mergeTiles",value:function(t,i){var a,s,o,r,n=this;t.tileValue===i.tileValue&&8192!==t.tileValue&&(this.falling.paused=!0,canMove=!1,a=i.tileSprite.x,s=i.tileSprite.y,o=t.tileSprite.x,r=t.tileSprite.y,this.mergeSound.play(),this.animMerge=this.tweens.add({targets:[i.tileSprite],y:t.tileSprite.y,x:t.tileSprite.x,duration:100,onComplete:function(e){i.tileSprite.x=a,i.tileSprite.y=s,t.tileSprite.x=o,t.tileSprite.y=r,t.tileValue*=2,t.tileSprite.setTexture("".concat(t.tileValue)),i.tileValue=0,i.tileSprite.alpha=0,gameState.score+=t.tileValue,canMove=!0,n.checkBoard(),n.restoreField(),n.falling.paused=!1}}))}},{key:"update",value:function(){this.score.setText("".concat(gameState.score),{fontFamily:"RubikOne-Regular",fontSize:"100px",fontStyle:"bold",fill:"#442D68",align:"right"});for(var e=0;e<SIZE;e++)for(var t=0;t<SIZE;t++)8192<=this.board[e][t].tileValue&&(this.board[e][t].tileValue=8192,this.board[e][t].tileSprite.setTexture("".concat(this.board[e][t].tileValue)))}}]),t}(),gameScene=new GameScene,Pause=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"Pause"})}return _createClass(t,[{key:"create",value:function(){var t=this;gameState.onPause=!0,gameState.onGame=!1,this.pauseBg=this.add.image(game.config.width/2,game.config.height/2,"menuBg").setOrigin(.5),this.pauseBg.setDisplaySize(game.config.width,game.config.height),this.pauseTitle=this.add.image(game.config.width/2,game.config.height/4,"pauseTitle").setOrigin(.5),this.selector=this.add.image(game.config.width/2,game.config.height/2+50,"button").setOrigin(.5),this.resumeBtn=this.add.image(game.config.width/2,game.config.height/2+50,"resumeEmpty").setOrigin(.5),this.exitBtn=this.add.image(game.config.width/2,this.resumeBtn.y+120,"exitSelected").setOrigin(.5,.6),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.exitGame()}),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}},{key:"moveSelector",value:function(e){if(gameState.onPause)switch(e){case"up":this.selector.y=this.resumeBtn.y,this.resumeBtn.setTexture("resumeEmpty"),this.exitBtn.setTexture("exitSelected");break;case"down":this.selector.y=this.exitBtn.y,this.resumeBtn.setTexture("resumeSelected"),this.exitBtn.setTexture("exitEmpty")}}},{key:"gameToggle",value:function(){if(gameState.onPause)switch(this.selector.y){case this.resumeBtn.y:this.resumeGame();break;case this.exitBtn.y:this.exitGame()}}},{key:"resumeGame",value:function(){gameState.onPause&&(gameState.onPause=!1,gameState.onGame=!0,this.scene.stop("Pause"),this.scene.resume("gameScene"))}},{key:"exitGame",value:function(){var e;gameState.onPause&&null!=(e=window)&&e.postMessage("GameExit","*")}},{key:"update",value:function(){}}]),t}(),pause=new Pause,GameOver=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"GameOver"})}return _createClass(t,[{key:"create",value:function(){var t=this;gameState.onGame=!1,gameState.OnGameOver=!0,this.gameOverSound=this.sound.add("gameOver",{loop:!1,volume:.5}),this.gameOverSound.play(),this.gameOverBg=this.add.image(game.config.width/2,game.config.height/2,"menuBg").setOrigin(.5),this.gameOverBg.setDisplaySize(game.config.width,game.config.height),this.gameOverTitle=this.add.image(game.config.width/2,game.config.height/4,"gameOverTitle").setOrigin(.5),this.selector=this.add.image(game.config.width/2,game.config.height/2+50,"button").setOrigin(.5),this.restartBtn=this.add.image(game.config.width/2,game.config.height/2+50,"restartEmpty").setOrigin(.5),this.exitBtn=this.add.image(game.config.width/2,this.restartBtn.y+120,"exitSelected").setOrigin(.5,.6),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.exitGame()}),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}},{key:"moveSelector",value:function(e){if(gameState.OnGameOver)switch(e){case"up":this.selector.y=this.restartBtn.y,this.restartBtn.setTexture("restartEmpty"),this.exitBtn.setTexture("exitSelected");break;case"down":this.selector.y=this.exitBtn.y,this.restartBtn.setTexture("restartSelected"),this.exitBtn.setTexture("exitEmpty")}}},{key:"gameToggle",value:function(){if(gameState.OnGameOver)switch(this.selector.y){case this.restartBtn.y:this.restartGame();break;case this.exitBtn.y:this.exitGame()}}},{key:"restartGame",value:function(){gameState.OnGameOver&&(gameState.OnGameOver=!1,gameState.onGame=!0,gameState.score=0,canAdd=!(canMerge=!1),ocupated=[],this.scene.start("gameScene"),this.scene.stop())}},{key:"exitGame",value:function(){var e;gameState.onPause&&null!=(e=window)&&e.postMessage("GameExit","*")}},{key:"update",value:function(){}}]),t}(),gameOver=new GameOver,SIZE=7,BLOCK_SIZE=150,BLOCK_SPACE=10,canMerge=!1,canAdd=!0,ocupated=[],canMove=!0,game_version="0.1.0";window.onload=function(){var e={type:Phaser.CANVAS,width:1920,height:1080,parent:"phaser-example",scene:[preloader,mainMenu,gameScene,pause,gameOver],backgroundColor:"#F5EAF8",scale:{mode:Phaser.Scale.FIT}};game=new Phaser.Game(e)};