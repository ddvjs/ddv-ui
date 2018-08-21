import Tree from '../packages/tree/index.js'
import Message from '../packages/message/index.js'
import Select from '../packages/select/index.js'

const components = [
  Tree,
  Select
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
}

module.exports = {
  version: '0.2.0',
  install,
  Tree,
  Message,
  Select
}

module.exports.default = module.exports
