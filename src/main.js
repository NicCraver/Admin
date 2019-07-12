import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "@/styles/index.scss"; // global css
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./promission";
Vue.config.productionTip = false;
import api from "./api"; // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上
import PageHeader from '@/components/PageHeader/index.js'//引用全局组件Button
Vue.use(PageHeader);//使用全局组件Button

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
