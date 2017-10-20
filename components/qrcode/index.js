import ddvUiQrcode from './src/main'

/* istanbul ignore next */
ddvUiQrcode.install = function VueUseInstall (Vue) {
  Vue.component(ddvUiQrcode.name, ddvUiQrcode)
}

export default ddvUiQrcode
