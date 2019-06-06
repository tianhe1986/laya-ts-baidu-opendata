var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var test = /** @class */ (function (_super) {
        __extends(test, _super);
        function test() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        test.prototype.init = function () {
            this.showButton.on(Laya.Event.CLICK, this, this.switchShow);
            this.dataButton.on(Laya.Event.CLICK, this, this.postData);
            if (Laya.Browser.window.navigator.userAgent.indexOf('SwanGame') >= 0) {
                var texture = new Laya.Texture(Laya.Browser.window.sharedCanvas);
                texture.bitmap.alwaysChange = true; //小程序使用，非常费，这个参数可以根据自己的需求适当调整，如果内容不变可以不用设置成true
                this.openDataCanvas.graphics.drawTexture(texture, 0, 0, texture.width, texture.height);
            }
        };
        test.prototype.switchShow = function () {
            this.openDataCanvas.visible = !this.openDataCanvas.visible;
        };
        test.prototype.postData = function () {
            var swan = Laya.Browser.window.swan;
            swan.getOpenDataContext().postMessage({
                cmd: "changedata",
                data: this.inputText.text
            });
        };
        return test;
    }(ui.testUI));
    view.test = test;
})(view || (view = {}));
//# sourceMappingURL=test.js.map