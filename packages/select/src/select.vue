<template>
  <div 
    class="ddv-select"
    :class="{
      'ddv-select__disabled': disabled,
      'ddv-select__border': isShow && !disabled
    }"  
    @click="showItem">
    <div v-if="multiple">
      <span 
        class="ddv-select__text" 
        v-show="!multipleList.length">
        请选择
      </span>
      <span 
        class="ddv-select__tag" 
        v-for="(item,index) in multipleList" 
        :key="item.id">
        <span class="ddv-select__tag__text">{{item.name}}</span>
        <span @click.stop="delMultipleItem(index)">
          <i class="ddv-select__tag iconfont icon-danger"></i>
        </span>
      </span>
    </div>

    <input
      v-if="!multiple"
      type="text" 
      class="ddv-select__input"
      :class="{'ddv-select__disabled': disabled}"
      placeholder="请选择" 
      autocomplete="off" 
      readonly="readonly"
      v-model="value"
      @mouseenter="iconShow"
      @mouseleave="isIconShow=false">
        <div 
        class="ddv-select__icon"
        :class="{
          'ddv-select__notAllowed': disabled,
          'ddv-select__pointer': !disabled,
        }"
        @mouseenter="iconShow"
        @mouseleave="isIconShow=false">
          <div 
            class="ddv-select__transition"
            :class="{'ddv-select__up': isShow && !isIconShow}">
            <i 
              class="ddv-select__iconfont iconfont icon-jiantou" 
              v-show="!isIconShow">
            </i>
            <i 
              class="ddv-select__iconfont iconfont icon-danger" 
              v-show="isIconShow" 
              @click.stop="emptyValue">
            </i>
          </div>
        </div>

    <transition name="ddv-select-fade">
      <div 
        class="ddv-select__dropdown" 
        v-show="isShow">
        <div 
          v-for="item in selectList"
          :key="item.id"
          @click.stop="selectItem(item)"
          class="el-select__dropdown__item"
          :class="{
            'el-select__highlight': multipleList.indexOf(item) > -1 || (id === item.id),
            'el-select__disabled': item.disabled
          }">
          {{item.name}}
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
      type: [String, Array, Number]
    },
    disabled: Boolean,
    multiple: Boolean,
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
      id: '',
      selectprops: {
        id: 'id',
        name: 'name'
      },
      selectList: [],
      multipleList: []
    }
  },
  methods: {
    delMultipleItem (index) {
      this.multipleList.splice(index, 1)
    },
    iconShow () {
      if (this.value && !this.multiple) {
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
        if (this.multiple) {
          let index = this.multipleList.indexOf(item)
          if (index > -1) {
            this.multipleList.splice(index, 1)
          } else {
            this.multipleList.push(item)
          }
          this.$emit('update:value', this.multipleList)
        } else {
          this.isShow = false
          this.id = item.id
          this.$emit('update:value', item.name)
        }
      }
    },
    init () {
      this.selectprops = Object.assign(this.selectprops, this.props)
      this.list.forEach(item => {
        let obj = {
          id: item[this.selectprops.id],
          name: item[this.selectprops.name]
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
  mounted () {}
}
</script>