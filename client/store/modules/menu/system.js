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
      name: 'Role',
      meta: {
        label: '角色管理'
      },
      path: '/system/role',
      component: lazyLoading('system/Role')
    },
    {
      name: 'QxButton',
      meta: {
        label: '按钮权限管理'
      },
      path: '/system/qxbutton',
      component: lazyLoading('system/QxButton')
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
      name: 'Button',
      meta: {
        label: '按钮管理'
      },
      path: '/system/button',
      component: lazyLoading('system/Button')
    }
  ]
}
