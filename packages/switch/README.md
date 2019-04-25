# Switch
## Usage
##### [page/component].json
```
    {
      "usingComponents": {
        "modo-switch": "path/mode/switch/index"
      }
    }
```
## Properties
| Name | Type | Default | Description |
| :-----------: | :-----------: | :-----------: | :----------- |
| value | Boolean | false | 开关状态 |
| show-text | Boolean | false | 是否显示表示开关状态的文字描述 |
| active-text | String | 是 | 开启状态的文字描述 |
| inactive-text | String | 否 | 关闭状态的文字描述 |
| disabled | Boolean | false | 是否禁用 |
| actived-color | String | #656CE8 | 开启状态的背景色 |
| inactive-color | String | #CDD4FF | 关闭状态的背景色 |
| dot-color | String | #FFFFFF | 开关圆点控件的背景色 |
| name | String |   | 开关对应的 name 属性 |
| size | Number |  48 | 高度, 单位: **rpx** |
## Events
| Name | Description | Return |
| :-----------: | :----------- | :-----------: |
| bind:change | 开关状态改变时会触发change 事件 | { detail } |
