
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {
		public showText:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":400,"height":400},"child":[{"type":"Image","props":{"y":117,"x":35,"skin":"comp/image.png"}},{"type":"Text","props":{"y":54,"x":94,"var":"showText","text":"gogogo","fontSize":24,"color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.testUI.uiView);

        }

    }
}
