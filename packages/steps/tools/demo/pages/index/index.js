Page({
  data: {
    steps: [
      {
        text: '一',
      },
      {
        text: '二',
      },
      {
        text: '三',
      },
    ],
    active: 0,
  },
  TapNext() {
    let { steps, active } = this.data;
    active++;
    if (active > steps.length - 1) {
      active = 0;
    }
    this.setData({ active });
  },
});
