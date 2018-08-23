<template>
  <div>
    <ddv-dialog 
      title="提示"
      :visible.sync="dialogVisible">
      <div>
        这是一段信息
        <ddv-dialog title="dddd" :visible.sync="xxx" width="30%">
          sssss
        </ddv-dialog>
      </div>
      <div slot="footer">
        <ddv-button type="primary" @click="pp">ssss</ddv-button>
      </div>
    </ddv-dialog>
    <ddv-dialog title="dddd" :visible.sync="xoo" width="30%" :closeOnClickModal="false">
      kkkk
    </ddv-dialog>
  </div>
</template>

<script>
import { Dialog, Button } from 'ddv-ui'

export default {
  components: {
    'ddv-dialog': Dialog,
    'ddv-button': Button
  },
  data () {
    return {
      dialogVisible: false,
      xxx: false,
      xoo: true
    }
  },
  methods: {
    pp () {
      this.xxx = true
    }
  },
  mounted () {
    setTimeout(() => {
      this.dialogVisible = true
    }, 500)
  }
}
</script>