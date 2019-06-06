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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var testUI = /** @class */ (function (_super) {
        __extends(testUI, _super);
        function testUI() {
            return _super.call(this) || this;
        }
        testUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.testUI.uiView);
        };
        testUI.uiView = { "type": "View", "props": { "width": 400, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 117, "x": 35, "skin": "comp/image.png" } }, { "type": "Text", "props": { "y": 54, "x": 94, "var": "showText", "text": "gogogo", "fontSize": 24, "color": "#ffffff" } }] };
        return testUI;
    }(View));
    ui.testUI = testUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map