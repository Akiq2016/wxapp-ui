Page({
  data: {
    steps: [
      {
        text: '1',
      },
      {
        text: '2',
      },
      {
        text: '3',
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
