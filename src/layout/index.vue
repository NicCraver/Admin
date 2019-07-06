<template>
  <div class="layout">
    <el-container style="height: 100%; border: 1px solid #3c4155">
      <el-aside width="201px" style="background-color: rgb(238, 241, 246)">
        <Sidebar />
      </el-aside>
      <el-container class="container_Navbar">
        <el-header height="50">
          <Navbar />
        </el-header>

        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>

    <!-- <el-container>
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Navbar />
        </el-header>
        <el-main>
          <AppMain />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container> -->
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/index";
import Navbar from "./components/Navbar";
import AppMain from "./components/AppMain";
export default {
  name: "layout",
  components: { Sidebar, Navbar, AppMain },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return { tableData: Array(20).fill(item) };
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  position: absolute;
  .container_Navbar {
    .el-header {
      background-color: #b3c0d1;
      color: #333;
      text-align: right;
      font-size: 12px;
      padding: 0;
    }
    .el-aside {
      color: #333;
    }
  }
}
// layout
// .layout {
//   padding: 0;
//   height: 100%;
//   box-sizing: border-box;
//   .el-header,
//   .el-footer {
//     background-color: #b3c0d1;
//     color: #333;
//     text-align: center;
//     // line-height: 60px;
//     padding: 0;
//     height: 100%;
//   }

//   .el-aside {
//     background-color: #d3dce6;
//     color: #333;
//     text-align: center;
//     height: 100%;
//     padding: 0;
//   }

//   .el-main {
//     background-color: #e9eef3;
//     color: #333;
//     text-align: center;
//     padding: 0;
//     height: 100%;
//     // line-height: 160px;
//   }
// }

// body > .el-container {
//   margin-bottom: 40px;
// }

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
//   line-height: 260px;
// }

// .el-container:nth-child(7) .el-aside {
//   line-height: 320px;
// }
</style>
