# count

## Usage

install

```bash
npm install --save modo-count
```

[page/component].json

```js
{
  "usingComponents": {
    "count": "modo-count"
  }
}
```

## Properties

| Name              | Type             | Default          | Description                                         |
| :---------------- |:-----------------|:-----------------|:----------------------------------------------------|
| amountValue       | string|number    | 0                | 数值，可以代表金额或数量                                |
| prefixValue       | string           |                  | 数值前缀，比如价格单位$ ¥等                             |
| suffixValue       | string           |                  | 数值后缀，比如数量单位/个 /位等                          |
| size              | string           |                  | 组件整体font-size                                    |
| prefixSize        | string           |                  | 单独设置前缀font-size                                 |
| suffixSize        | string           |                  | 单独设置后缀font-size                                 |
| decimalSize       | string           |                  | 单独设置数值中小数点及小数点以后部分font-size             |
| color             | string           |                  | 组件整体color                                        |
| prefixColor       | string           |                  | 单独设置前缀color                                     |
| suffixColor       | string           |                  | 单独设置后缀color                                     |
| decimalColor      | string           |                  | 单独设置数值中小数点及小数点以后部分color                 |
| prefixGap         | string           |                  | 前缀距离数值的间距                                     |
| suffixGap         | string           |                  | 后缀距离数值的间距                                     |
| decimalGap        | string           |                  | 数值中小数点及小数点以后部分距离数值的间距                 |
