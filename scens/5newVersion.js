var game;
var SIZE = 7;
var BLOCK_SIZE = 150;
var BLOCK_SPACE = 10;
var canMerge = false;
var canAdd = true;
var ocupated = [];
var canMergeDown;
var canMergeLeft;
var canMergeRight;
var canMove = true;
var game_version = '0.2.4s';
var onMerge = false;

var gameState ={
  onMenu: false,
  onGame: false,
  onPause: false,
  isOver: false,
  score: 0
}

var sessionID
var gameId = generateUUID();

window.onload = function () {
  
  var config = {
    type: Phaser.CANVAS,
    width: 1920,
    height: 1080,
    parent: 'phaser-example',
    scene: [preloader,mainMenu,gameScene, pause, gameOver],
    backgroundColor: '#442D68',
    scale: {
      mode: Phaser.Scale.FIT
    },
    audio:{
      disableWebAudio: true,
      noAudio: false
    }
  }

  sessionID = generateUUID();
  try{
    var startGameSession = {
      action: 'startGameSession',
      allGameSessionId: sessionID,
      timeStamp: Date.now()
    }
    window?.parent.postMessage(startGameSession, '*');
  }
  
  catch(er){
    var startGameSessionError = {
      action: 'startGameSessionError',
      allGameSessionId: sessionID,
      timeStamp: Date.now()
    }
    window?.parent.postMessage(startGameSessionError, '*');
  }
  game = new Phaser.Game(config)
}