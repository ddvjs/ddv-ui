<template>
  <div
    :style="{
      paddingLeft: indent + 'px'
    }"
    class="ddv-tree_node">
    <div class="ddv-tree_node__content" @click="xxx">
      <span class="ddv-tree_node__icon">
        <i class="iconfont icon-arrow-right"></i>
      </span>
      <span class="ddv-tree_node__label">{{node.label}}</span>
    </div>
    <ddv-collapse-transition>
      <div class="ddv-tree_node__children" v-show="expanded">
        <slot></slot>
      </div>
    </ddv-collapse-transition>
  </div>
</template>

<script>
import DdvCollapseTransition from '../../../src/transitions/collapse-transition.js'

export default {
  name: 'DdvTreeNode',
  props: {
    node: {
      type: Object,
      default () {
        return {}
      }
    },
    data: {
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
  components: {
    DdvCollapseTransition
  },
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    xxx () {
      this.expanded = !this.expanded
    }
  },
  mounted () {}
}
</script>
