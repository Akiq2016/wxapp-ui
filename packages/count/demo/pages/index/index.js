Page({
  data: {
    amountValue: '100.45',
    prefixValue: '¥',
    suffixValue: '/个',
    size: '20px',
    prefixSize: '12px',
    suffixSize: '12px',
    decimalSize: '10px',
    color: '#222',
    prefixColor: '#666',
    suffixColor: '#f00',
    decimalColor: '#999',
    prefixGap: '10rpx',
    suffixGap: '',
    decimalGap: '',
  },
  handleChangeamountValue(e) {
    this.setData({
      amountValue: e.detail.value,
    });
  },
  handleChangeprefixValue(e) {
    this.setData({
      prefixValue: e.detail.value,
    });
  },
  handleChangesuffixValue(e) {
    this.setData({
      suffixValue: e.detail.value,
    });
  },
  handleChangesize(e) {
    this.setData({
      size: e.detail.value,
    });
  },
  handleChangeprefixSize(e) {
    this.setData({
      prefixSize: e.detail.value,
    });
  },
  handleChangesuffixSize(e) {
    this.setData({
      suffixSize: e.detail.value,
    });
  },
  handleChangedecimalSize(e) {
    this.setData({
      decimalSize: e.detail.value,
    });
  },
  handleChangecolor(e) {
    this.setData({
      color: e.detail.value,
    });
  },
  handleChangeprefixColor(e) {
    this.setData({
      prefixColor: e.detail.value,
    });
  },
  handleChangesuffixColor(e) {
    this.setData({
      suffixColor: e.detail.value,
    });
  },
  handleChangedecimalColor(e) {
    this.setData({
      decimalColor: e.detail.value,
    });
  },
  handleChangeprefixGap(e) {
    this.setData({
      prefixGap: e.detail.value,
    });
  },
  handleChangesuffixGap(e) {
    this.setData({
      suffixGap: e.detail.value,
    });
  },
  handleChangedecimalGap(e) {
    this.setData({
      decimalGap: e.detail.value,
    });
  },
});
