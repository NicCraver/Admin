<template>
  <div>
    <el-card class="box-card box_card">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.box_card {
  margin: 20px 0;
  width: 600px;
}
</style>

