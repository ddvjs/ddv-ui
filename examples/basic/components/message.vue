<template>
	<div ref="messageWrap" class="p15">
		<button @click="error" class="btn btn-danger">error</button>
		<button @click="success" class="btn btn-success">success</button>
		<button @click="warning" class="btn btn-warning">warning</button>
		<button @click="info" class="btn btn-info">info</button>
		<button @click="wap" class="btn btn-default">手机版</button>
	</div>
</template>

<script>
import Vue from 'vue'
import { Message } from 'ddv-ui'
Vue.prototype.$message = Message

export default {
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
			this.$message({
				client: 'wap',
				message: '手机版'
			})
		}
	},
  mounted () {
		setTimeout(() => {
			this.$message({
				message: '这是一条神秘的消息',
				type: 'success'
			})
		}, 3000)
	}
}
</script>

