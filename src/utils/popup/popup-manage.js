import Vue from 'vue'

let hasInitZIndex = false
let zIndex = 2000

const instances = {}

const PopupManager = {
  nextZIndex () {
    return PopupManager.zIndex++
  },
  getInstances (id) {
    return instances[id]
  },
  destroy (id) {
    if (id) {
      instances[id] = null
      delete instances[id]
    }
  }
}

Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get () {
    if (!hasInitZIndex) {
      zIndex = (Vue.prototype.$DDVUI || {}).zIndex || zIndex
      hasInitZIndex = true
    }
    return zIndex
  },
  set (val) {
    zIndex = val
  }
})

export default PopupManager
