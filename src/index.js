import Tree from '../packages/tree/index.js'

const components = [
  Tree
]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

module.exports = {
  version: '0.2.0',
  install,
  Tree
}

module.exports.default = module.exports
