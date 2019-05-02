Component({
  properties: {
    prop: {
      type: String,
      value: '你不知道的事情还有很多'
    },
  },
  lifetimes: {
    attached() {
      let that = this;
      wx.getSystemInfo({
        success(res) {
          // eslint-disable-next-line no-console
          console.log(res);
          that.showSomeThing('asdasd');
        }
      })
    }
  },
  methods: {
    showSomeThing(title) {
      console.log('you dont know', title);
    }
  }
});
