<template>
  <div class="ddv-select">
    <input 
      type="text" 
      class="ddv-select__input" 
      placeholder="请选择" 
      autocomplete="off" 
      readonly="readonly">
      <i class="iconfont "></i>
  </div>
</template>

<script>
import '../../style/src/base.css'
import '../../style/src/select.css'
import '../../style/src/iconfont/iconfont.css'

export default {
  props: {
    label: {
      type: String
    }
  },
  mounted () {
  }
}
</script>