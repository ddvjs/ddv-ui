<template>
	<div ref="messageWrap" class="p15">
		<h3>电脑版</h3>
		<div class="mt10 mb30">
			<button @click="error" class="btn btn-danger">error</button>
			<button @click="success" class="btn btn-success">success</button>
			<button @click="warning" class="btn btn-warning">warning</button>
			<button @click="info" class="btn btn-info">info</button>
		</div>

		<h3>手机版</h3>
		<div>
			<div class="mt20">
				<span>position</span>
				<select v-model="position">
					<option>top</option>
					<option>middle</option>
					<option>bottom</option>
				</select>
			</div>
			<div class="mt20">
				<span>type</span>
				<select v-model="type">
					<option disabled value="">请选择</option>
					<option>success</option>
					<option>warning</option>
					<option>error</option>
					<option>info</option>
					<option>none</option>
				</select>
			</div>
			<button @click="wap" class="btn btn-default mt20">弹出</button>			
		</div>
		
	</div>
</template>

<style scoped>
select{
	width: 200px;
	height: 36px;
	margin-left: 10px;
	outline: none;
	border: 1px solid #ccc;
}
</style>

<script>
import Vue from 'vue'
import { Message } from 'ddv-ui'
Vue.prototype.$message = Message

export default {
  data () {
    return {
      type: '',
      position: 'middle'
    }
  },
  methods: {
    error () {
      this.$message.error('error')
    },
    success () {
      this.$message.success('success')
    },
    warning () {
      this.$message.warning('warning')
    },
    info () {
      this.$message.info('info')
    },
    wap () {
      if (this.type === 'none' || this.type === '') {
        this.$message({
          client: 'wap',
          message: '手机版',
          position: this.position
        })
      } else {
        this.$message({
          client: 'wap',
          message: '手机版',
          type: this.type,
          position: this.position
        })
      }
    }
  }
}
</script>

