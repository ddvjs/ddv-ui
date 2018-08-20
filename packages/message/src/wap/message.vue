<template>
  <div class="ddv-ui">
    eeee
  </div>
</template>

<script>
export default {
  name: 'DdvMessage',
  props: {
    type: {
      type: String,
      validator (value) {
        return ['info', 'error', 'success', 'warning', 'loading'].indexOf(value) > -1
      }
    },
    message: {
      type: String
    },
    duration: {
      type: Number,
      default: 3000
    },
    position: {
      type: String,
      default: 'middle',
      validator (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) > -1
      }
    }
  }
}
</script>

