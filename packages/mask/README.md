# mask

## Slots

| Name             | Type           | Default        | Description              |
| ---------------- |----------------|----------------| -------------------------|
| content          | Dom            |                | 弹窗内容                  |

## Properties

| Name              | Type           | Default            | Description              |
| :---------------- |:---------------|:-------------------|:-------------------------|
| maskStatus        | Boolean        | false              | 设置蒙层的显示状态          |
| duration          | Number         | 200                | 设置蒙层出现的过渡时间       |
| bgColor           | String         | rgba(0, 0, 0, 0.5) | 自定义导航条背景颜色        |

## Events

| Name              | Type           | Default            | Description                         |
| :---------------- |:---------------|:-------------------|:------------------------------------|
| tapmask           | bind           | noop               | 点击蒙层的事件。可以监听该事件用于关闭蒙层 |
