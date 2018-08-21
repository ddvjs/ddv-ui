<script>
import '../../style/src/base.css'
import '../../style/src/tree.css'
import '../../style/src/iconfont/iconfont.css'
import DdvTreeNode from './tree-node.vue'

export default {
  name: 'DdvTree',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    indent: {
      type: Number,
      default: 16
    },
    props: {
      type: Object,
      default () {
        return {}
      }
    }
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
      const childData = (lists, childNoteLists = []) => {
        lists.forEach(item => {
          let obj = {
            data: item,
            node: {}
          }
          obj.node[this.treeprops.children] = []
          obj.node.label = item[this.treeprops.label]

          if (Array.isArray(item[this.treeprops.children]) && item[this.treeprops.children].length) {
            childData(item[this.treeprops.children], obj.node[this.treeprops.children])
          }
          childNoteLists.push(obj)
        })
        return childNoteLists
      }
      this.lists = childData(this.data)
    }
  },
  render (h) {
    const treeNodes = (level, lists, renderList = []) => {
      lists.forEach((item) => {
        var slotRender = []

        if (Array.isArray(item.node.children) && item.node.children.length) {
          let childLevel = level
          childLevel += 1
          slotRender = treeNodes(childLevel, item.node.children)
        }
        var render = h(DdvTreeNode, {
          props: {
            node: item.node,
            data: item.data,
            level: level,
            indent: this.indent
          }
        }, slotRender)
        renderList.push(render)
      })
      return renderList
    }

    return h('div', {
      class: ['ddv-ui']
    }, [
      h('div', {
        class: ['ddv-ui__tree']
      }, treeNodes(1, this.lists))
    ])
  },
  watch: {
    props () {
      this.setProps()
      this.setData()
    },
    data () {
      this.setData()
    }
  },
  created () {
    this.setProps()
    this.setData()
  },
  mounted () {}
}
</script>
