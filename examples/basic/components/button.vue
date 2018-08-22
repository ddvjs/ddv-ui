<template>
  <div class="ml50 mt50">
    <div>
      <ddv-button>默认按钮</ddv-button>
      <ddv-button type="primary" size="medium">主要按钮</ddv-button>
      <ddv-button type="success" size="small">成功按钮</ddv-button>
      <ddv-button type="info" size="mini">信息按钮</ddv-button>
      <ddv-button type="warning">警告按钮</ddv-button>
      <ddv-button type="danger">危险按钮</ddv-button>
    </div>

    <div class="mt20">
      <ddv-button plain>朴素按钮</ddv-button>
      <ddv-button type="primary" plain>主要按钮</ddv-button>
      <ddv-button type="success" plain>成功按钮</ddv-button>
      <ddv-button type="info" plain>信息按钮</ddv-button>
      <ddv-button type="warning" plain>警告按钮</ddv-button>
      <ddv-button type="danger" plain>危险按钮</ddv-button>
    </div>

    <div class="mt20">
      <ddv-button round>圆角按钮</ddv-button>
      <ddv-button type="primary" round>主要按钮</ddv-button>
      <ddv-button type="success" round>成功按钮</ddv-button>
      <ddv-button type="info" round>信息按钮</ddv-button>
      <ddv-button type="warning" round>警告按钮</ddv-button>
      <ddv-button type="danger" round>危险按钮</ddv-button>
    </div>

    <div class="mt20">
      <ddv-button icon="icon-search" circle></ddv-button>
      <ddv-button type="primary" icon="icon-edit" circle></ddv-button>
      <ddv-button type="success" icon="icon-check" circle></ddv-button>
      <ddv-button type="info" icon="icon-message" circle></ddv-button>
      <ddv-button type="warning" icon="icon-star-off" circle></ddv-button>
      <ddv-button type="danger" icon="icon-delete" circle></ddv-button>
    </div>
    
  </div>
</template>

<script>
import { Button } from 'ddv-ui'

export default {
  components: {
    'ddv-button': Button
  },
  data () {
    return {

    }
  }
}
</script>