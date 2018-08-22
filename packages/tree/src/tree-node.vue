<template>
  <div class="ddv-tree_node">
    <div
      class="ddv-tree_node__content"
      @click="handleClick"
      :style="{
        paddingLeft: indent + 'px'
      }">
      <span
        class="ddv-tree_node__icon"
        :class="{
          'ddv-tree_node__icon__noChild': !node.children || node.children.length === 0,
          'ddv-tree_node__icon__rotate': expanded
        }">
        <i class="iconfont icon-arrow-right"></i>
      </span>
      <node-content :node="node" :data="data"></node-content>
    </div>
    <ddv-collapse-transition>
      <div class="ddv-tree_node__children" v-show="expanded">
        <ddv-tree-node
          v-if="childNodeRendered"
          v-for="item in node.children"
          :key="item.nodeKey"
          :node="item.node"
          :data="item.data"
          :level="item.level"
          :indent="item.indent" />
      </div>
    </ddv-collapse-transition>
  </div>
</template>

<script>
import DdvCollapseTransition from '../../../src/transitions/collapse-transition.js'

export default {
  name: 'DdvTreeNode',
  componentName: 'DdvTreeNodes',
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
    DdvCollapseTransition,
    nodeContent: {
      props: {
        node: {
          required: true
        },
        data: {
          required: true
        }
      },
      render (h) {
        const parent = this.$parent
        const tree = parent.tree
        return (
          tree.$scopedSlots.default
            ? tree.$scopedSlots.default({ node: this.node, data: this.data })
            : h('span', {
              class: ['ddv-tree_node__label']
            }, this.node.label)
        )
      }
    }
  },
  data () {
    return {
      expanded: false,
      childNodeRendered: false
    }
  },
  methods: {
    handleClick () {
      this.expanded = !this.expanded
    }
  },
  created () {
    const parent = this.$parent

    if (parent.isTree) {
      this.tree = parent
    } else {
      this.tree = parent.tree
    }

    const tree = this.tree
    if (!tree) {
      console.warn('Can not find node\'s tree.')
    }
    this.childNodeRendered = true
  },
  mounted () {}
}
</script>
