import Vue from 'vue'
import Main from './src/main.js'
let MessageConstructor
let instance
let instances = []
let seed = 1
let methods = ['success', 'warning', 'info', 'error']

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
  } else if (!Vue.prototype.$sisServer) {
    document.body.appendChild(instance.vm.$el)
  }
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instances.push(instance)
  return instance.vm
}

methods.forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Message
