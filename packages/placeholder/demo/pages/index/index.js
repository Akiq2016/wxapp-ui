Page({
  data: {
    description: '没有更多啦',
    imageStatus: false,
    descriptionColor: '#cecece',
    descriptionSize: '16px',
    backgroundColor: '#ffffff',
    advancedStatus: false,
  },
  handleChangedescription(e) {
    this.setData({
      description: e.detail.value,
    });
  },
  handleChangeimageStatus(e) {
    this.setData({
      imageStatus: e.detail.value,
    });
  },
  handleChangedescriptionColor(e) {
    this.setData({
      descriptionColor: e.detail.value,
    });
  },
  handleChangedescriptionSize(e) {
    this.setData({
      descriptionSize: e.detail.value,
    });
  },
  handleChangebackgroundColor(e) {
    this.setData({
      backgroundColor: e.detail.value,
    });
  },
  handleChangeadvancedStatus(e) {
    this.setData({
      advancedStatus: e.detail.value,
    });
  },
});
