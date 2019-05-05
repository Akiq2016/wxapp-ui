# wxapp-ui

modo 小黑屋 の 小程序组件库

## 开发指南

### 安装相关库

```bash
npm install -g lerna
git clone git@github.com:modojs/wxapp-ui.git
lerna bootstrap --hoist
```

### 开发新组件

```bash
# 拉一条新的 feature 分支
git checkout -b feature-$1

# 在 wxapp-ui 项目根目录下执行
# 初始化一个名为 $1 变量的组件 放在 packages/$1 目录下 并安装依赖
npm run add $1

# 进入新组件目录
cd packages/$1

# 开发调试
npm run watch
```

### 使用 scss 语法

直接在后缀名为 `wxss` 的文件中使用 `scss` 语法即可。

### 使用 npm 包中的自定义组件

如下例子，使用了npm组件后，需要在微信开发者工具的菜单中选择构建npm：工具 -> 构建npm。该操作会自动在 `miniprogram_dev` 中生成 `miniprogram_npm` 目录。

```bash
{
  "component": true,
  "usingComponents": {
    "mask": "modo-mask"
  }
}
```

### 组件模板文档

可以参考[官方仓库](https://github.com/wechat-miniprogram/miniprogram-custom-component)。当前组件库的组件模板是基于官方库进行修改的版本。
