<template>
  <div class="ddv-ui">
    <div class="ddv-message" :class="type" v-if="type">
      <span><i class="iconfont" :class="icon"></i></span>
      <span class="ml10">{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DdvMessage'
}
</script>

