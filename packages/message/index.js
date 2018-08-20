import PcMessage from './src/pc/message.vue'

function message (opts = {}) {
  
}

export default {
  functional: true,
  render (h, { props }) {
    return h(PcMessage, {
      props
    })
  },
  install (Vue) {
    Vue.component(PcMessage.name, PcMessage)
  }
}
