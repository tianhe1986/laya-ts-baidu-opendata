# laya-ts-baidu-opendata
百度小游戏主域+开放域处理

# 使用说明
1. 确保你的IDE版本，注意，是IDE，>= 1.8.0，因为要直接发布成百度小游戏，需要使用发布后的`swan-game-adapter.js`。我试了1.8.0和1.8.2的IDE，但不知道更低版本的还有没有这个文件。
2. 根据你使用的类库版本，用`laya-lib-replace`文件夹下相应版本中的`laya.bdmini.js`替换，主域和开放域项目都需要替换。如果没有相应的版本，或是已经作了其他的修改，请参考下文的修改方法自行修改。
3. 主域项目源码无需做其他特别的调整，直接发布既可。编译发布后，将`main-replace`下所有文件拷贝至百度小游戏目录下，替换原有文件。
4. 开放域项目需要对适配选项做下调整，将scaleMode设置为SCALE_NOSCALE。编译发布后，将`open-replace`下所有文件拷贝至百度小游戏开发数据域目录，替换原有文件。

主域和开放域都有demo，分别放在`main-project-demo`和`open-project-demo`下。编译出的完整可运行的小游戏demo放在`release-demo`下，供参考。

# 百度适配库laya.bdmini.js修改方法
1. 如果报错找不到`swan`，改为使用`BMiniAdapter.window.swan`调用。
2. 参考`laya.wxmini.js`，增加`onReciveData`函数，同时将漏了的对`ziyuFileData`和`ziyuFileTextureData`的处理补上。
3. 如果开放域未使用图集，都是用的单张图片，可以不用修改。否则，需要将`BMiniAdapter.postInfoToContext`中的`fileNativeUrl=textureUrl`改为`fileNativeUrl=URL.formatURL(textureUrl)`

# 修改思路
1. 开放域没法调用`swan.getSystemInfoSync`，那就，从主域获取了信息再传过来。
2. 没有sharedCanvas，那就，自己加上它。

# TODO
1. 开放域支持适配。这个我看了一下，是由于开放域获取到的window的宽高都是0，适配时底层计算宽高，就会有可能除以0，得到NaN，从而造成清除失败，之前的绘制一直保留着。
2. 给demo加上排行榜。