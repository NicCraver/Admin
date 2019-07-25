<template>
  <div>
    <el-form class="Query_Form" :label-width="lw" size="medium">
      <slot>

      </slot>
      <!-- <el-form-item class="Query_Box" label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item class="Query_Box" label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item class="Query_Box" label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item class="Query_Box" label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item class="Query_Box" label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item class="Query_Box" label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    lw: {
      type: String
    },
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

