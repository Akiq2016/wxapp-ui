# placeholder

## Usage

install

```bash
npm install --save modo-placeholder
```

[page/component].json

```js
{
  "usingComponents": {
    "placeholder": "modo-placeholder"
  }
}
```

## Slots

| Name              | Type           | Default        | Description                                      |
| ----------------- |----------------|----------------|--------------------------------------------------|
| image             | Dom            |                | placeholder的缺省图片。                            |
| advanced          | Dom            |                | 当description和image无法满足需求，可以使用该slot。    |

## Properties

| Name              | Type           | Default            | Description                                      |
| :---------------- |:---------------|:-------------------|:-------------------------------------------------|
| description       | string         |                    | placeholder的文本                                 |
| descriptionColor  | string         | #e8e8e8            | placeholder的文本颜色                              |
| descriptionSize   | string         | 16px               | placeholder的文本字体大小                          |
| backgroundColor   | string         | #ffffff            | 组件背景颜色                                       |
