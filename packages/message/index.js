import Vue from 'vue'
import Main from './src/main.js'
let MessageConstructor
let instance
let instances = []
let seed = 1

const Message = function (opts) {
  opts = opts || {}

  if (!MessageConstructor) {
    MessageConstructor = Vue.extend(Main(typeof opts === 'object' ? opts.client : 'pc'))
  }

  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }

  let userOnClose = opts.onClose
  let id = 'message_' + seed++
  opts.onClose = function () {
    Message.close(id, userOnClose)
  }
  instance = new MessageConstructor({
    data: opts
  })
  instance.id = id

  instance.vm = instance.$mount()

  if (opts.el) {
    opts.el.appendChild(instance.vm.$el)
  } else {
    document.body.appendChild(instance.vm.$el)
  }
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instances.push(instance)
  return instance.vm
}

export default Message
