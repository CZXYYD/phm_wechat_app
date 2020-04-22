//app.js
App({
  onLaunch: function () {
    
    //云开发初始化
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'xyy666-9pxzd',
      })
    }

    this.globalData = {}
  }
})
