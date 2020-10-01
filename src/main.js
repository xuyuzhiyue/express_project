import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyLoad,{
 loading:require('./assets/img/common/placeholder.png')
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
