<template>
  <div>
    {{node.label}}
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

