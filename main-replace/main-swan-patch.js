var global = GameGlobal;
var sharedCanvas = global.sharedCanvas = swan.getOpenDataContext().canvas;

sharedCanvas.__proto__.__proto__ = new window.HTMLElement('canvas');
sharedCanvas.addEventListener = window.addEventListener;
sharedCanvas.removeEventListener = window.removeEventListener;

setTimeout(function() {
    var systemInfo = swan.getSystemInfoSync();
    swan.getOpenDataContext().postMessage({
        cmd: "systemInfo",
        data: systemInfo
    });

    require("code.js");
}, 200);
