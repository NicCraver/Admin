import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'

import nestedRouter from './modules/nested'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },

  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-my-branchOffice' }
    }]
  },
  {
    path: '/element',
    component: Layout,
    redirect: '/element',
    name: 'Element',
    meta: { title: 'Element组件', icon: 'el-icon-my-element' },
    children: [
      {
        path: 'elementcomponent',
        name: 'ElementComponent',
        component: () => import('@/views/element/index'),
        meta: { title: 'Element组件封装' }
      },
      {
        path: 'formcheck',
        name: 'FormCheck',
        component: () => import('@/views/element/formcheck'),
        meta: { title: '表单验证' }
      }
    ]
  },
  // nestedRouter,
  {
    path: '/menu1doem',
    component: Layout,
    redirect: '/menu1doem/doem1',
    name: 'Menu1doem',
    meta: { title: 'Menu1doem', icon: 'el-icon-my-medicalExamination' },
    children: [
      {
        path: 'doem1',
        name: 'Menu1Doem1',
        component: () => import('@/views/menu1/demo1.vue'),
        meta: { title: 'Menu1Doem1' }
      },
      {
        path: 'doem2',
        name: 'Menu1Doem2',
        component: () => import('@/views/menu1/demo2.vue'),
        meta: { title: 'Menu1Doem2' }
      },
      {
        path: 'doem3',
        name: 'Menu1Doem3',
        component: () => import('@/views/menu1/demo3.vue'),
        meta: { title: 'Menu1Doem3' }
      },
    ]
  },
  {
    path: '/menu2doem',
    component: Layout,
    redirect: '/menu2doem/doem1',
    name: 'Menu2doem',
    meta: { title: 'Menu2doem', icon: 'el-icon-my-enterprise' },
    children: [
      {
        path: 'doem1',
        name: 'Menu2Doem1',
        component: () => import('@/views/menu2/demo1.vue'),
        meta: { title: 'Menu2Doem1' }
      },
      {
        path: 'doem2',
        name: 'Menu2Doem2',
        component: () => import('@/views/menu2/demo2.vue'),
        meta: { title: 'Menu2Doem2' }
      },
      {
        path: 'doem3',
        name: 'Menu2Doem3',
        component: () => import('@/views/menu2/demo3.vue'),
        meta: { title: 'Menu2Doem3' }
      },
    ]
  },
  {
    path: '/menu3doem',
    component: Layout,
    redirect: '/menu3doem/doem1',
    name: 'Menu3doem',
    meta: { title: 'Menu3doem', icon: 'el-icon-my-overview' },
    children: [
      {
        path: 'doem1',
        name: 'Menu3Doem1',
        component: () => import('@/views/menu3/demo1.vue'),
        meta: { title: 'Menu3Doem1' }
      },
      {
        path: 'doem2',
        name: 'Menu3Doem2',
        component: () => import('@/views/menu3/demo2.vue'),
        meta: { title: 'Menu3Doem2' }
      },
      {
        path: 'doem3',
        name: 'Menu3Doem3',
        component: () => import('@/views/menu3/demo3.vue'),
        meta: { title: 'Menu3Doem3' }
      },
    ]
  },
  {
    path: '/roles',
    component: Layout,
    redirect: '/roles/role',
    alwaysShow: true,
    name: 'Roles',
    meta: { title: '权限管理', icon: 'el-icon-my-branchOffice' },
    children: [
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/role/index'),
        meta: { title: '角色' }
      }
    ]
  },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
