import Vue from 'vue'
import App from "./App";

// 导入组件库
import hsxUI from '../packages'
// 注册 执行该对象里面的Install
Vue.use(hsxUI)

// 关闭提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
