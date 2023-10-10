window.addEventListener('load', function() {

    SpatialNavigation.init();
    SpatialNavigation.add({
      selector: '.focusable'
    });

    if (typeof AndroidBridge !== 'undefined') {
      initializeAndroidTVInput();
  }
   
    // All valid events.
    var validEvents = [
        'sn:willmove',
        'sn:enter-down',
        'sn:enter-up',
      ];

      var eventHandler = function(evt) {
        if(evt.type == 'sn:enter-down'){
          mainMenu.gameToggle()
          pause.gameToggle()
          gameOver.gameToggle()
        }
        
        switch(evt.detail?.direction){
          case 'up':
              mainMenu.moveSelector('up')
              pause.moveSelector('up')
              gameOver.moveSelector('up')
            break;
            case 'down':
              mainMenu.moveSelector('down')
              
              pause.moveSelector('down')
              gameOver.moveSelector('down')

              gameScene.fall()
            break;
            case 'left':
              gameScene.move('left')
            break;
            case 'right':
              gameScene.move('right')
            break;
        }
       
      };

      validEvents.forEach(function(type) {
        window.addEventListener(type, eventHandler);
      });
    
    SpatialNavigation.makeFocusable();
    SpatialNavigation.focus();
  });

  function initializeAndroidTVInput(){
AndroidBridge.onKeyEvent(function(event) {

  if (event.isTVKeyEvent) {
      var keyCode = event.keyCode;
      switch (keyCode) {
          case AndroidBridge.KEYCODE_DPAD_CENTER:

              break;
          case AndroidBridge.KEYCODE_DPAD_UP:

              break;
          case AndroidBridge.KEYCODE_DPAD_DOWN:
              
              break;
          case AndroidBridge.KEYCODE_DPAD_LEFT:
              
              break;
          case AndroidBridge.KEYCODE_DPAD_RIGHT:
              
              break;
          case AndroidBridge.KEYCODE_BACK:
              
              break;
          default:
              break;
      }
  }
});
  }