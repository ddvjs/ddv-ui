<template>
  <div class="ml50 mt50">
    <ddv-input  
      type="text"
      :rows="10"
      v-model="input" 
      placeholder="请输入内容"
      size="medium"
      clearable
      >
      <template slot="prepend">dsdp://</template>
      <template slot="append">.com</template>
      </ddv-input>
      <!-- :disabled="true" -->
      <!-- autocomplete="off" -->
      <!-- readonly="readonly" -->
  </div>
</template>

<script>
import { Input } from 'ddv-ui'

export default {
  components: {
    'ddv-input': Input
  },
  data () {
    return {
      input: 454545
    }
  },
  methods: {
  },
  watch: {
  }
}
</script>