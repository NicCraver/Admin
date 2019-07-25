import QueryFormComponent from './index.vue'
// 添加install方法
const QForm = {
  install: function (Vue) {
    Vue.component("QForm", QueryFormComponent);
  }
}
// 导出
export default QForm