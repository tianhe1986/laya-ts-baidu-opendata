var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var Main = /** @class */ (function () {
    function Main() {
        this.testUI = null;
    }
    Main.prototype.init = function () {
        var _this = this;
        //初始化微信小游戏
        Laya.BMiniAdapter.init(true, true);
        //程序入口
        Laya.init(400, 400);
        //现在子域一定不要设置适配
        //Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        if (Laya.Browser.window.navigator.userAgent.indexOf('SwanGame') >= 0) {
            var swan = Laya.Browser.window.swan;
            swan.onMessage(function (data) {
                var MiniFileMgr = laya.bd.mini.MiniFileMgr;
                //console.log(data);
                if (data.cmd != undefined) {
                    if (data.cmd == "load") {
                        _this.beginLoad();
                    }
                    else if (data.cmd == "changedata") {
                        _this.testUI.showText.text = data.data;
                    }
                }
                else {
                    if (data['type'] == "resizeShared") {
                        var tempMatrix = data.data.matrix;
                        var matrix = new Laya.Matrix();
                        matrix.a = tempMatrix.a;
                        matrix.b = tempMatrix.b;
                        matrix.c = tempMatrix.c;
                        matrix.d = tempMatrix.d;
                        Laya.stage._canvasTransform = matrix; //重新设置矩阵
                    }
                }
            });
        }
    };
    Main.prototype.beginLoad = function () {
        Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, this.onLoaded));
    };
    Main.prototype.onLoaded = function () {
        //实例UI界面
        this.testUI = new view.test();
        Laya.stage.addChild(this.testUI);
    };
    return Main;
}());
var main = new Main();
main.init();
//# sourceMappingURL=LayaUISample.js.map