<template>
  <div class="ddv-inputNumber">
    <ddv-input  
      type="text"
      v-model="value" 
      >
      <!-- <template slot="prepend">-</template>
      <template slot="append">+</template> -->
      </ddv-input>
  </div>
</template>

<script>
import '../../style/src/base.css'
import '../../style/src/inputNumber.css'
import '../../style/src/iconfont/iconfont.css'
import { Input } from '../../input/index.js'

export default {
  name: 'DdvInputNumber',
  components: {
    'ddv-input': Input
  },
  props: {
    readonly: Boolean,
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

  },
  watch: {

  },
  mounted () {
    console.log(Input)
  }
}
</script>