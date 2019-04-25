const noop = () => {};

Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    maskStatus: {
      type: Boolean,
      value: false
    },
    duration: {
      type: String,
      value: '200ms',
      observer(newVal: number) {
        this.setStyleDict({
          type: 'transition-duration',
          prefix: '-webkit-',
          value: newVal,
        });
      },
    },
    bgColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.5)',
      observer(newVal: string) {
        this.setStyleDict({
          type: 'background-color',
          value: newVal,
        });
      }
    }
  },
  data: {
    maskStyleDict: {
      'transition-duration': { value: '200ms', priority: 0, prefix: '-webkit-' },
      'background-color': { value: 'rgba(0, 0, 0, 0.5)', priority: 0 },
    },
    maskStyle: ''
  },
  lifetimes: {
    attached() {
      this.setStyle();
    },
  },
  methods: {
    noop,
    setStyle() {
      const maskStyle = Object.keys(this.data.maskStyleDict)
        .reduce((acc, key) => {
          const { prefix, value } = this.data.maskStyleDict[key];

          return !!prefix
            ? `${acc}; ${key}: ${value}; ${prefix}${key}: ${value};`
            : `${acc}; ${key}: ${value}`;
        }, '');

      this.setData({ maskStyle });
    },
    setStyleDict({ type, value, priority = 0, prefix = '' }: {
      type: string,
      value: any,
      priority: number,
      prefix: string
    }) {
      const dict = this.data.maskStyleDict;

      if (!(type in dict) || dict[type].priority <= priority) {
        this.data.maskStyleDict[type] = { value, priority, prefix };
      } else {
        return;
      }

      this.setStyle();
    },
    handleTapMask() {
      this.triggerEvent('tapmask');
    }
  }
});
