var global = GameGlobal;
var sharedCanvas = global.sharedCanvas = swan.getSharedCanvas();

sharedCanvas.__proto__.__proto__ = new window.HTMLElement('canvas');
sharedCanvas.addEventListener = window.addEventListener;
sharedCanvas.removeEventListener = window.removeEventListener;

swan.onMessage(res => {
    if (res.cmd == "systemInfo") {
        if (swan.getSystemInfoSync == undefined) {
            swan.getSystemInfoSync = () => {return res.data};
        }
        require("code.js");
    }
});
