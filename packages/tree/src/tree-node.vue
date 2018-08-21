<template>
  <div
    :style="{
      paddingLeft: indent + 'px'
    }"
    class="ddv-tree">
    <div class="ddv-tree__content">
      <span class="ddv-tree__icon">
        <i class="iconfont icon-arrow-right"></i>
      </span>
      <span>{{node.label}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>

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
