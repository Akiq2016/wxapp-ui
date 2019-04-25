Page({
  data: {
    value: false,
    showText: false,
    activeText: '是',
    inactiveText: '否',
    disabled: true,
    name: '',
    activedColor: '#656CE8',
    inactiveColor: '#CDD4FF',
    dotColor: '#FFFFFF',
  },
  handleChange({ detail: { value } }) {
    wx.showToast({
      title: `当前值: ${this.data.value ? '开' : '关'}`,
      icon: 'none',
    });
    console.log('change事件触发: ', this.data.value);
  },
});
