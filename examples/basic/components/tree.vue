<template>
  <div>
    <ddv-tree :data="data" :props="defaultProps"></ddv-tree>
  </div>
</template>

<script>
import { Tree } from 'ddv-ui'

export default {
  components: {
    'ddv-tree': Tree
  },
  data () {
    return {
      data: [{
        title: '一级 1',
        children: [
          {
            title: '二级 1-1',
            children: [
              {
                title: '三级 1-1-1'
              }
            ]
          }
        ]
      }, {
        title: '一级 2',
        children: [{
          title: '二级 2-1',
          children: [{
            title: '三级 2-1-1'
          }]
        }, {
          title: '二级 2-2',
          children: [{
            title: '三级 2-2-1'
          }]
        }]
      }, {
        title: '一级 3',
        children: [{
          title: '二级 3-1',
          children: [{
            title: '三级 3-1-1'
          }]
        }, {
          title: '二级 3-2',
          children: [{
            title: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  }
}
</script>

