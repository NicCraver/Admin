<template>
  <div :class="isCollapse? 'Navbar_move' : 'Navbar'">
    <hamburger :is-active="sidebar" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb class="breadcrumb-container" />
    <el-dropdown>
      <div class="navbar_right">
        <img class="navbar_img" src="../../assets/img/photo-1490013616775-3ca8865fb129.jpeg" alt="">
        <span style="margin: 0 20px">Nic_</span>
      </div>
      <el-dropdown-menu slot="dropdown" show-timeout='0'>
        <el-dropdown-item><i class="el-icon-user-solid"></i>个人中心</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-s-tools"></i>账户设置</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-user-solid"></i>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hamburger from "./Hamburger/index";
import Breadcrumb from './Breadcrumb/index';
export default {
  name: "Navbar",
  components: { Hamburger,Breadcrumb },
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
      return !this.sidebar;
    }
  }
};
</script>

<style lang="scss">
.breadcrumb-container {
    float: left;
  }
.Navbar {
  transition: margin-left 0.28s;
  margin-left: 210px;
  line-height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.Navbar_move {
  transition: margin-left 0.28s;
  margin-left: 64px;
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
.navbar_right:hover {
  height: 50px;
  padding-left: 15px;
  cursor: hand;
  cursor: pointer;
  background: #fafafa;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.navbar_img {
  float: left;
  width: 35px;
  height: 35px;
  margin: 7px 0 0 0;
  border-radius: 30px;
  text-align: center;
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
