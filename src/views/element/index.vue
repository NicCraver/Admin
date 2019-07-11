<template>
  <div>
    <div class="box_padding">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>PageHeader</span>
        </div>
        <div>
          <PageHeader title="Element组件" />
        </div>
        <div class="code">
          <div>
            //封装成了全局组件，组件地址：src/components/PageHeader
          </div>
          <div>使用方法：title中传入当前页面的title，返回功能封装在组件内，可直接调用</div>
          <div>{{PageHeader}} </div>
        </div>
      </el-card>
    </div>

    <div class="box_padding">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Input</span>
        </div>
        <div>
          <el-input class="width" v-model="input" maxlength="10" show-word-limit clearable placeholder="请输入内容"></el-input>
        </div>
        <div class="code">
          <div>使用方法：</div>
          <div>{{Input}} </div>
        </div>
      </el-card>
    </div>
    <div class="box_padding">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>PageHeader</span>
        </div>
        <div>
          <PageHeader title="Element组件" />
        </div>
        <div class="code">
          <div>
            //封装成了全局组件，组件地址：src/components/PageHeader
          </div>
          <div>使用方法：title中传入当前页面的title，返回功能封装在组件内，可直接调用</div>
          <div>{{PageHeader}} </div>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
export default {
  name: "elementDemo",
  components: {},
  data() {
    return {
      input: "",
      PageHeader: `<PageHeader title="element" />`,
      Input: `<el-input v-model="input" maxlength="10" show-word-limit clearable placeholder="请输入内容"></el-input>`
    };
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
.box_padding {
  margin: 30px 0 0 0;
}
.box_padding:nth-child(1) {
  margin: 0;
}
.code {
  margin: 20px;
  padding: 15px;
  background: rgb(240, 242, 245);
  div {
    margin: 20px;
  }
}
.width {
  margin: 20px;
  width: 500px;
}
</style>