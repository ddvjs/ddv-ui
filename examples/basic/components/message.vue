<template>
	<div ref="messageWrap">
	</div>
</template>

<script>
import Vue from 'vue'
import { Message } from 'ddv-ui'
Vue.prototype.$message = Message

export default {
  mounted () {
		this.$message({
			client: 'wap',
			message: 'ppp',
			type: 'success',
			el: this.$refs.messageWrap
		})
	}
}
</script>

