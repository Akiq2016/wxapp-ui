Page({
  data: {
    originalList: [
      'https://wallpapercave.com/wp/wp4241374.jpg',
      'https://wallpapercave.com/wp/wp4241387.png',
      'https://wallpapercave.com/wp/wp4241379.jpg',
      'https://wallpapercave.com/wp/wp4241381.jpg',
      'https://wallpapercave.com/wp/wp4241384.jpg',
    ],
    height: '350px',
    heightvalue: 350,
    indicator_type: 'dot',
    indicator_position: 'center',
    autoplay: true,
    circular: true,
    easing_function: 'linear',
    image_mode: 'scaleToFill',
    interval: 5000,
    duration: 500,
    vertical: false,
    margin: 0,
    indicatorTypeRadio: [
      { name: 'dot', value: 'dot' },
      { name: 'pagination', value: 'pagination' },
    ],
    indicatorPositionRadio: [
      { name: 'left', value: 'left' },
      { name: 'center', value: 'center' },
      { name: 'right', value: 'right' },
    ],
    easingFunctionList: [
      { name: 'default', value: 'default' },
      { name: 'linear', value: 'linear' },
      { name: 'easeInCubic', value: 'easeInCubic' },
      { name: 'easeOutCubic', value: 'easeOutCubic' },
      { name: 'easeInOutCubic', value: 'easeInOutCubic' },
    ],
    imageModeList: [
      { name: 'scaleToFill', value: 0 },
      { name: 'aspectFit', value: 1 },
      { name: 'aspectFill', value: 2 },
      { name: 'widthFix', value: 3 },
      { name: 'top', value: 4 },
      { name: 'bottom', value: 5 },
      { name: 'center', value: 6 },
      { name: 'left', value: 7 },
      { name: 'right', value: 8 },
      { name: 'top left', value: 9 },
      { name: 'top right', value: 10 },
      { name: 'bottom left', value: 11 },
      { name: 'bottom right', value: 12 },
    ],
    intervalList: [
      { name: 500, value: 0 },
      { name: 1000, value: 1 },
      { name: 2000, value: 2 },
      { name: 3000, value: 3 },
      { name: 5000, value: 4 },
    ],
    durationList: [
      { name: 100, value: 0 },
      { name: 200, value: 1 },
      { name: 300, value: 2 },
      { name: 500, value: 3 },
      { name: 1000, value: 4 },
    ],
    imageModeMap: [],
    easingFunctionMap: [],
    intervaMap: [],
    durationMap: [],
  },
  handleHeight({ detail }) {
    this.setData({
      height: detail.value + 'px',
      handleHeight: detail.value,
    });
  },
  handleChange(value) {
    console.log('change事件触发: ', value);
  },
  hanleTransition(value) {
    console.log('transition事件触发: ', value);
  },
  handleAnimationFinish(value) {
    console.log('animationfinish事件触发: ', value);
  },
  handIndicatorType({ detail }) {
    this.setData({
      indicator_type: detail.value,
    });
  },
  handleIndicatorPosition({ detail }) {
    if (this.data.indicator_type !== 'pagination') {
      this.setData({
        indicator_type: 'pagination',
      });
    }
    this.setData({
      indicator_position: detail.value,
    });
  },
  handleAutoplay({ detail }) {
    this.setData({
      autoplay: detail.value,
    });
  },
  handCircular({ detail }) {
    this.setData({
      circular: detail.value,
    });
  },
  handleEasingFunction({ detail }) {
    this.setData({
      easing_function: this.data.easingFunctionMap[+detail.value],
    });
  },
  handleImageMode({ detail }) {
    this.setData({
      image_mode: this.data.imageModeMap[+detail.value],
    });
  },
  handleInterval({ detail }) {
    this.setData({
      interval: this.data.intervaMap[+detail.value],
    });
  },
  handleDuration({ detail }) {
    this.setData({
      duration: this.data.durationMap[+detail.value],
    });
  },
  handleVertical({ detail }) {
    this.setData({
      vertical: detail.value,
    });
  },
  handleMargin({ detail }) {
    this.setData({
      margin: detail.value,
    });
  },
  onLoad() {
    this.data.imageModeList.forEach(item => {
      this.data.imageModeMap[item.value] = item.name;
    });
    this.data.imageModeList.forEach(item => {
      this.data.easingFunctionMap[item.value] = item.name;
    });
    this.data.intervalList.forEach(item => {
      this.data.intervaMap[item.value] = item.name;
    });
    this.data.durationList.forEach(item => {
      this.data.durationMap[item.value] = item.name;
    });
  },
});
