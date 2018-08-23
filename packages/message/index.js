import Vue from 'vue'
import Main from './src/main.js'
let instance
let instances = []
let seed = 1
let methods = ['success', 'warning', 'info', 'error']

const Message = function (opts) {
  opts = opts || {}
  let MessageConstructor = Vue.extend(Main(opts.client))

  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }

  let userOnClose = opts.onClose
  let id = 'message_' + seed++
  opts.zIndex = (opts.zIndex || (Vue.prototype.$DDVUI && Vue.prototype.$DDVUI.zIndex) || 2000) + seed

  opts.onClose = function () {
    Message.close(id, userOnClose)
  }
  instance = new MessageConstructor({
    data: opts
  })
  MessageConstructor = void 0
  instance.id = id

  instance.vm = instance.$mount()

  if (opts.el && typeof opts.el.appendChild === 'function') {
    opts.el.appendChild(instance.vm.$el)
  } else if (!Vue.prototype.$isServer) {
    document.body.appendChild(instance.vm.$el)
  }
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
