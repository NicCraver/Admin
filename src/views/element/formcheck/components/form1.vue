<template>
  <div>
    <el-form :model="aaaaform" :rules="aaaaformrules" ref="aaaaform" label-width="120px" size="medium" class="demo-ruleForm">
      <el-form-item label="名称" prop="aaaa">
        <el-input v-model="aaaaform.aaaa"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="bbbb">
        <el-input v-model="aaaaform.bbbb"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
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
        callback(new Error("请再次输入密码"));
      } else if (/[\u4E00-\u9FA5]/g.test(value)) {
        callback(new Error("不能输入中文"));
      } else {
        callback();
      }
    };
    return {
      //表单数据
      aaaaform: {
        aaaa: "",
        bbbb: ""
      },
      //表单规则
      aaaaformrules: {
        aaaa: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        bbbb: [{ required: true, message: "请选择活动区域", trigger: "change" }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
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