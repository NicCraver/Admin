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
    </q-form>
    <el-row>
      <el-col :span="24">
        <div class="Query_Button">
          <el-button icon="el-icon-search" type="primary" size="medium">查询</el-button>
        </div>
        <div class="Query_Button">
          <el-button @click="addRole" icon="el-icon-plus" type="primary" size="medium">新增</el-button>
        </div>
      </el-col>
    </el-row>
    <div>
      <div class="table">
        <el-table :data="tableData" style="min-width:900px">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <div class="role_boxs">
                  <div class="role_box">
                    <el-form-item label="订单管理：">
                      <el-tag class="tag" v-for="item in items" :key="item.label" :type="item.type" effect="plain" size="small">
                        {{ item.label }}
                      </el-tag>
                    </el-form-item>
                  </div>
                  <div class="role_box">
                    <el-form-item label="订单管理：">
                      <el-tag class="tag" v-for="item in items" :key="item.label" :type="item.type" effect="plain" size="small">
                        {{ item.label }}
                      </el-tag>
                    </el-form-item>
                  </div>
                  <div class="role_box">
                    <el-form-item label="订单管理：">
                      <el-tag class="tag" v-for="item in items" :key="item.label" :type="item.type" effect="plain" size="small">
                        {{ item.label }}
                      </el-tag>
                    </el-form-item>
                  </div>
                  <div class="role_box">
                    <el-form-item label="订单管理：">
                      <el-tag class="tag" v-for="item in items" :key="item.label" :type="item.type" effect="plain" size="small">
                        {{ item.label }}
                      </el-tag>
                    </el-form-item>
                  </div>
                </div>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="	唯一识别码" prop="id">
          </el-table-column>
          <el-table-column label="角色名称" prop="name">
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-tag effect="dark" size="medium">{{scope.row.address}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" prop="date">
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="150">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
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
      num1: 4,
      num2: 5,
      sumFromChild:0,
      value: "",
      formInline: {
        user: "",
        region: ""
      },
      items: [
        { type: "", label: "查询" },
        { type: "", label: "新增" },
        { type: "", label: "详情" },
        { type: "", label: "导出" },
        { type: "", label: "修改" },
        { type: "", label: "删除" }
      ],
      tableData: [
        {
          id: "12987122",
          name: "admin",
          category: "管理员",
          address: "正在使用",
          date: "2019-7-25"
        },
        {
          id: "12987123",
          name: "user",
          category: "普通会员",
          address: "正在使用",
          date: "2019-7-25"
        },
        {
          id: "12987124",
          name: "svip",
          category: "SVIP",
          address: "正在使用",
          date: "2019-7-25"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    receiveChildSum(sum){ //自定义事件，接收子组件的和
      this.sumFromChild = sum;
    },
    addRole() {
      this.$router.push("/roles/addRole");
    },
    onSubmit() {
      console.log("submit!");
    },
    handleEdit(index, row) {},
    handleDelete(index, row) {}
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
.tag {
  margin-left: 10px;
}

.role_boxs {
  display: flex;
  flex-flow: wrap;
  .role_box {
    width: 50%;
    .el-form-item__label {
      padding: 0;
    }
    .el-form-item {
      margin: 0;
      padding: 0;
    }
  }
}
</style>