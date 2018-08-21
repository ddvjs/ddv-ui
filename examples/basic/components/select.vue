<template>
  <div>
    <ddv-select 
      :list="options" 
      :value.sync="value" 
      :props="defaultProps">
      </ddv-select>
  </div>
</template>

<script>
import { Select } from 'ddv-ui'

export default {
  components: {
    'ddv-select': Select
  },
  data () {
    return {
      options: [{
        value: '选项1',
        name: '黄金糕'
      }, {
        value: '选项2',
        name: '双皮奶'
      }, {
        value: '选项3',
        name: '蚵仔煎'
      }, {
        value: '选项4',
        name: '龙须面'
      }, {
        value: '选项5',
        name: '北京烤鸭'
      }],
      defaultProps: {
        value: 'value',
        label: 'name'
      },
      value: ''
    }
  }
}
</script>