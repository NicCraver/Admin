<template>
  <div class="Pagination">
    <el-pagination 
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange" 
    :current-page="currentPage4" 
    :page-sizes="[10, 30, 50, 100]" 
    :page-size="pagesize"
    layout="total, sizes, prev, pager, next, jumper" 
    :total="count">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "",
  components: {

  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
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
.Pagination {
  padding: 20px;
}
</style>