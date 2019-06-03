const noop = () => {};

Page({
  data: {
    useTapMaskEvent: false,
    maskStatus: false,
    duration: '200ms',
    bgColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
  },
  noop,
  toggleMaskStatus() {
    this.setData({ maskStatus: !this.data.maskStatus });
  },
  changeuseTapMaskEvent(e) {
    this.setData({ useTapMaskEvent: e.detail.value });
  },
  changemaskStatus(e) {
    this.setData({ maskStatus: e.detail.value });
  },
  changeduration(e) {
    this.setData({ duration: e.detail.value });
  },
  changebgColor(e) {
    this.setData({ bgColor: e.detail.value });
  },
  changezIndex(e) {
    this.setData({ zIndex: +e.detail.value });
  },
  handleTapMask() {
    if (this.data.useTapMaskEvent) {
      this.toggleMaskStatus();
    }
  },
});
