import Vue from 'vue'
import app from './app.vue'
import router from './router'
import VueResource from 'vue-resource'
import './common/stylus/fonts.styl'
import './mock/mockServer'
import VueLazyload from "vue-lazyload"
Vue.use(VueResource)
Vue.use(VueLazyload, {

  loading: 'static/loading.gif',//这个是加载的loading过渡效果

})
new Vue({
  el: '#app',
  render: h=>h(app),
  router
})
