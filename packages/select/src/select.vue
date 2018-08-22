<template>
  <div class="ddv-select">
    <div>
      adsasadasdasda
    </div>
    <input
      type="text" 
      class="ddv-select__input"
      :class="{
        'ddv-select__disabled': disabled,
        'ddv-select__border': isShow && !disabled
      }"
      placeholder="请选择" 
      autocomplete="off" 
      readonly="readonly"
      v-model="value"
      @mouseenter="iconShow"
      @mouseleave="isIconShow=false"
      @click="showItem">
        <div 
        class="ddv-select__icon"
        :class="{
          'ddv-select__notAllowed': disabled,
          'ddv-select__pointer': !disabled,
          'ddv-select__up': isShow && !isIconShow
        }"
        @mouseenter="iconShow"
        @mouseleave="isIconShow=false">
          <i class="ddv-select__iconfont iconfont icon-jiantou" v-show="!isIconShow"></i>
          <i class="ddv-select__iconfont iconfont icon-danger" v-show="isIconShow" @click="emptyValue"></i>
        </div>

    <transition name="ddv-select-fade">
      <div class="ddv-select__dropdown" v-show="isShow">
        <div 
          class="el-select__dropdown__item"
          :class="{
            'el-select__highlight': value === item.label,
            'el-select__disabled': item.disabled
          }"
          v-for="item in selectList"
          :key="item.value"
          @click="selectItem(item)">
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
      type: [String, Array]
    },
    disabled: {
      type: Boolean,
      default: false
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
      isIconShow: false,
      arrow: '',
      selectprops: {
        value: 'value',
        label: 'label'
      },
      selectList: []
    }
  },
  methods: {
    iconShow () {
      if (this.value) {
        this.isIconShow = true
      }
    },
    emptyValue () {
      this.$emit('update:value', '')
    },
    showItem () {
      if (!this.disabled) {
        this.isShow = !this.isShow
      }
    },
    selectItem (item) {
      if (!item.disabled) {
        this.isShow = false
        this.$emit('update:value', item.label)
      }
    },
    init () {
      this.selectprops = Object.assign(this.selectprops, this.props)
      this.list.forEach(item => {
        let obj = {
          label: item[this.selectprops.label],
          value: item[this.selectprops.value]
        }
        if (item.disabled) {
          obj.disabled = item.disabled
        }
        this.selectList.push(obj)
      })
    }
  },
  created () {
    this.init()
  },
  mounted () {
  }
}
</script>