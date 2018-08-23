import Vue from 'vue'

let hasModal = false
let hasInitZIndex = false
let zIndex = 2000

const popupInstances = {}

const PopupManager = {
  nextZIndex () {
    return PopupManager.zIndex++
  },
  getPopup (id) {
    return popupInstances[id]
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
