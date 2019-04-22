
// ## Properties

// | Name              | Type           | Default            | Description                                       |
// | :---------------- |:---------------|:-------------------|:--------------------------------------------------|
// | title             | String         |                    | 底部菜单弹框标题，不填则标题行不显示                    |
// | contentStyle      | String         | row                | 设置底部菜单弹框内容列表样式。可选参数 ['row', 'column'] |
// | contentList       | contentItem[]  |                    | 底部菜单弹框内容列表                                  |
// | dialogStatus      | Boolean        | false              | 设置底部菜单弹框的显示状态                             |
// | duration          | Number         | 200                | 设置底部菜单弹框出现的过渡时间                          |
// | bgColor           | String         | rgba(0, 0, 0, 0.5) | 蒙层背景颜色                                         |

Component({
  properties: {
    title: {
      type: String
    },
    contentStyle: {
      type: String,
      value: 'row'
    },
    contentList: {
      type: Array
    },
    dialogStatus: {
      type: Boolean,
      value: false,
    },
    duration: {
      type: Number,
      value: 200
    },
    bgColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.5)'
    }
  },
  lifetimes: {
    attached() {
      let that = this;
      wx.getSystemInfo({
        success(res) {
          // eslint-disable-next-line no-console
          console.log(res);
          that.showSomeThing('asdasd');
        }
      })
    }
  },
  methods: {
    showSomeThing(title: any) {
      console.log('you dont know', title);
    }
  }
});
