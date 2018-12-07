Page({
  data: {
    navStyle: 'black',
    textColor: '',
    bgColor: '#fff',
    borderBottomColor: '',
    hasTabBar: false,
    isTabBar: false,
    isFixed: true,
    iconUri: '',
    homeUri: '/pages/index2/index',
    useCustomHandler: false,
  },
  exchangeNavStyle(e) {
    this.setData({
      navStyle: e.detail.value ? 'black' : 'white',
    });
  },
  changeTextColor(e) {
    this.setData({
      textColor: e.detail.value,
    });
  },
  changeBgColor(e) {
    this.setData({
      bgColor: e.detail.value,
    });
  },
  changeBorderBottomColor(e) {
    this.setData({
      borderBottomColor: e.detail.value,
    });
  },
  exchangeHasTabBar(e) {
    this.setData({
      hasTabBar: e.detail.value,
    });
  },
  exchangeIsTabBar(e) {
    this.setData({
      isTabBar: e.detail.value,
    });
  },
  exchangeIsFixed(e) {
    this.setData({
      isFixed: e.detail.value,
    });
  },
  changeIconUri(e) {
    this.setData({
      iconUri: e.detail.value,
    });
  },
  exchangeUseCustomHandler(e) {
    this.setData({
      useCustomHandler: e.detail.value,
    });
  },
  changeHomeUri(e) {
    this.setData({
      homeUri: e.detail.value,
    });
  },
  handleLeftpage(e) {
    console.log('tap left page icon!!!');
  },
});
