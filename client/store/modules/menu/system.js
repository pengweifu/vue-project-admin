import lazyLoading from './lazyLoading'

export default {
  name: 'System',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false,
    label: '系统管理'
  },

  children: [
    {
      name: 'Dept',
      meta: {
        label: '部门管理'
      },
      path: '/system/dept',
      component: lazyLoading('system/Dept')
    },
    {
      name: 'User',
      meta: {
        label: '用户管理'
      },
      path: '/system/user',
      component: lazyLoading('system/User')
    },
    {
      name: 'Role',
      meta: {
        label: '角色管理'
      },
      path: '/system/role',
      component: lazyLoading('system/Role')
    },
    {
      name: 'Menu',
      meta: {
        label: '菜单管理'
      },
      path: '/system/menu',
      component: lazyLoading('system/Menu')
    },
    {
      name: 'FormManager',
      meta: {
        label: '数据表构造器'
      },
      path: '/system/formManager',
      component: lazyLoading('system/FormManager')
    }
  ]
}
