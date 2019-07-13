import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from "element-ui";

import "@/styles/index.scss"; // global css
import "element-ui/lib/theme-chalk/index.css";
import "./promission";
import PageHeader from '@/components/PageHeader/index.js'//引用全局组件PageHeader

import api from "./api"; // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.config.productionTip = false;

Vue.use(PageHeader);//使用全局组件PageHeader
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
