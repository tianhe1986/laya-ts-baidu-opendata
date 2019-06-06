/**Created by the LayaAirIDE*/
module view{
	export class test extends ui.testUI{
		constructor(){
			super();

			this.initOpenData();
		}

		public initOpenData():void
		{
			let swan = Laya.Browser.window.swan;
			swan.getUserInfo({
				swanIdList: ['selfSwanId'],
				success: (res) => {
					console.log(res.data);
				},
				fail: res => console.log(res)
			});
		}
	}
}