<template>
  <transition name="dialog-fade" @after-leave="afterLeave">
    <div class="ddv-dialog__wrap" v-show="visible" @click.self="handleWrapClose">
      <div 
        class="ddv-dialog"
        :style="style">
        <div
          class="ddv-dialog__header"
          :class="{
            'has-close': showClose
          }">
          <slot name="title">
            <span class="ddv-dialog__title">
              {{title}}
            </span>
          </slot>
          <i class="ddv-dialog__icon iconfont icon-cuo" @click="handleClose" v-if="showClose"></i>
        </div>
        <div class="ddv-dialog__body" v-if="rendered">
          <slot></slot>
        </div>
        <div class="ddv-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import '../../style/src/base.css'
import '../../style/src/dialog.css'
import '../../style/src/iconfont/iconfont.css'
import PopupManager from '../../../src/utils/popup/popup-manage.js'

export default {
  name: 'DdvDialog',
  props: {
    title: [String, Number],
    width: String,
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean
    },
    showClose: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    fullscreen: Boolean,
    beforeClose: Function,
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      rendered: false
    }
  },
  methods: {
    handleWrapClose () {
      if (this.closeOnClickModal) {
        this.handleClose()
      }
    },
    handleClose () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.close)
      } else {
        this.close()
      }
    },
    close () {
      this.$emit('update:visible', false)
      this.$emit('close', false)
    },
    afterLeave () {
      this.$emit('closed')
    }
  },
  computed: {
    style () {
      let style = {}
      if (!this.fullscreen) {
        style.marginTop = this.top
        if (this.width) {
          style.width = this.width
        }
      }
      return style
    }
  },
  watch: {
    visible (val) {
      if (!val) {
        this.$emit('close', false)
      }
    }
  },
  mounted () {
    this.rendered = true
    console.log(PopupManager)
  }
}
</script>