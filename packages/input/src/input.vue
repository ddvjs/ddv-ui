<template>
  <div class="ddv-inputWrap"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <span v-if="type==='text'">
      <span class="ddv-input__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </span>
      <input
        ref="ddvInput"
        :value="value"
        :type="type" 
        :readonly="readonly"
        :disabled="disabled"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        class="ddv-input ddv-input__text"
        :class="{
          'ddv-input__disabled': disabled,
          'ddv-input__borderRadius':$slots.prepend
        }" >
      <i
        v-if="clearable && showClearer"
        class="ddv-input__icon iconfont icon-danger" 
        @click="clearVal">
      </i>
    </span>
  
    <span v-if="type==='textarea'">
      <textarea 
        ref="textarea"
        class="ddv-input ddv-input__textarea">
      </textarea>
    </span>
  </div>
</template>

<script>
import '../../style/src/base.css'
import '../../style/src/input.css'
import '../../style/src/iconfont/iconfont.css'

export default {
  name: 'DdvInput',
  props: {
    value: [String, Number],
    readonly: Boolean,
    disabled: Boolean,
    placeholder: String,
    clearable: Boolean,
    rows: Number,
    autocomplete: {
      type: String,
      default: 'off'
    },
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    }
  },
  data () {
    return {
      isFocus: false,
      hovering: false,
      textareaCalcStyle: {}
    }
  },
  computed: {
    showClearer () {
      return this.clearable && !this.disabled && !this.readonly && this.value && (this.isFocus || this.hovering)
    }
  },
  methods: {
    iconShow () {
      if (this.value) {
        this.isIconShow = true
      }
    },
    handleFocus (ev) {
      this.isFocus = true
      this.$emit('focus', ev)
    },
    handleBlur (ev) {
      this.isFocus = false
      this.$emit('blur', ev)
    },
    handleChange (ev) {
      this.$emit('change', ev.target.value)
    },
    handleInput (ev) {
      this.$emit('input', ev.target.value)
    },
    setCurrentValue (val) {
      this.$refs.ddvInput.value = val || ''
    },
    clear () {
      this.$emit('clear')
    },
    clearVal () {
      this.$emit('input', '')
      this.$emit('change', '')
      this.setCurrentValue('')
      this.clear()
    }
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  }
}
</script>