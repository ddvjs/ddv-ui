<template>
  <div class="ddv-ui">
    <div class="ddv-message" :class="type">
      <span><i class="iconfont" :class="icon"></i></span>
      <span class="ml10">{{message}}</span>
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
      default: 'info'
    },
    message: {
      type: String
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
    }
  }
}
</script>

