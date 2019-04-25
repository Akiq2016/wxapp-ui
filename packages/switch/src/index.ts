Component({
  properties: {
    value: {
      type: Boolean,
      value: false
    },
    showText: {
      type: Boolean,
      value: false
    },
    activeText: {
      type: String,
      value: '是'
    },
    inactiveText: {
      type: String,
      value: '否'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    size: {
      type: Number,
      value: 48
    },
    // todo width name
    name: {
      type: String,
      value: ''
    },
    activedColor: {
      type: String,
      value: '#656CE8'
    },
    inactiveColor: {
      type: String,
      value: '#CDD4FF'
    },
    dotColor: {
      type: String,
      value: '#FFFFFF'
    }
  },
  lifetimes: {
  },
  methods: {
    handleToggle() {
      if (this.data.disabled) return;
      this.setData({
        value: !this.data.value
      });
      this.triggerEvent('change', { value: this.data.value });
    }
  }
});
