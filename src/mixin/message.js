export default {
  props: {
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
      visible: false,
      isClose: false
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
    },
    destroyElement () {
      console.log(2222)
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  watch: {
    isClose (val) {
      if (val) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  mounted () {
    this.visible = true
    this.startTimer()
  }
}
