<template>
  <div class="Query_Box">
    <el-form-item :label="label">
      <slot class="Query_Box_slot">

      </slot>
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

