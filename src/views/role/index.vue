<template>
  <div>
    <q-form lw="100px">
      <q-form-item label="审批批人">
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </q-form-item>
      <q-form-item label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </q-form-item>
      <q-form-item label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </q-form-item>
      <q-form-item label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </q-form-item>
      <q-form-item label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </q-form-item>
      <q-form-item label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </q-form-item>
      <q-form-item label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </q-form-item>
      <q-form-item label="审批批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </q-form-item>
    </q-form>
    <el-row>
      <el-col :span="24">
        <div class="Query_Button">
          <el-button icon="el-icon-search" type="primary" size="medium">查询</el-button>
        </div>
        <div class="Query_Button">
          <el-button icon="el-icon-search" type="primary" size="medium">查询</el-button>
        </div>
        <div class="Query_Button">
          <el-button icon="el-icon-search" type="primary" size="medium">查询</el-button>
        </div>
        <div class="Query_Button">
          <el-button icon="el-icon-search" type="primary" size="medium">查询查询</el-button>
        </div>
        <div class="Query_Button">
          <el-button icon="el-icon-search" type="primary" size="medium">查询查询</el-button>
        </div>
        <div class="Query_Button">
          <el-button icon="el-icon-search" type="primary" size="medium">查询查询</el-button>
        </div>
      </el-col>
    </el-row>
    <div>
      <div class="table">
        <el-table :data="tableData" style="width: 100%" size="medium">
          <el-table-column fixed prop="date" label="微信昵称" width="">
          </el-table-column>
          <el-table-column prop="date" label="用户手机号" width="">
          </el-table-column>
          <el-table-column prop="date" label="物品名称" width="">
          </el-table-column>
          <el-table-column prop="date" label="条码号" width="">
          </el-table-column>
          <el-table-column prop="date" label="起租时间" width="">
          </el-table-column>
          <el-table-column prop="date" label="退租时间" width="">
          </el-table-column>
          <el-table-column prop="name" label="租金" width="">
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-tag effect="plain" type="success" size="medium">已退还</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="操作">
          </el-table-column>
        </el-table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "role",
  components: {},
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
</style>