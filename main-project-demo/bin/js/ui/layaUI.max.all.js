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
            _super.prototype.createChildren.call(this);
            this.createView(ui.testUI.uiView);
        };
        testUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Sprite", "props": { "y": 314, "x": 129, "width": 400, "var": "openDataCanvas", "height": 400 } }, { "type": "Button", "props": { "y": 189, "x": 263, "width": 137, "var": "showButton", "skin": "comp/button.png", "labelSize": 16, "labelFont": "Microsoft YaHei", "label": "点我展示开放域", "height": 44 } }, { "type": "Button", "props": { "y": 188, "x": 465, "width": 137, "var": "dataButton", "skin": "comp/button.png", "labelSize": 16, "labelFont": "Microsoft YaHei", "label": "点我传递数据", "height": 44 } }, { "type": "TextInput", "props": { "y": 134, "x": 481, "width": 137, "var": "inputText", "skin": "comp/textinput.png", "height": 35, "fontSize": 18, "font": "Microsoft YaHei" } }] };
        return testUI;
    }(View));
    ui.testUI = testUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map