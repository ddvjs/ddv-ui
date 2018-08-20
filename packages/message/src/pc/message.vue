<template>
  <div class="ddv-ui">
    <div class="ddv-message" :class="classType">
      <span><i class="iconfont" :class="icon"></i></span>
      <span class="ddv-message__text">{{message}}</span>
    </div>
  </div>
</template>

<script>
import '../../../style/src/base.css'
import '../../../style/src/message.css'
import '../../../style/src/iconfont/iconfont.css'

export default {
  name: 'DdvMessage',
  props: {
    type: {
      type: String,
      default: 'info',
      validator (value) {
        return ['info', 'error', 'success', 'warning'].indexOf(value) > -1
      }
    },
    message: {
      type: String
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      isClose: false
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

