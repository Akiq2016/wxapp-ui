# carousel

## Demo

[代码片段](https://developers.weixin.qq.com/s/Ni7Rx1mt7i8C)

## Usage

install

```bash
npm install --save modo-carousel
```

[page/component].json

```js
{
  "usingComponents": {
    "carousel": "modo-carousel"
  }
}
```

## Slots

| Name             | Type           | Default        | Description              |
| ---------------- |----------------|----------------| -------------------------|
| indicator        | Dom            |                | 自定义指示器               |

## Properties

| Name              | Type           | Default            | Description                                |
| :---------------- |:---------------|:-------------------|:-------------------------------------------|
| height            | string         | 100vw              | carousel的高度                                |
| originalList      | string[]       |                    | 必填。原图列表；供给 wx.previewImage 使用      |
| thumbnailList     | string[]       |                    | 选填。缩略图列表；未填写则使用 originalList 的值 |
| duration          | number         | 500                | 微信小程序swiper组件的参数：滑动动画时长         |
| imageMode         | ImageMode      | aspectFit          | 微信小程序image组件的参数：图片裁剪、缩放的模式   |
| indicatorType     | IndicatorType  | dots               | 不同样式指示器                               |
| indicatorDotsColor| string         | #ffffff            | indicatorType 为 dots 时可用的参数           |
| indicatorDotsActiveColor  | string | #e54644            | indicatorType 为 dots 时可用的参数           |
| indicatorFractionColor    | string | #ffffff            | indicatorType 为 fraction 时可用的参数       |
| indicatorFractionBgColor  | string | rgba(0, 0, 0, 0.3) | indicatorType 为 fraction 时可用的参数       |

## Events

| Name              | Type           | Default            | Description                         |
| :---------------- |:---------------|:-------------------|:------------------------------------|
| tapcarousel       | bind           | noop               | 点击carousel的事件。                  |
| changecarousel    | bind           | noop               | 切换carousel的事件。可以监听该事件用于设置 custom indicator 的 active index |
| imgerror          | bind           | noop               | 当图片加载错误发生时自动触发。可以监听该事件用于替换报错图片为缺省图等 |

### externalClasses

当且仅当 indicatorType 为 custom-dots 时生效：用于定制 custom-dots 类型的样式；

- custom-dots
- custom-dots-item
- custom-dots-item-active

当且仅当 indicatorType 为 custom-fraction 时生效：用于定制 custom-fraction 的样式

- custom-fraction

### ImageMode

[微信小程序image组件](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

### IndicatorType

```typescript
type IndicatorType =
  'dots' || // 微信小程序swiper原生 indicator 样式，只支持修改color和active color
  'fraction' || // 分式样式，只支持修改color和bg color
  'custom-dots' || // 微信小程序swiper原生 indicator 结构，支持传入指定classname
  'custom-fraction' // 分式结构，支持传入指定classname
```
