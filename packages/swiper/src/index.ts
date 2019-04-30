Component({
  options: {
    multipleSlots: true,
  },
  externalClasses: [
    'custom-dots',
    'custom-dots-item',
    'custom-dots-item-active',
    'custom-fraction'
  ],
  data: {
    listLength: 0,
    currentSwiperIndex: 0,
  },
  properties: {
    originalList: {
      type: Array,
      observer(newVal: string) {
        if (!Array.isArray(this.data.thumbnailList) || !this.data.thumbnailList.length) {
          this.setData({ thumbnailList: newVal });
        }
      }
    },
    thumbnailList: {
      type: Array,
      observer(newVal: string) {
        this.setData({ listLength: newVal.length });
      }
    },
    duration: {
      type: Number,
      value: 500
    },
    indicatorType: {
      type: String,
      value: 'fraction'
    },
    imageMode: {
      type: String,
      value: 'aspectFit'
    },
    height: {
      type: String,
      value: '100vw'
    },
    indicatorDotsColor: {
      type: String,
      value: '#ffffff'
    },
    indicatorDotsActiveColor: {
      type: String,
      value: '#e54644'
    },
    indicatorFractionColor: {
      type: String,
      value: '#ffffff'
    },
    indicatorFractionBgColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.3)'
    }
  },
  methods: {
    handleTapSwiper() {
      if (~this.data.originalList[0].indexOf('http')) {
        wx.previewImage({
          urls: this.data.originalList,
          current: this.data.originalList[this.data.currentSwiperIndex]
        });

        this.triggerEvent('tapswiper', {
          index: this.data.currentSwiperIndex
        });
      }
    },

    handleChangeSwiper({ detail }: WXEventBasic) {
      this.setData({
        currentSwiperIndex: detail.current,
      });

      this.triggerEvent('changeswiper', {
        index: detail.current
      });
    },

    handleSwiperImageError({
      currentTarget: {
        dataset: { index }
      }
    }: WXEventBasic) {
      this.triggerEvent('imgerror', { index });
    }
  }
});
