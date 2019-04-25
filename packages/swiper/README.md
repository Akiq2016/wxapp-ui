# Swiper
## Usage
##### [page/component].json
```
    {
      "usingComponents": {
        "modo-swiper": "path/mode/swiper/index"
      }
    }
```
## Properties
| Name | Type | Default | Description |
| :-----------: | :-----------: | :-----------: | :----------- |
| height | String | 100vw | 高度 |
| original-list | Array | [] | 轮播图原图列表, 用于点击查看原图 |
| preview-list | Array | [] | 轮播图缩略图列表, 不传则默认original-list |
| indicator-type | String | dot | 可选值: **pagination** **dot**  |
| indicator-position | String | center | 可选值: **left** **center** **right**, 仅当indicator-type为pagination有效 |
| errImage-replace | String | '' | 图片加载出错时替换的图片路径, 支持临时路径或http路径 |
| image-mode | String | scaleToFill | 可选值: 参照官方image组件的mode属性  |
| image-handle-format | String | {w: null, h: null, q: 75} | 七牛图片处理格式  |
| autoplay | Boolean | true | 是否自动切换 |
| circular | Boolean | true | 是否采用衔接滑动 |
| easing-function | String | linear | 	指定 swiper 切换缓动动画类型 |
-----------------------------------------------------------------------
| Name | Type | Default | Description |
| :-----------: | :-----------: | :-----------: | :----------- |
| indicator-color | String | rgba(0, 0, 0, .3) | 指示点颜色 |
| indicator-active-color | String | #000000 | 当前选中的指示点颜色 |
| current | Number | 0 | 当前所在滑块的 index |
| interval | Number | 5000 | 自动切换时间间隔 |
| duration | Number | 500 | 滑动动画时长 |
| vertical | Boolean | false | 滑动方向是否为纵向 |
| previous-margin | String | "0px" | 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值 |
| next-margin | String | "0px" | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值 |
| display-multiple-items | Number | 1 | 同时显示的滑块数量	 |
| skip-hidden-item-layout | Boolean | false | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 |
## Events
| Name | Description | Return |
| :-----------: | :----------- | :-----------: |
| bind:change | current 改变时会触发 change 事件 | { detail } |
| bind:transition | swiper-item 的位置发生改变时会触发 transition 事件 | { detail } |
| bind:animationfinish | 动画结束时会触发 animationfinish 事件 | { detail } |
