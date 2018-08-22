<template>
  <div class="ddv-ui">
    <div class="ddv-ui__tree">
      <ddv-tree-node
        v-for="node in lists"
        :key="node.nodeKey"
        :node="node.node"
        :data="node.data"
        :show-icon="showIcon"/>
    </div>
  </div>
</template>

<script>
import '../../style/src/base.css'
import '../../style/src/tree.css'
import '../../style/src/iconfont/iconfont.css'
import DdvTreeNode from './tree-node.vue'

export default {
  name: 'DdvTree',
  props: {
    // 数据
    data: {
      type: Array,
      default: () => []
    },
    // 偏移值
    indent: {
      type: Number,
      default: 16
    },
    props: {
      type: Object,
      default () {
        return {}
      }
    },
    // 是否默认展开
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    // 默认展开的key
    defaultExpandedKeys: {
      type: Array,
      default: () => []
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    nodeKey: String,
    lazy: Boolean
  },
  data () {
    return {
      treeprops: {
        children: 'children',
        label: 'label'
      },
      lists: []
    }
  },
  components: {
    DdvTreeNode
  },
  methods: {
    setProps () {
      this.treeprops = Object.assign(this.treeprops, this.props)
    },
    setData () {
      this.lists = []
      const childData = (level, lists, childNoteLists = []) => {
        lists.forEach((item, index) => {
          let obj = {
            data: item,
            node: {},
            nodeKey: this.nodeKey ? item[this.nodeKey] : index + '-' + level
          }
          obj.node.children = []
          obj.node.label = item[this.treeprops.label]
          obj.node.level = level
          obj.node.indent = this.indent * level
          obj.node.expanded = this.defaultExpandAll
          this.xx[obj.nodeKey] = []
          this.xx[obj.nodeKey].push(obj.nodeKey)

          if (!obj.node.expanded && this.defaultExpandedKeys.length) {
            obj.node.expanded = this.defaultExpandedKeys.indexOf(obj.nodeKey) > -1
          }

          if (Array.isArray(item[this.treeprops.children]) && item[this.treeprops.children].length) {
            let childLevel = level
            childLevel += 1
            childData(childLevel, item[this.treeprops.children], obj.node.children)
          }
          childNoteLists.push(obj)
        })
        return childNoteLists
      }
      this.xx = {}
      this.lists = childData(1, this.data)
      // console.log(this.xx)
    }
  },
  watch: {
    props () {
      this.setProps()
      this.setData()
    },
    data: {
      deep: true,
      handler () {
        this.setData()
      }
    }
  },
  created () {
    this.isTree = true
    this.setProps()
    this.setData()
  },
  mounted () {}
}
</script>
