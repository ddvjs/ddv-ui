<template>
  <transition name="ddv-messageWap-fade">
    <div 
      class="ddv-messageWap"
      v-show="visible"
      :style="{
        'z-index': zIndex
      }">
      <div class="ddv-messageWap__wrap" :class="place">
        <div class="ddv-messageWap__icon" v-show="type">
          <div class="ddv-messageWap__iconfont iconfont" :class="icon"></div>
        </div>
        <div class="ddv-messageWap__text">{{message}}</div>
      </div>
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
      validator (value) {
        return ['info', 'error', 'success', 'warning', 'loading'].indexOf(value) > -1
      }
    },
    position: {
      type: String,
      default: 'middle',
      validator (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) > -1
      }
    }
  },
  computed: {
    icon () {
      switch (this.type) {
        case 'info':
          return 'icon-info1'
        case 'error':
          return 'icon-cha'
        case 'success':
          return 'icon-gou'
        case 'warning':
          return 'icon-warning1'
        case 'loading':
          return 'icon-loading'
      }
    },
    place () {
      switch (this.position) {
        case 'top':
          return 'ddv-messageWap__placetop'
        case 'bottom':
          return 'ddv-messageWap__placebottom'
        case 'middle':
          return 'ddv-messageWap__placemiddle'
      }
    }
  }
}
</script>
