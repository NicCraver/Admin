<template>
  <div :class="isCollapse? 'Navbar1' : 'Navbar'">
    <hamburger :is-active="sidebar" class="hamburger-container" @toggleClick="toggleSideBar" />
    <!-- <span class="Toggle_Button" ><i class="el-icon-s-unfold"></i> 王小虎</span> -->
    <span style="margin-right: 15px">王小虎</span>
    <el-dropdown>
      <i class="el-icon-setting"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hamburger from "./Hamburger/index";
export default {
  name: "Navbar",
  components: { Hamburger },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    }
  },
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
.Navbar {
  transition: margin-left .28s;
  margin-left: 210px;
  padding-right: 20px;
  line-height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.Navbar1 {
  transition: margin-left .28s;
  margin-left: 64px;
  padding-right: 20px;
  line-height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
}
</style>
