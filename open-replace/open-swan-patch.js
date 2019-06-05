var global = GameGlobal;
var sharedCanvas = global.sharedCanvas = swan.getSharedCanvas();

sharedCanvas.addEventListener = window.addEventListener;
sharedCanvas.removeEventListener = window.removeEventListener;

