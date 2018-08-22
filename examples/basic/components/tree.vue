<template>
  <div>
    <ddv-tree :data="data" :props="defaultProps" node-key="title" :defaultExpandedKeys="['二级 1-1']">
      <!-- <div slot-scope="{node, data}" class="dddd">
        {{node.label}}88
      </div> -->
    </ddv-tree>
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
      xxx: true,
      data: [
        {
          title: '一级 1',
          child: [
            {
              title: '二级 1-1',
              child: [
                {
                  title: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          title: '一级 2',
          child: [
            {
              title: '二级 2-1',
              child: [
                {
                  title: '三级 2-1-1'
                }
              ]
            },
            {
              title: '二级 2-2',
              child: [
                {
                  title: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          title: '一级 3',
          child: [
            {
              title: '二级 3-1',
              child: [
                {
                  title: '三级 3-1-1'
                }
              ]
            },
            {
              title: '二级 3-2',
              child: [
                {
                  title: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'child',
        label: 'title'
      }
    }
  },
  mounted () {}
}
</script>

