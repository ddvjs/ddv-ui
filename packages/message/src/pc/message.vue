<template>
  <div class="ddv-ui">
    <transition name="el-message-fade">
      <div class="ddv-message" :class="classType" v-show="visible">
        <span><i class="iconfont" :class="icon"></i></span>
        <span class="ddv-message__text">{{message}}</span>
      </div>
    </transition>  
  </div>
</template>
<style>
.el-message-fade-enter,
.el-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}

</style>


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
    },
    onClose: {
      type: Function
    }
  },
  data () {
    return {
      isClose: false,
      visible: false
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
  },
  methods: {
    close () {
      this.isClose = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.isClose) {
            this.close()
          }
        }, this.duration)
      }
    }
  },
  watch: {
    isClose (val) {
      if (val) {
        this.visible = false
        setTimeout(() => {
          this.$destroy()
        },  this.duration + 500)
      }
    }
  },
  mounted () {
    this.visible = true
    this.startTimer()
  }
}
</script>

