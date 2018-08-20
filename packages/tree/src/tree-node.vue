<template>
  <div :style="{paddingLeft:indent+'px'}" class="ddv-tree">
    <div class="ddv-tree__content"> 
      <span ><i class="iconfont icon-arrow-right"></i></span>
      <span>{{node.label}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<style>
.ddv-tree{
  font-size:14px;
  color:#606266;
}
.ddv-tree__content{
  height: 36px;
  line-height: 36px;
}
.iconfont{
  margin-right:10px; 
  font-size:12px;
  color:#c0c4cc;
}
</style>


<script>
import '../../style/src/iconfont/iconfont.css'

export default {
  name: 'DdvTreeNode',
  props: {
    node: {
      type: Object,
      default () {
        return {}
      }
    },
    level: {
      type: Number,
      default: 0
    },
    indent: {
      type: Number
    }
  },
  mounted () {
    console.log(this.level, this.node.label, this.indent)
  }
}
</script>

