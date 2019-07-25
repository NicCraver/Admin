<template>
  <div>
    <el-form class="Query_Form" :label-width="lw" size="medium">
      <slot>

      </slot>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    lw: {
      type: String
    }
  },
  methods: {}
};
</script>

