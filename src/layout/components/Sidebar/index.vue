<template>
  <div>
    <logo :collapse="isCollapse" />
    <!-- <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg" :text-color="variables.menuText" :unique-opened="true" :active-text-color="variables.menuActiveText" :collapse-transition="false" mode="vertical">
        <template v-for="(item,index) in routes" v-if="!item.hidden">
          <div v-if="item.path=='/'">
            <router-link :to="item.path" :key="item.children[0].name">
              <el-menu-item class="submenu-title-noDropdown" :index="item.path+'/'+item.children[0].path">
                <i :class="item.children[0].meta.icon"></i>
                <span slot="title" v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
              </el-menu-item>
            </router-link>
          </div>
          <div v-else-if="item.children.length===1 && !item.children[0].children && !item.alwaysShow">
            <router-link :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
              <el-menu-item class="submenu-title-noDropdown" :index="item.path+'/'+item.children[0].path">
                <i :class="item.children[0].meta.icon"></i>
                <span slot="title" v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
              </el-menu-item>
            </router-link>
          </div>

          <el-submenu v-else ref="subMenu" :index="item.name||item.path" :key="item.name" popper-append-to-body>
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{item.meta.title}}</span>
            </template>
            <template v-for="child in item.children" v-if="!child.hidden">
              <router-link :to="item.path+'/'+child.path" :key="child.name">
                <el-menu-item :index="item.path+'/'+child.path">
                  <i :class="child.meta.icon"></i>
                  <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-scrollbar>-->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- :default-active="$router.constantRoutes.path" -->
      <el-menu class="el-menu-slide" router>
        <sidebar-item :routers="routes" />
        <!-- <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg" :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText" :collapse-transition="false" mode="vertical">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />-->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { constantRoutes } from "../../../router";
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
export default {
  name: "Sidebar",
  components: { SidebarItem, Logo },
  data() {
    return {
      showLogo: true
    };
  },
  created() {},
  mounted() {
    console.log("constantRoutes", constantRoutes);
  },
  methods: {},
  watch: {},
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      // console.log("this.$router.options.routes :", this.$router.options.routes);
      // return this.$router.options.routes;
      return constantRoutes;
    },
    activeMenu() {
      const route = this.$route;
      console.log("route :", route);
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar;
    }
  }
};
</script>

<style lang="scss"></style>
