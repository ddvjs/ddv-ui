import Tree from '../packages/tree/index.js'
import Message from '../packages/message/index.js'

const components = [
  Tree
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
  Message
}

module.exports.default = module.exports
