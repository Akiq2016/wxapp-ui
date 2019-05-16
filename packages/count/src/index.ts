const sizeTypeDict = {
  amount: {
    targetName: 'amount',
    styleName: 'font-size',
  },
  prefix: {
    targetName: 'prefix',
    styleName: 'font-size',
  },
  suffix: {
    targetName: 'suffix',
    styleName: 'font-size',
  },
  decimal: {
    targetName: 'decimal',
    styleName: 'font-size',
  },
};

const colorTypeDict = {
  amount: {
    targetName: 'amount',
    styleName: 'color',
  },
  prefix: {
    targetName: 'prefix',
    styleName: 'color',
  },
  suffix: {
    targetName: 'suffix',
    styleName: 'color',
  },
  decimal: {
    targetName: 'decimal',
    styleName: 'color',
  },
};

const gapTypeDict = {
  prefix: {
    targetName: 'prefix',
    styleName: 'margin-right',
  },
  suffix: {
    targetName: 'suffix',
    styleName: 'margin-left',
  },
  decimal: {
    targetName: 'decimal',
    styleName: 'margin-left',
  },
};

Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> value
    amountValue: {
      type: null,
      value: 0,
      observer(value: string | number) {
        this.setData({
          hasDecimalPart: Boolean(~`${value}`.indexOf('.'))
        });
      }
    },
    prefixValue: {
      type: String,
      value: ''
    },
    suffixValue: {
      type: String,
      value: ''
    },
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> size
    size: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...sizeTypeDict.amount, value });
        }
      }
    },
    prefixSize: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...sizeTypeDict.prefix, value });
        }
      }
    },
    suffixSize: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...sizeTypeDict.suffix, value });
        }
      }
    },
    decimalSize: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...sizeTypeDict.decimal, value });
        }
      }
    },
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> color
    color: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...colorTypeDict.amount, value });
        }
      }
    },
    prefixColor: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...colorTypeDict.prefix, value });
        }
      }
    },
    suffixColor: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...colorTypeDict.suffix, value });
        }
      }
    },
    decimalColor: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...colorTypeDict.decimal, value });
        }
      }
    },
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> gap
    prefixGap: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...gapTypeDict.prefix, value });
        }
      }
    },
    suffixGap: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...gapTypeDict.suffix, value });
        }
      }
    },
    decimalGap: {
      type: String,
      observer(value: string) {
        if (typeof value === 'string') {
          this.addStyleDict({ ...gapTypeDict.decimal, value });
        }
      }
    }
  },
  amountStyleDict: {},
  prefixStyleDict: {},
  suffixStyleDict: {},
  decimalStyleDict: {},
  data: {
    hasDecimalPart: false,
    amountStyleString: '',
    prefixStyleString: '',
    suffixStyleString: '',
    decimalStyleString: '',
  },
  methods: {
    addStyleDict({ targetName, styleName, value }: any) {
      const keyname = `${targetName}Style`;

      this[`${keyname}Dict`] = {
        ...this[`${keyname}Dict`],
        [styleName]: value,
      };

      this.genStyleString(keyname);
    },
    genStyleString(keyname: string) {
      let styleString = '';
      const styleDict = this[`${keyname}Dict`];

      for (const key in styleDict) {
        if (styleDict[key]) {
          styleString += `${key}: ${styleDict[key]}; `;
        }
      }

      this.setData({
        [`${keyname}String`]: styleString,
      });
    }
  },
});
