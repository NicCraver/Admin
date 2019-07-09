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
    return {
      screenWidth: document.documentElement.clientWidth, //屏幕宽度
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      isTrue: false
    };
  },
  created() {},
  mounted() {
    var _this = this;
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
      // console.log("_this.screenWidth", _this.screenWidth);
      if (_this.screenWidth < 1000) {
        _this.isTrue = true;
      } else {
        _this.isTrue = false;
      }
      if (_this.isTrue == true) {
        if (_this.sidebar == true) {
          _this.$store.dispatch("app/toggleSideBarFalse");
        }
      }
    };
  },
  methods: {},
  watch: {},
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
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
    text-align: right;
    font-size: 12px;
    padding: 0;
  }
}
.app_container {
  transition: margin-left 0.28s;
  margin-left: 210px;
}

.app_container1 {
  transition: margin-left 0.28s;
  margin-left: 64px;
}
</style>
