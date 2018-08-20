import PcMessage from './pc/message.vue'
import WapMessage from './wap/message.vue'

export default type => {
  return {
    functional: true,
    render (h) {
      let props = {
        message: this.message,
        onClose: this.onClose
      }

      if (this.type) {
        props.type = this.type
      }
      if (this.position) {
        props.position = this.position
      }
      if (this.duration || this.duration === 0) {
        props.duration = this.duration
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
