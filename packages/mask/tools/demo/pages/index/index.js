const noop = () => {};

Page({
  data: {
    useTapMaskEvent: false,
    maskStatus: false,
    duration: '200ms',
    bgColor: 'rgba(0, 0, 0, 0.5)',
  },
  noop,
  toggleMaskStatus() {
    this.setData({ maskStatus: !this.data.maskStatus });
  },
  toggleUseTapMaskEvent(e) {
    this.setData({ useTapMaskEvent: e.detail.value });
  },
  changeMaskStatus(e) {
    this.setData({ maskStatus: e.detail.value });
  },
  changeDuration(e) {
    this.setData({ duration: e.detail.value });
  },
  changeBgColor(e) {
    this.setData({ bgColor: e.detail.value });
  },
  handleTapMask() {
    if (this.data.useTapMaskEvent) {
      this.toggleMaskStatus();
    }
  },
});
