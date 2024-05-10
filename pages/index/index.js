
import { downloadSharePhoto, getShareImage } from '../../utils/share/index'

// 获取应用实例
const app = getApp()

Page({
  data: {
    shareConfig: {
      title: 'Hello World'
    },
    shareData: {
      number: 1
    }
  },
  onLoad() {
    this.setShareConfig()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return this.data.shareConfig
  },
  /**
  * 设置分享信息
  */
  setShareConfig () {
    this.data.shareConfig.title = '设置分享标题'
    this.data.shareConfig.imageUrl = 'https://via.placeholder.com/420x336.png/07c160/fff'
    wx.showShareMenu()

    getShareImage('card', {
      type: 'shareDemo',
      drawType: 'card',
      params: this.data.shareData
    }, this).then(image => {
      this.data.shareConfig.imageUrl = image
      console.log('生成分享卡片成功', image)
    })
  },
  /**
  * 下载分享图片
  */
  downloadShareImage () {
    downloadSharePhoto('image', {
      type: 'shareDemo',
      drawType: 'image',
      params: {
        bgImg: 'https://via.placeholder.com/420x336.png/07c160/fff',
        title: '标题'
      },
      path: 'subpages/lottery/pages/index',
      scene: {
        title: '标题'
      }
    }, this).then(image => {
      console.log('生成分享大图成功', image)
    })
  },
})
