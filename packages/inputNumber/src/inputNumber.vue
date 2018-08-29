<template>
  <div class="ddv-inputNumber">
    <ddv-input  
      type="text"
      v-model="value"
      @change="handleChange"
      @input="handleInput"
      >
      <template slot="prepend" @click="num--">-</template>
      <template slot="append" >+</template>

      </ddv-input>
  </div>
</template>

<script>
import '../../style/src/base.css'
import '../../style/src/inputNumber.css'
import '../../style/src/iconfont/iconfont.css'
import Input from '../../input/index.js'

export default {
  name: 'DdvInputNumber',
  components: {
    'ddv-input': Input
  },
  props: {
    min: Number,
    max: Number,
    num: Number,
    size: {
      type: String,
      default: 'normal'
    }
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {

  },
  methods: {
    handleChange (value) {
      this.$emit('change', value)
    },
    handleInput (value) {
      this.$emit('input', value)
    }
  },
  watch: {
    value (val) {
      if (val < this.min) {
        console.log(43434)
      }
    }
  },
  mounted () {
  }
}
</script>