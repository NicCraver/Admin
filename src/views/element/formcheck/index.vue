<template>
  <div>
    <PageHeader title="表单验证" />
    <BoxCard title="不能输入中文">
      <form1></form1>
    </BoxCard>
    <BoxCard title="111">
      <form1></form1>
    </BoxCard>
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
</style>