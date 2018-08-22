<template>
  <div class="ddv-tree_node">
    <div
      class="ddv-tree_node__content"
      @click="handleClick"
      :style="{
        paddingLeft: node.indent + 'px'
      }">
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
          :show-icon="showIcon"/>
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
    showIcon: {
      type: Boolean,
      default: true
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

        const renderIcon = h('span', {
          staticClass: 'ddv-tree_node__icon',
          class: {
            'ddv-tree_node__icon__noChild': !parent.node.children || parent.node.children.length === 0,
            'ddv-tree_node__icon__rotate': parent.expanded
          },
          style: {
            display: parent.showIcon ? 'inline-block' : 'none'
          }
        }, [
          h('i', {
            staticClass: 'iconfont icon-arrow-right'
          })
        ])

        return (
          h('span', {
            staticClass: 'ddv-tree_node__col'
          }, [
            renderIcon,
            tree.$scopedSlots.default
              ? tree.$scopedSlots.default({ node: this.node, data: this.data })
              : h('span', {
                staticClass: 'ddv-tree_node__label'
              }, this.node.label)
          ])
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
      this.node.expanded = !this.node.expanded
    }
  },
  watch: {
    'node.expanded' (val) {
      this.$nextTick(() => { this.expanded = val })

      if (val) {
        this.childNodeRendered = true

        if (this.$parent && this.$parent.node) {
          this.$parent.node.expanded = true
        }
      }
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

    if (this.node.expanded) {
      this.expanded = true
      this.childNodeRendered = true
    }
  }
}
</script>
