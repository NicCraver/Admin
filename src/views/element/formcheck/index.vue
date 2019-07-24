<template>
  <div>
    <PageHeader title="表单验证" />
    <div class="form_wrap">
      <BoxCard title="不能输入中文">
        <form1></form1>
      </BoxCard>
      <BoxCard title="111">
        <form1></form1>
      </BoxCard>
    </div>

  </div>
</template>

<script>
import form1 from "./components/form1";
export default {
  name: "formcheck",
  components: { form1 },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
.form_wrap {
  width: 600px;
  margin: 50px auto;
}
</style>