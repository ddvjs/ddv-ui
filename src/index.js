import Tree from '../packages/tree/index.js'
import Message from '../packages/Message/index.js'
import Vue from 'vue'

const components = [
  Tree,
  Message
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

Vue.prototype.$message = Message

module.exports = {
  version: '0.2.0',
  install,
  Tree,
  Message
}

module.exports.default = module.exports
