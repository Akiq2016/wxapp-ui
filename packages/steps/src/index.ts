Component({
  properties: {
    steps: {
      type: Array,
      value: []
    },
    active: {
      type: Number,
      value: 0
    },
    activeColor: {
      type: String,
      value: '#07bd59'
    },
    doneImg: {
      type: String,
      value: 'http://yed-m-website.oss-cn-hangzhou.aliyuncs.com/topic/done.png',
    }
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
