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
					//console.log(res.data);
					this.avatar.skin = res.data[0].avatarUrl;
					this.nickname.text = res.data[0].nickname;
				},
				fail: res => console.log(res)
			});
		}
	}
}