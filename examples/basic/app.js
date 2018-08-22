import Vue from 'vue'
import VueRouter from 'vue-router'
import Tree from './components/tree.vue'
import Message from './components/Message.vue'
import Select from './components/select.vue'
import Button from './components/button.vue'

Vue.use(VueRouter)

const Index = {
  render (h) {
    return h('h1', {
      style: {
        textAlign: 'center',
        marginTop: '250px',
        lineHeight: '60px',
        fontSize: '50px'
      }
    }, 'ddv-ui Examples')
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/tree',
      component: Tree
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/select',
      component: Select
    },
    {
      path: '/button',
      component: Button
    }
  ]
})

new Vue({
  router,
  template: `<router-view class="view"></router-view>`,
  el: '#app'
})
