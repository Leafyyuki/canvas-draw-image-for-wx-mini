import drawImage from './draw'

// 分享模板
import template from './templates/template_demo1'
export const shareDemo = template

/**
 * 使用对应的模板方法创建图片
 * @param {string} canvasId canvas组件id
 * @param {Object} config 分享配置
 * @param {Object} page 页面/组件实例的this
 */
export function getShareImage (canvasId, config, page) {
  const { drawType } = config
  const pageComp = page.selectComponent('.page') ?? page

  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...',
    })

    drawImage(canvasId, config, drawType, pageComp).then(image => {
      resolve(image)
    }).catch((err) => {
      console.log(err)
      reject(err)
    }).finally(() => {
      wx.hideLoading()
    })
  })
}

/**
 * 使用对应的模板方法创建图片
 * @param {string} canvasId canvas组件id
 * @param {Object} config 分享配置
 * @param {Object} pageComp page组件实例的this
 */
export function downloadSharePhoto (canvasId, config, page) {
  const { drawType, scene={}, path } = config
  const pageComp = page.selectComponent('.page')
  const shareModal = page.selectComponent('#shareModal')


  wx.showLoading({
    title: '加载中...',
  })
  
  return new Promise((resolve, reject) => {
    // 生成小程序码todo
    // makeQrcode(path, scene).then(qrcode => {
    //   config.params = Object.assign(config.params, { qrcode })
    //   return drawImage(canvasId, config, drawType, pageComp)
    // })
    return drawImage(canvasId, config, drawType, pageComp)
      .then(image => {
        wx.hideLoading()
        return saveImageToPhotosAlbum(image)
      }).then((image) => {
        resolve(image)
      }).catch((err) => {
        console.log(err)
        wx.hideLoading()
        wx.showToast({
          title: '生成海报失败',
          icon: 'error',
          duration: 2000
        })
        reject(err)
      })
  })
}

/**
 * 保存图片到相册
 * @param {string} image 图片本地连接
 */
export function saveImageToPhotosAlbum (image) {
  return new Promise((resolve, reject) => {
    wx.saveImageToPhotosAlbum({
      filePath: image,
      success (res) {
        toast('图片保存成功，可以去发图啦')
        resolve(image)
      },
      fail (res) {
        toast('图片保存失败，请重试')
        reject(res)
      }
    })
  })
}

