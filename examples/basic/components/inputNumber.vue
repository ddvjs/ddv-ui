<template>
  <div class="ml50 mt50">
    <ddv-input-number  
      v-model="num"
      @change="handleChange"
      :min="1" 
      :max="10">
    </ddv-input-number>
    {{num}}
  </div>
</template>

<script>
import { InputNumber } from 'ddv-ui'

export default {
  components: {
    'ddv-input-number': InputNumber
  },
  data () {
    return {
      num: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  },
  watch: {
  },
  mounted () {

  }
}
</script>