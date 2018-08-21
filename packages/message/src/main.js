import PcMessage from './pc/message.vue'
import WapMessage from './wap/message.vue'

export default type => {
  return {
    functional: true,
    render (h) {
      type = type || (this.$DDVUI ? this.$DDVUI.client : 'pc')
      let props = Object.assign({}, this.$data)
      let keys = Object.keys(props)

      keys.forEach(key => {
        if (typeof props[key] === typeof void 0) {
          delete props[key]
        }
      })

      if (type === 'wap') {
        return h(WapMessage, {
          props
        })
      } else if (type === 'wechaApp') {
        return h(WapMessage, {
          props: {
            message: '暂不支持小程序组件',
            type: 'error'
          }
        })
      }
      return h(PcMessage, {
        props
      })
    }
  }
}
