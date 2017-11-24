<template>
  <div>
    <img class="ddv-ui-qrcode-img" :src="url" v-if="url"></img>
    <pre class="ddv-ui-qrcode-error" v-html="error" v-else/>
  </div>
</template>

<script>
var QRCode

export default {
  name: 'ddvUiQrcode',
  props: {
    text: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: function () {
        return {
          margin: 0
        }
      }
    },
    error: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      url: ''
    }
  },
  methods: {
    toDataURL () {
      QRCode.toDataURL(this.text, this.options, (error, url) => {
        if (error) {
          this.error = (error && error.message) || error || 'unknown error'
          this.url = ''
        } else {
          this.error = ''
          this.url = url
        }
      })
    }
  },
  watch: {
    'text' () {
      this.toDataURL()
    }
  },
  mounted () {
    QRCode = require('qrcode')
    this.toDataURL()
  }
}
</script>
<style type="text/css">
  .ddv-ui-qrcode-img{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .ddv-ui-qrcode-error{
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    padding: 9px; 
    margin: 0;
    border: none;
  }
</style>