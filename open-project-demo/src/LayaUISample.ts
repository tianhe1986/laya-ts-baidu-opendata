
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

class Main
{
	private testUI: view.test = null;

	public init():void
	{
		//初始化微信小游戏
		(Laya as any).BMiniAdapter.init(true, true);
		//程序入口
		Laya.init(400, 400);
		//现在子域一定不要设置适配
		//Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
		Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
		//Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
		//Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
		if (Laya.Browser.window.navigator.userAgent.indexOf('SwanGame') >= 0) {
			let swan = Laya.Browser.window.swan;
			swan.onMessage(data => {
				//console.log(data);
				if (data.cmd != undefined) {
					if (data.cmd == "load") {
						this.beginLoad();
					} else if (data.cmd == "changedata") {
						this.testUI.showText.text = data.data;
					}
				} else {
					if (data['type'] == "resizeShared") {
						let tempMatrix = data.data.matrix;
						let matrix:Laya.Matrix = new Laya.Matrix();
						matrix.a = tempMatrix.a;
						matrix.b = tempMatrix.b;
						matrix.c = tempMatrix.c;
						matrix.d = tempMatrix.d;
						Laya.stage._canvasTransform = matrix;//重新设置矩阵
					}
				}
			});
		}
	}

	private beginLoad(){
		Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, this.onLoaded));
	}

	private onLoaded(): void {
		//实例UI界面
		this.testUI = new view.test();
		Laya.stage.addChild(this.testUI);
	}
}

let main  = new Main();
main.init();