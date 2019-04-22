# bottomSheetDialog

## Demo
[代码片段](https://developers.weixin.qq.com/s/)

## Usage
install
```bash
npm install --save modo-bottomsheetdialog
```
[page/component].json
```js
{
  "usingComponents": {
    "navigation-bar": "modo-bottomsheetdialog"
  }
}
```

## Properties

| Name              | Type           | Default            | Description                                       |
| :---------------- |:---------------|:-------------------|:--------------------------------------------------|
| title             | String         |                    | 底部菜单弹框标题，不填则标题行不显示                    |
| contentStyle      | String         | row                | 设置底部菜单弹框内容列表样式。可选参数 ['row', 'column'] |
| contentList       | contentItem[]  | []                 | 底部菜单弹框内容列表                                  |
| dialogStatus      | Boolean        | false              | 设置底部菜单弹框的显示状态                             |
| duration          | Number         | 200                | 设置底部菜单弹框出现的过渡时间                          |
| bgColor           | String         | rgba(0, 0, 0, 0.5) | 蒙层背景颜色                                         |

```ts
interface contentItemWithText {
    id: string;
    text: string;
    iconUri?: string
}

interface contentItemWithIcon {
    id: string;
    iconUri: string;
    text?: string;
}

// contentItem结构
type contentItem = contentItemWithText | contentItemWithIcon
```

## Events

| Name              | Type           | Default            | Description                                |
| :---------------- |:---------------|:-------------------|:-------------------------------------------|
| tapmask           | bind           | noop               | 点击蒙层的事件。可以监听该事件用于关闭蒙层        |
| tapitems          | bind           | noop               | 点击底部菜单列表。可以监听该事件todo响应对应 id 的事件 |
