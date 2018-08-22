<template>
  <div>
    <ddv-select 
      :list="options" 
      :multiple="multiple"
      :value.sync="value" 
      :props="defaultProps">
      </ddv-select>
      <!-- :disabled="disabled" -->
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
        xx: '选项1',
        name: '黄金糕'
      }, {
        xx: '选项2',
        name: '双皮奶'
      }, {
<<<<<<< HEAD
<<<<<<< HEAD
        value: '选项3',
        name: '蚵仔煎',
        disabled: true
=======
=======
>>>>>>> origin/dev
        xx: '选项3',
        name: '蚵仔煎'
>>>>>>> origin/dev
      }, {
        xx: '选项4',
        name: '龙须面'
      }, {
        xx: '选项5',
        name: '北京烤鸭'
      }],
      defaultProps: {
        value: 'xx',
        label: 'name'
      },
      value: [],
      multiple: true
      // disabled: true
    }
  }
}
</script>