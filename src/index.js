import isBrowser from './utils/isBrowser.js'
import Tree from '../packages/tree/index.js'
import Message from '../packages/message/index.js'
import Select from '../packages/select/index.js'
import Button from '../packages/button/index.js'
import Dialog from '../packages/dialog/index.js'
import Input from '../packages/input/index.js'
import InputNumber from '../packages/inputNumber/index.js'

const components = [
  Tree,
  Select,
  Button,
  Dialog,
  Input,
  InputNumber
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$DDVUI = {
    client: opts.client || 'pc',
    zIndex: opts.zIndex || 2000
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
  Button,
  Dialog,
  Input,
  InputNumber
}

module.exports.default = module.exports
