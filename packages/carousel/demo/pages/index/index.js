Page({
  data: {
    height: '425rpx',
    imgList: [
      'https://s2.ax1x.com/2019/04/30/E8XQlq.jpg',
      'https://s2.ax1x.com/2019/04/30/E8Xl60.jpg',
      'https://s2.ax1x.com/2019/04/30/E8XMpn.png',
      'https://s2.ax1x.com/2019/04/30/E8Xufs.png',
    ],
    duration: 500,
    imageMode: 'aspectFit',
    indicatorType: 'dots',
    indicatorDotsColor: 'rgba(0, 0, 0, .3)',
    indicatorDotsActiveColor: '#000000',
    indicatorFractionColor: '#ffffff',
    indicatorFractionBgColor: 'rgba(0, 0, 0, .3)',
    imageModeList: [
      'scaleToFill',
      'aspectFit',
      'aspectFill',
      'widthFix',
      'top',
      'bottom',
      'center',
      'left',
      'right',
      'top left',
      'top right',
      'bottom left',
      'bottom right',
    ],
    indicatorTypeList: ['dots', 'fraction', 'custom-dots', 'custom-fraction'],
  },
  handleChangeheight(e) {
    this.setData({
      height: e.detail.value,
    });
  },
  handleChangeimgList(e) {
    this.setData({
      imgList: e.detail.value,
    });
  },
  handleChangeduration(e) {
    this.setData({
      duration: e.detail.value,
    });
  },
  handleChangeimageMode(e) {
    this.setData({
      imageMode: this.data.imageModeList[e.detail.value],
    });
  },
  handleChangeindicatorType(e) {
    this.setData({
      indicatorType: this.data.indicatorTypeList[e.detail.value],
    });
  },
  handleChangeindicatorDotsColor(e) {
    this.setData({
      indicatorDotsColor: e.detail.value,
    });
  },
  handleChangeindicatorDotsActiveColor(e) {
    this.setData({
      indicatorDotsActiveColor: e.detail.value,
    });
  },
  handleChangeindicatorFractionColor(e) {
    this.setData({
      indicatorFractionColor: e.detail.value,
    });
  },
  handleChangeindicatorFractionBgColor(e) {
    this.setData({
      indicatorFractionBgColor: e.detail.value,
    });
  },
});
