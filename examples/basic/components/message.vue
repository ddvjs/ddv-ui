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
			message: 'ppp',
			type: 'success',
			el: this.$refs.messageWrap
		})
		setTimeout(() => {
			this.$message({
				message: 'adsadsad',
				el: this.$refs.messageWrap
			})
		}, 1000);
	}
}
</script>

