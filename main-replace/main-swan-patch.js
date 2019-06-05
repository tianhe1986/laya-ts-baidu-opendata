var global = GameGlobal;
var sharedCanvas = global.sharedCanvas = swan.getOpenDataContext().canvas;

sharedCanvas.__proto__.__proto__ = new window.HTMLElement('canvas');
global.sharedCanvas.addEventListener = window.addEventListener;
global.sharedCanvas.removeEventListener = window.removeEventListener;

