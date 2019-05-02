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
    currentCarouselIndex: 0,
  },
  properties: {
    thumbnailList: {
      type: Array,
      value: [],
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
    handleTapCarousel() {
      this.triggerEvent('tapcarousel', {
        index: this.data.currentCarouselIndex
      });
    },

    handleChangeCarousel({ detail }: WXEventBasic) {
      this.setData({
        currentCarouselIndex: detail.current,
      });

      this.triggerEvent('changecarousel', {
        index: detail.current
      });
    },

    handleCarouselImageError({
      currentTarget: {
        dataset: { index }
      }
    }: WXEventBasic) {
      this.triggerEvent('imgerror', { index });
    }
  }
});
