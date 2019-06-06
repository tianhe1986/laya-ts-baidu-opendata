
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {
		public openDataCanvas:Laya.Sprite;
		public showButton:Laya.Button;
		public dataButton:Laya.Button;
		public inputText:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Sprite","props":{"y":314,"x":129,"width":400,"var":"openDataCanvas","height":400}},{"type":"Button","props":{"y":189,"x":263,"width":137,"var":"showButton","skin":"comp/button.png","labelSize":16,"labelFont":"Microsoft YaHei","label":"点我展示开放域","height":44}},{"type":"Button","props":{"y":188,"x":465,"width":137,"var":"dataButton","skin":"comp/button.png","labelSize":16,"labelFont":"Microsoft YaHei","label":"点我传递数据","height":44}},{"type":"TextInput","props":{"y":134,"x":481,"width":137,"var":"inputText","skin":"comp/textinput.png","height":35,"fontSize":18,"font":"Microsoft YaHei"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.testUI.uiView);

        }

    }
}
