<template>
  <div class="ddv-dialog__wrap"  v-show="visible">
    <div 
      class="ddv-dialog" 
      :style="{width:width}">
      <div class="ddv-dialog__header">
        <span class="ddv-dialog__title">{{title}}</span>
        <i class="ddv-dialog__icon iconfont icon-cuo" @click="close"></i>
      </div>

      <div class="ddv-dialog__body">
        <slot></slot>
      </div>

      <div class="ddv-dialog__footer">
        <button type="button" class="ddv-dialog__button">取消</button>
        <button type="button" class="ddv-dialog__button ddv-dialog__submit">确定</button>
      </div>

    </div>
    
  </div>
</template>

<script>
import '../../style/src/base.css'
import '../../style/src/dialog.css'
import '../../style/src/iconfont/iconfont.css'

export default {
  name: 'DdvDialog',
  props: {
    title: [String, Number],
    width: String,
    visible: {
      type: Boolean
    }
  },
  methods: {
    close () {
      console.log(2222)
      this.$emit('update:visible', false)
    }
  },
  computed: {

  }
}
</script>