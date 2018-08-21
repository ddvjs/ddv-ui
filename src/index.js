import isBrowser from './utils/isBrowser.js'
import Tree from '../packages/tree/index.js'
import Message from '../packages/message/index.js'

const components = [
  Tree
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$DDVUI = {
    client: opts.client || 'pc'
  }

  Vue.prototype.$message = Message
}

if (isBrowser && window.Vue) {
  install(window.Vue)
}

module.exports = {
  version: '0.2.0',
  install,
  Tree,
  Message
}

module.exports.default = module.exports
