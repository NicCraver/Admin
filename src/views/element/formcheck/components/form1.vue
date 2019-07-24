<template>
  <div>
    <el-form :model="nameform" :rules="nameformrules" ref="nameform" label-width="50px" size="medium" class="demo-ruleForm">
      <el-form-item label="测试" prop="name">
        <el-input v-model="nameform.name" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('nameform')">提交</el-button>
        <el-button @click="resetForm('nameform')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "form1",
  components: {},
  data() {
    var validate = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入"));
      } else if (/[\u4E00-\u9FA5]/g.test(value)) {
        callback(new Error("不能输入中文"));
      } else if (/^ +| +$/g.test(value)) {
        callback(new Error("不能输入空格"));
      } else {
        callback();
      }
    };
    return {
      //表单数据
      nameform: {
        name: ""
      },
      //表单规则
      nameformrules: {
        name: [{ required: true, validator: validate, trigger: "blur" }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message.success("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
</style>