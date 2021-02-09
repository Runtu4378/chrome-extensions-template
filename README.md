# chrome-extensions-template

chrome extensions 脚手架，使用 webpack + typescript

## 特性

- webpack 支持 typescript 和 css
- 通过脚本自动将 `package.json` 中的 name、description、version 字段同步到 `extensions/manifest.json` 中，方便代码维护

## 指令

- **manifest:sync**: 将 packageJson 中的模块名、描述、版本号等信息同步到 `extensions/manifest.json` 中
- **dev**: 启动本地服务器
- **build**: 打包并对模块进行打包压缩，在根目录输出扩展压缩包

## 本地开发步骤

1. 在 chrome 中输入 `chrome://extensions/` 进入扩展管理界面
2. 切换扩展管理界面右上角的“**开发者模式**”开关为开启状态
3. 选择扩展管理界面左上角的“**加载已解压的扩展程序**”，选取 **extensions** 文件夹，即可加载此扩展
