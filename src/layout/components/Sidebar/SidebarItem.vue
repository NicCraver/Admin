<template>
  <div>
    <template v-for="item in routers">
      <el-submenu :index="item.path" v-if="item.children&&item.meta">
        <template slot="title">
          <!-- {{item.meta}} -->
          <i class="el-icon-location"></i>
          <span slot="title">{{item.meta.title}}</span>
        </template>
        <sidebar-item :routers="item.children"></sidebar-item>
      </el-submenu>
      <el-menu-item :index="item.path" v-else-if="item.meta">
        <!-- {{item.meta}} -->
        <i class="el-icon-location"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </template>
    <!-- <el-submenu :index="item.module" v-if="item.children">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{item.module}}</span>
      </template>
      <Treelist :list="item.children"></Treelist>
    </el-submenu>-->
  </div>
  <!-- <div v-if="!item.hidden" class="menu-wrapper">
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{'submenu-title-noDropdown':!isNest}"
        >
          <i :class="onlyOneChild.meta.icon"></i>
          <span slot="title">{{onlyOneChild.meta.title}}</span>
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>-->
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    routers: Array
  },
  data() {
    return { isCollapse: true };
  },
  methods: {}
};
</script>