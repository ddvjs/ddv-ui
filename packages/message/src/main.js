import PcMessage from './pc/message.vue'
import WapMessage from './wap/message.vue'

export default type => {
  return {
    functional: true,
    render (h) {
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
      }
      return h(PcMessage, {
        props
      })
    }
  }
}
