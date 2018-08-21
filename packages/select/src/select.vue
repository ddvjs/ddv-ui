<template>
  <div class="ddv-select">
    <input 
      type="text" 
      class="ddv-select__input" 
      :class="{'ddv-select__border':isShow}"
      placeholder="请选择" 
      autocomplete="off" 
      readonly="readonly"
      v-model="value"
      @click="showItem">
      <div class="ddv-select__icon" :class="{'ddv-select__up':isShow}">
        <i class="ddv-select__iconfont iconfont icon-jiantou"></i>
      </div>

    <transition name="ddv-select-fade">
      <div class="ddv-select__dropdown" v-show="isShow">
        <div 
          class="el-select__dropdown__item" 
          v-for="item in selectList"
          :key="item.value"
          @click="selectItem(item.label)">
          {{item.label}}
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import '../../style/src/base.css'
import '../../style/src/select.css'
import '../../style/src/iconfont/iconfont.css'

export default {
  props: {
    list: {
      type: Array
    },
    value: {
      type: String
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
      isShow: false,
      arrow: '',
      selectprops: {
        value: 'value',
        label: 'label'
      },
      selectList: []
    }
  },
  methods: {
    showItem () {
      this.isShow = !this.isShow
    },
    selectItem (value) {
      this.isShow = false
      this.$emit('update:value', value)
    },
    init () {
      this.selectprops = Object.assign(this.selectprops, this.props)
      this.list.forEach(item => {
        let obj = {
          label: item[this.selectprops.label],
          value: item[this.selectprops.value]
        }
        this.selectList.push(obj)
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>