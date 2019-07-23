import BoxCardComponent from './index.vue'
// 添加install方法
const BoxCard = {
  install: function (Vue) {
    Vue.component("BoxCard", BoxCardComponent);
  }
}
// 导出
export default BoxCard