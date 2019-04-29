# wxapp-ui

modo 小黑屋 の 小程序组件库

## tutorial

安装相关库

```bash
npm install -g lerna
git clone git@github.com:modojs/wxapp-ui.git
```

初次安装项目依赖

```bash
lerna bootstrap --hoist
```

添加新组件

```bash
# 拉一条新的 feature 分支
git checkout -b feature-$1

# 在项目根目录下执行
# 初始化一个名为 $1 变量的组件 放在 packages/$1 目录下 并安装依赖
npm run add $1
```

组件开发相关命令/文件夹

```bash
# [开发目录]
# $1/src/*
# $1/tools/demo/*

# [结构解释]
# src下是组件开发
# tools/demo下是小程序demo开发 该demo自动引用了src目录下的组件

# 执行以下命令 会生成 $1/miniprogram_dev 目录
# 微信开发者工具打开对应组件目录下的 miniprogram_dev 文件夹进行开发调试
npm run watch
```

使用 npm 包中的自定义组件

```bash
# 举例如下
{
  "component": true,
  "usingComponents": {
    "mask": "modo-mask"
  }
}

# 需要在微信开发者工具的菜单做如下操作
# 会自动在 miniprogram_dev 中生成 miniprogram_npm 目录
工具 -> 构建npm
```
