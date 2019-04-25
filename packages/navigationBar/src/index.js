const systemData = (function() {
  const { statusBarHeight = 22, system = '' } = wx.getSystemInfoSync();
  let headerBarHeight = 44;

  if (/Android/.test(system)) {
    headerBarHeight = 48;
  }

  return { statusBarHeight, headerBarHeight };
})();

const iconDict = {
  black: {
    home: './images/home_black.png',
    back: './images/back_black.png',
  },
  white: {
    home: './images/home_white.png',
    back: './images/back_white.png',
  },
};

Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    navStyle: {
      type: String,
      value: 'black',
      observer(newVal) {
        if (!newVal) return;
        this.setStyleDict({
          type: 'color',
          value: newVal === 'black' ? '#000' : '#fff',
        });
        this.setIcon();
      },
    },
    textColor: {
      type: String,
      observer(newVal) {
        if (!newVal) return;
        this.setStyleDict({
          type: 'color',
          value: newVal,
          priority: 1,
        });
      },
    },
    bgColor: {
      type: String,
      value: '#fffff',
      observer(newVal) {
        if (!newVal) return;
        this.setStyleDict({
          type: 'background-color',
          value: newVal,
        });
      },
    },
    borderBottomColor: {
      type: String,
      observer(newVal) {
        if (!newVal) return;
        this.setStyleDict({
          type: 'border-bottom-color',
          value: newVal,
        });
      },
    },
    hasTabBar: {
      type: Boolean,
      value: false,
    },
    isTabBar: {
      type: Boolean,
      value: false,
      observer(newVal) {
        this.setIcon();
      },
    },
    isFixed: {
      type: Boolean,
      value: true,
      observer(newVal) {
        this.setStyleDict({
          type: 'position',
          value: newVal ? 'fixed' : 'static',
        });
      },
    },
    iconUri: {
      type: String,
      observer(newVal) {
        this.setIcon();
      },
    },
    homeUri: {
      type: String,
    },
    useCustomHandler: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    systemData,
    iconDict,
    currentIcon: null,
    navigationBarStyleDict: {
      color: { value: '#000', priority: 0 },
      position: { value: 'fixed', priority: 0 },
      'background-color': { value: '#fff', priority: 0 },
    },
    navigationBarStyle: '',
  },
  lifetimes: {
    attached() {
      this.handlePrevPageStatus();
      this.setIcon();
      this.setStyle();
    },
  },
  methods: {
    setStyle() {
      let navigationBarStyle = Object.keys(this.data.navigationBarStyleDict)
        .map(key => `${key}: ${this.data.navigationBarStyleDict[key].value}`)
        .join(';');

      if ('border-bottom-color' in this.data.navigationBarStyleDict) {
        navigationBarStyle +=
          ';border-bottom-width: 1px;border-bottom-style: solid;';
      }

      this.setData({ navigationBarStyle });
    },
    setStyleDict({ type, value, priority = 0 } = {}) {
      const dict = this.data.navigationBarStyleDict;

      if (!(type in dict) || dict[type].priority <= priority) {
        this.data.navigationBarStyleDict[type] = { value, priority };
      } else {
        return;
      }

      this.setStyle();
    },
    handlePrevPageStatus() {
      const pages = getCurrentPages();
      const hasPrevPage = !!pages[pages.length - 2];

      this.setData({ hasPrevPage });
    },
    handleLeftPage() {
      if (this.data.useCustomHandler) {
        this.triggerEvent('leftpage');
      } else {
        if (this.data.hasPrevPage) {
          wx.navigateBack({ delta: 1 });
        } else {
          if (this.data.hasTabBar) {
            wx.switchTab({ url: this.data.homeUri });
          } else {
            wx.redirectTo({ url: this.data.homeUri });
          }
        }
      }
    },
    setIcon() {
      if (this.data.isTabBar) {
        this.setData({ currentIcon: null });
      } else {
        if (this.data.iconUri) {
          this.setData({ currentIcon: this.data.iconUri });
        } else {
          const isBlack = this.data.navStyle === 'black';
          const optionalIconDict = isBlack
            ? this.data.iconDict.black
            : this.data.iconDict.white;

          this.setData({
            currentIcon: this.data.hasPrevPage
              ? optionalIconDict.back
              : optionalIconDict.home,
          });
        }
      }
    },
  },
});
