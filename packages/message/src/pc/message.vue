<template>
  <transition name="ddv-message-fade">
    <div
      class="ddv-message"
      :class="classType"
      v-show="visible"
      :style="{
        'z-index': zIndex
      }">
      <i class="ddv-message__icon iconfont" :class="icon"></i>
      <span class="ddv-message__text">{{message}}</span>
    </div>
  </transition>
</template>

<script>
import '../../../style/src/base.css'
import '../../../style/src/message.css'
import '../../../style/src/iconfont/iconfont.css'
import mixin from '../../../../src/mixin/message.js'

export default {
  name: 'DdvMessage',
  mixins: [mixin],
  props: {
    type: {
      type: String,
      default: 'info',
      validator (value) {
        return ['info', 'error', 'success', 'warning'].indexOf(value) > -1
      }
    },
    onClose: {
      type: Function
    }
  },
  computed: {
    icon () {
      switch (this.type) {
        case 'info':
          return 'icon-info'
        case 'error':
          return 'icon-danger'
        case 'success':
          return 'icon-success'
        case 'warning':
          return 'icon-warning'
      }
    },
    classType () {
      return `ddv-message__${this.type}`
    }
  }
}
</script>

