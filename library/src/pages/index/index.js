const componentList = require('../../components.js');

Page({
  data: {
    componentList: componentList,
  },
  goToComponentDemoPage(e) {
    wx.navigateTo({ url: e.currentTarget.dataset.url });
  },
});
