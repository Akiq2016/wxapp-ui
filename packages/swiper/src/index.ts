// https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/
Component({
  properties: {
    height: {
      type: 'String',
      value: '100vw'
    },
    previewList: {
      // 图片缩略列表
      type: Array,
      value: []
    },
    originalList: {
      // 原图列表 用于点击查看原图
      type: Array,
      value: [],
      observer(newVal: any) {
        const modeFormat = this.data.imageHandleFormat;
        if (typeof modeFormat === 'object') {
          const modeArr = Object.keys(this.data.imageHandleFormat);
          const modeUrlArr = modeArr.map((item: any, index: number) => `/${item}/${modeFormat[item]}`);
          const previewList = this.data.originalList.map((item: string, index: number) => `${item}?${modeUrlArr[index]}`);
          this.setData({
            previewList
          });
        } else {
          console.error("image-handle-format属性类型不是Object");
        }
      }
    },
    indicatorType: {
      type: String,
      value: 'dot'
    },
    indicatorPosition: {
      type: String,
      value: 'center'
    },
    imageMode: {
      type: String,
      value: 'scaleToFill'
    },
    errImageReplace: {
      type: String,
      value: ''
    },
    imageHandleFormat: {
      type: Object,
      value: {
        w: null,
        h: null,
        q: 75
      }
    },
    indicatorDots: {
      type: Boolean,
      value: false
    },
    indicatorColor: {
      type: String,
      value: 'rgba(0, 0, 0, .3)'
    },
    indicatorActiveColor: {
      type: String,
      value: '#FFFFFF'
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    current: {
      type: Number,
      value: 0
    },
    interval: {
      type: Number,
      value: 5000
    },
    duration: {
      type: Number,
      value: 500
    },
    circular: {
      type: Boolean,
      value: true
    },
    vertical: {
      type: Boolean,
      value: false
    },
    previousMargin: {
      type: String,
      value: '0px'
    },
    nextMargin: {
      type: String,
      value: '0px'
    },
    displayMultipleItems: {
      type: Number,
      value: 1
    },
    skipHiddenItemLayout: {
      type: Boolean,
      value: false
    },
    easingFunction: {
      type: String,
      value: 'default'
    }
  },
  lifetimes: {

  },
  methods: {
    // 点击图片 显示大图
    tapSwiper() {
      const originalList: string[] = this.data.originalList.length ? this.data.originalList : this.data.previewList;
      if (~originalList[0].indexOf('http')) {
        wx.previewImage({
          urls: originalList,
          current: originalList[this.data.current]
        });
      }
    },
    // 捕获并处理滑动 swiper 的事件
    handleChange({detail}: WXEventBasic) {
      // 修改当前图片序号
      this.setData({
        current: detail.current
      });
      this.triggerEvent('change', {detail});
    },
    handleTransition({detail}: WXEventBasic) {
      this.triggerEvent('transition', {detail});
    },
    hanldeAnimationFinish({detail}: WXEventBasic) {
      this.triggerEvent('animationfinish', {detail});
    },
    handleError({ currentTarget: { dataset: {i} } }: WXEventBasic) {
      const {previewList} = this.data;
      previewList[i] = this.data.imageNoFound;
      this.setData({previewList});
    }
  }
});
