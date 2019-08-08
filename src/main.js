import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from "element-ui";
import VCharts from 'v-charts'
import "@/styles/index.scss"; // global css
import "element-ui/lib/theme-chalk/index.css";
import "./promission";
import echarts from "echarts";
import api from "./api"; // 导入api接口

import NicLib from 'niclib';
// import 'niclib/src/styles/index.scss'
Vue.use(NicLib);
Vue.use(ElementUI);
Vue.use(VCharts);
Vue.prototype.$echarts = echarts;
Vue.prototype.$api = api; // 将api挂载到vue的原型上
// 组件
import PageHeader from '@/components/PageHeader/index.js'//引用全局组件PageHeader
import BoxCard from '@/components/BoxCard/index.js'//引用全局组件PageHeader
import QForm from '@/components/QueryForm/index.js'//引用全局组件PageHeader
import QFormItem from '@/components/QueryFormItem/index.js'//引用全局组件PageHeader
Vue.use(QFormItem);
Vue.use(QForm);
Vue.use(BoxCard);
Vue.use(PageHeader);//使用全局组件PageHeader


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
