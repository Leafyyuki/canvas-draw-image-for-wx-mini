const background = 'https://via.placeholder.com/420x336.png/07c160/fff'
const white = '#FFFFFF'
const green = '#07c160'

export default function (data, type = 'card') {
  console.log(data, type)
  switch (type) {
    case 'card':
      const elements = [
        { type: 'image', url: background, x: 0, y: 0, width: 420, height: 336 },
        { type: 'square', x: 10, y: 10, width: 400, height: 316, borderRadius: 40, backgroundColor: 'rgba(255,255,255,1)' },
        { type: 'text', line: `送你${data.number}张优惠券`, x: 44, y: 118, fontSize: 28, fontColor: green, fontFamily: 'PingFangSC-Regular'},
        { type: 'text', line: '¥', x: 44, y: 182, fontSize: 44, fontColor: green, fontFamily: 'PingFang SC', id: 'text1'},
        { type: 'text', line: '1', x: 5, y: 158, fontSize: 80, fontColor: green, fontFamily: 'Arial-BoldMT', fontWeight: 'bold' , after: 'text1', id: 'text2'},
        // id与after结合使用，文字跟在上一个文字后面用after: [上一个文字id]
        { type: 'text', line: '优惠券', x: 5, y: 182, fontSize: 44, fontColor: green, fontFamily: 'Arial-BoldMT', fontWeight: 'bold' , after: 'text2'}
      ]

      return {
        width: 420,
        height: 336,
        background: { color: green },
        elements
      }

    case 'image':
      const elements2 = [
        { type: 'square', x: 30, y: 30, width: 690, height: 860, borderRadius: 40, backgroundColor: 'rgba(255,255,255,1)' },
        { type: 'text', line: '单行文本', x: 60, y: 100, fontSize: 35, fontColor: green, fontFamily: 'PingFangSC-Regular', width: 650, numberOfLines: 1, lineHeight: 40},
        { type: 'text', line: '单行文本溢出省略单行文本溢出省略单行文本溢出省略单行文本溢出省略单行文本溢出省略', x: 60, y: 150, fontSize: 35, fontColor: green, fontFamily: 'PingFangSC-Regular', width: 650, numberOfLines: 1, lineHeight: 40},
        { type: 'text', line: '多行文本移除省略多行文本移除省略多行文本移除省略多行文本移除省略多行文本移除省略', x: 60, y: 220, fontSize: 35, fontColor: green, fontFamily: 'PingFangSC-Regular', width: 650, numberOfLines: 2, lineHeight: 40},
        { type: 'image', url: background, x: 60, y: 350, width: 630, height: 504 },
      ]

      return {
        width: 750,
        height: 1334,
        background: { color: green },
        elements: elements2 
      }

    
  }

  return {
    width: 750,
    height: 1334,
    background: { color: green },
    elements: []
  }

}

