import Vue from 'vue'
import VueRouter from 'vue-router'
import Tree from './components/tree.vue'
Vue.use(VueRouter)

const Index = {
  render (h) {
    return h('h1', {
      style: {
        textAlign: 'center',
        marginTop: '50%',
        transform: 'translateY(-30px)',
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
    }
  ]
})

new Vue({
  router,
  template: `<router-view class="view"></router-view>`,
  el: '#app'
})
