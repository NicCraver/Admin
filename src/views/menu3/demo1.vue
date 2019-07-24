<template>
  <div>
    <!-- 查询 -->
    <div>
      <el-form ref="InquireForm" :model="InquireForm" label-width="80px" size="medium">
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="条码号：">
                <el-input v-model="InquireForm.aaaa" clearable></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="状态：">
                <el-select v-model="InquireForm.bbbb" placeholder="请选择" style="width:100%;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid_button grid-content bg-purple">&#12288;
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid_button grid-content bg-purple">
              <el-button class="" type="primary" size="medium" icon="el-icon-search">查询</el-button>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid_button grid-content bg-purple-light">
              <el-button class="" type="primary" size="medium">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <el-row>
        <el-col :span="24">
          <el-alert class="alert" title="备注：使用扫码枪时将鼠标光标移入【条码号】右侧输入文本框中" type="error" :closable="false">
          </el-alert>
        </el-col>
      </el-row>
    </div>
    <!-- 设备数据 -->
    <div class="source">
      <div class="block">
        <div class="title">
          总设备
        </div>
        <div class="content">
          100
        </div>
      </div>
      <div class="block">
        <div class="title">
          可租借
        </div>
        <div class="content">
          40
        </div>
      </div>
      <div class="block">
        <div class="title">
          租借中
        </div>
        <div class="content">
          60
        </div>
      </div>

    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="微信昵称" width="">
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
            <el-tag type="danger" effect="dark">租借中
            </el-tag>
            <el-tag effect="dark">已退还
            </el-tag>
            <el-tag effect="dark" type="success">已退还
            </el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag effect="plain" type="success" size="medium">已退还</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="操作">
        </el-table-column>
      </el-table>
    </div>
    <div class="Pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="InquireForm.page" :page-sizes="[10, 20, 40, 100]" :page-size="InquireForm.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      //表单数据
      InquireForm: {
        aaaa: 123,
        bbbb: 456,
        page: 1,
        pagesize: 10
      },
      count: 100,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log("row", row);
      console.log("rowIndex", rowIndex);
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
.source {
  display: block;
  padding: 24px;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  .block {
    text-align: center;
    flex: 1;
    border-right: 1px solid #eff2f6;
    text-align: center;
    .title {
      font-size: 16px;
    }
    .content {
      margin-top: 10px;
      font-size: 24px;
    }
  }
  .block:last-child {
    border-right: none;
  }
}
.alert {
  float: right;
  margin-bottom: 20px;
  width: 430px;
}
.grid_button {
  text-align: right;
}
.Pagination {
  text-align: center;
}
</style>