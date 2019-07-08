<template>
  <div class="layout">
    <el-container style="height: 100%;">
      <el-aside width="auto">
        <Sidebar :class="isCollapse? 'sidebar-container1' : 'sidebar-container'" />
      </el-aside>
      <el-container>
        <el-header height="50">
          <Navbar />
        </el-header>
        <el-main :class="isCollapse? 'app_container1' : 'app_container'" class="container_Navbar">
          <AppMain />
          <!-- 15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>

          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br>
          15黄金卡号地块拉升到卡时间段静安寺考虑到 <br> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      console.log("this.sidebar", this.sidebar);
      return !this.sidebar;
    }
  }
};
</script>

<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  position: absolute;
  .el-header {
    // background-color: #b3c0d1;
    // color: #333;
    text-align: right;
    font-size: 12px;
    padding: 0;
  }
}
</style>
