<template>
  <div class="ml50 mt50">
    <ddv-select 
      :list="options" 
      :value.sync="value" 
      :props="defaultProps">
      </ddv-select>
      <!-- <span v-for="item in value">{{item}}</span> -->
      <!-- :multiple="multiple" -->
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
        value: '选项3',
        name: '蚵仔煎',
        disabled: true
      }, {
        xx: '选项4',
        name: '龙须面'
      }, {
        xx: '选项5',
        name: '北京烤鸭',
        disabled: true
      }, {
        xx: '选项7',
        name: '北京烤鸭'
      }, {
        xx: '选项6',
        name: '北京烤鸭'
      }],
      defaultProps: {
        id: 'xx',
        name: 'name'
      },
      value: '',
      multiple: true,
      disabled: true
    }
  }
}
</script>