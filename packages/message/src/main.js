import PcMessage from './pc/message.vue'
import WapMessage from './wap/message.vue'

export default type => {
  return {
    functional: true,
    render (h) {
      let props = {
        message: this.message
      }

      if (this.type) {
        props.type = this.type
      }
      if (this.position) {
        props.position = this.position
      }
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