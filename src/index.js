import isBrowser from './utils/isBrowser.js'
import Tree from '../packages/tree/index.js'
import Message from '../packages/message/index.js'
import Select from '../packages/select/index.js'
import Button from '../packages/button/index.js'

const components = [
  Tree,
  Select,
  Button
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
  Message,
  Select,
  Button
}

module.exports.default = module.exports
