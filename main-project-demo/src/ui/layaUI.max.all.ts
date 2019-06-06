
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {
		public openDataCanvas:Laya.Sprite;
		public showButton:Laya.Button;
		public dataButton:Laya.Button;
		public inputText:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Sprite","props":{"y":314,"x":129,"width":400,"var":"openDataCanvas","height":400}},{"type":"Button","props":{"y":117,"x":52,"width":318,"var":"showButton","skin":"comp/button.png","labelSize":32,"labelFont":"Microsoft YaHei","label":"点我展示/隐藏开放域","height":91}},{"type":"Button","props":{"y":188,"x":465,"width":287,"var":"dataButton","skin":"comp/button.png","labelSize":32,"labelFont":"Microsoft YaHei","label":"点我传递数据","height":74}},{"type":"TextInput","props":{"y":110,"x":481,"width":236,"var":"inputText","skin":"comp/textinput.png","height":59,"fontSize":32,"font":"Microsoft YaHei"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.testUI.uiView);

        }

    }
}
