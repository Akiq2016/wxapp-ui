# navigation-bar

## Demo
[代码片段](https://developers.weixin.qq.com/s/Nmm8QEmJ7R4U)

## Usage
install
```bash
npm install --save modo-navigationbar
```
app.json
```js
{
  "window": {
    "navigationStyle": "custom"
  }
}
```
[page/component].json
```js
{
  "usingComponents": {
    "navigation-bar": "modo-navigationbar"
  }
}
```

## Slots

| Name             | Type           | Default        | Description                                |
| ---------------- |----------------|----------------| -------------------------------------------|
| title            | Dom            |                | 自定义 当前页面标题。可以用图片 高度 40，宽度随意。|

## Properties

| Name              | Type           | Default        | Description              |
| :---------------- |:---------------|:---------------|:-------------------------|
| navStyle          | String         | black          | 设置导航条左上角图标及标题文字颜色。可选参数 ['black', 'white']。|
| textColor         | String         |                | 自定义标题文字颜色。设置该参数会覆盖 `style` 对标题文字的设置。|
| bgColor           | String         | #fffff         | 自定义导航条背景颜色。|
| borderBottomColor | String         |                | 自定义导航条 border-bottom 颜色。|
| hasTabBar         | Boolean        | false          | 当前项目是否有 tabBar 页面。该参数决定返回首页时使用 redirectTo 还是 switchTab。|
| isTabBar          | Boolean        | false          | 当前页面是否为 tabBar 页面。该参数决定左上角图标是否显示。|
| isFixed           | Boolean        | true           | 导航条是否在固定在页面头部。|
| iconUri           | String         |                | 自定义图标资源链接。尺寸：40x40。设置该参数会覆盖 `style` 对图标颜色的设置。默认图标显示规则：页面栈长度 > 1：返回上页图标 / 页面栈长度 == 1：返回首页图标 / `isTabBar`：无图标。|
| homeUri           | String         |                | 设置首页 page uri。|
| useCustomHandler  | Boolean        | false          | 是否自定义图标点击的回调事件。为 true 时，开发者需要监听 `leftpage` 事件。默认事件触发规则：页面栈长度 > 1：返回上页 / 页面栈长度 == 1：返回首页 / isTabBar：无事件]。|

## Events

| Name              | Type           | Default            | Description                                            |
| :---------------- |:---------------|:-------------------|:-------------------------------------------------------|
| leftpage          | bind           | noop               | 监听点击左上角icon的事件。仅在 `useCustomHandler` 为真时有效 |
