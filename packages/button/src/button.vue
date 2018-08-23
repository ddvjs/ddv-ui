<template>
  <button 
    type="button"
    class="ddv-button"
    :disabled="disabled"
    :class="[
      buttonType,
      buttonSize,
      {
        'ddv-button__round': round,
        'ddv-button__circle': circle,
        'ddv-button__disabled': disabled
      }
    ]">
    <i class="iconfont" :class="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
import '../../style/src/base.css'
import '../../style/src/button.css'
import '../../style/src/iconfont/iconfont.css'

export default {
  name: 'DdvButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String
    },
    size: {
      type: String,
      default: 'normal'
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean
  },
  computed: {
    buttonType () {
      if (this.plain) {
        return `ddv-button__${this.type}__plain`
      } else {
        return `ddv-button__${this.type}`
      }
    },
    buttonSize () {
      switch (this.size) {
        case 'normal':
          return 'ddv-button__normal'
        case 'medium':
          return 'ddv-button__medium'
        case 'small':
          return 'ddv-button__small'
        case 'mini':
          return 'ddv-button__mini'
      }
    }
  }
}
</script>