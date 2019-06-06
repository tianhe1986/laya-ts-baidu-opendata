/**Created by the LayaAirIDE*/
module view{
	export class test extends ui.testUI{
		constructor(){
			super();
			this.init();
		}

		public init():void
		{
			this.showButton.on(Laya.Event.CLICK, this, this.switchShow);
			this.dataButton.on(Laya.Event.CLICK, this, this.postData);


			if (Laya.Browser.window.navigator.userAgent.indexOf('SwanGame') >= 0) {
				let texture:Laya.Texture = new Laya.Texture(Laya.Browser.window.sharedCanvas);
				texture.bitmap.alwaysChange = true;//小程序使用，非常费，这个参数可以根据自己的需求适当调整，如果内容不变可以不用设置成true
				this.openDataCanvas.graphics.drawTexture(texture, 0, 0, texture.width, texture.height);
			}
		}

		protected switchShow():void
		{
			this.openDataCanvas.visible = ! this.openDataCanvas.visible;
		}

		protected postData():void
		{
			let swan = Laya.Browser.window.swan;
			swan.getOpenDataContext().postMessage({
				cmd: "changedata",
				data: this.inputText.text
			});
		}
	}
}