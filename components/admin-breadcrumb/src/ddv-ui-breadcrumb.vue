<template>
  <div class="ddvui-breadcrumb">
    <slot></slot>
  </div>
</template>
<style src="./ddv-ui-breadcrumb.css"/>

<script>
  export default {
    name: 'ddvUireadcrumb',
    props: {
      separator: {
        type: String,
        default: '/'
      }
    }
  }
</script>

