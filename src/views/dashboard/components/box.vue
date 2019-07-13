<template>
  <div class="header_box">
    <div class="box_title">
      <div class="box_title_left">{{header}}</div>
      <div class="box_title_right">
        <el-tooltip class="item" effect="dark" :content="description" placement="top">
          <span style="cursor:pointer;"><i class="el-icon-warning-outline"></i></span>
        </el-tooltip>
      </div>
    </div>
    <slot></slot>

  </div>
</template>
<script>
export default {
  name: "Box",
  props: {
    header: {},
    description: {}
  }
};
</script>
<style lang="scss">
.header_box:nth-child(1) {
  margin-left: 0;
  box-sizing: border-box;
}
.header_box {
  width: 25%;
  margin-left: 20px;
  background: #fff;
  box-sizing: border-box;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  // padding: 5px 10px;
  padding: 15px 20px;
  .box_title {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 30px;
    .box_title_left {
      float: left;
      width: 80%;
    }
    .box_title_right {
      float: right;
    }
  }
}
</style>


