<template>
  <div class="ml50 mt50">
    <ddv-dialog 
      title="提示" 
      width="30%"
      :visible.sync="dialogVisible"
      >
      这是一段信息
    </ddv-dialog>
       
  </div>
</template>

<script>
import { Dialog } from 'ddv-ui'

export default {
  components: {
    'ddv-dialog': Dialog
  },
  data () {
    return {
      dialogVisible: true
    }
  }
}
</script>