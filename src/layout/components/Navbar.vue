<template>
  <div class="Navbar">
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
  computed: { ...mapGetters(["sidebar"]) }
};
</script>

<style lang="scss"></style>
