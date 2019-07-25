import QueryFormItemComponent from './index.vue'
// 添加install方法
const QFormItem = {
  install: function (Vue) {
    Vue.component("QFormItem", QueryFormItemComponent);
  }
}
// 导出
export default QFormItem