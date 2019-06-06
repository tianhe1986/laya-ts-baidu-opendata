
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {
		public showText:laya.display.Text;
		public avatar:Laya.Image;
		public nickname:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":400,"height":400},"child":[{"type":"Image","props":{"y":117,"x":35,"skin":"comp/image.png"}},{"type":"Text","props":{"y":30,"x":21,"var":"showText","text":"gogogo","fontSize":50,"color":"#ffffff"}},{"type":"Image","props":{"y":106,"x":240,"width":100,"var":"avatar","height":100}},{"type":"Text","props":{"y":255,"x":206,"var":"nickname","fontSize":50,"color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.testUI.uiView);

        }

    }
}
