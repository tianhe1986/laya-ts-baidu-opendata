
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

//初始化百度小游戏
(Laya as any).BMiniAdapter.init(true, false);
//程序入口
Laya.init(1334, 750);
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
//激活资源版本控制
let swan = Laya.Browser.window.swan;
Laya.timer.once(1000, this, () => {
	//设置共享画布大小
	let sharedCanvas = swan.getOpenDataContext().canvas;
	sharedCanvas.width = 400;
	sharedCanvas.height = 400;
	//主域往子域透传消息
	swan.getOpenDataContext().postMessage({type:"resizeShared",url:"",data:{matrix:Laya.stage._canvasTransform},isLoad:false});
	Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
});

function beginLoad(){
	Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}

function onLoaded(): void {
	//实例UI界面
	(Laya as any).BMiniAdapter.sendAtlasToOpenDataContext("res/atlas/comp.atlas");
	var testUI: view.test = new view.test();
	Laya.stage.addChild(testUI);
	swan.getOpenDataContext().postMessage({
		cmd: "load",
	});
}