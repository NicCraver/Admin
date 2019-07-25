<template>
  <div class="Query_Box">
    <el-form-item :label="label">
      <!-- <div class="Query_Box_slot"> -->
      <slot class="Query_Box_slot">

      </slot>
      <!-- </div> -->
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "QFormItem",
  props: {
    label: {
      type: String
    }
  },
  methods: {}
};
</script>
<style lang="scss">
</style>

