import lazyLoading from './lazyLoading'

export default {
  name: 'ViewTemplate',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false,
    label: '视图模板管理'
  },

  children: [
    {
      name: 'ViewList',
      meta: {
        label: '列表模板'
      },
      path: '/viewTemplate/viewList',
      component: lazyLoading('viewTemplate/ViewList')
    },
    {
      name: 'ViewForm',
      meta: {
        label: '单表新增'
      },
      path: '/viewTemplate/viewForm',
      component: lazyLoading('viewTemplate/ViewForm')
    },
    {
      name: 'ViewManyForm',
      meta: {
        label: '主子表新增'
      },
      path: '/viewTemplate/viewManyForm',
      component: lazyLoading('viewTemplate/ViewManyForm')
    },
    {
      name: 'ViewTreeList',
      meta: {
        label: '树形列表'
      },
      path: '/viewTemplate/viewTreeList',
      component: lazyLoading('viewTemplate/ViewTreeList')
    },
    {
      name: 'ViewLeftTreeRightList',
      meta: {
        label: '左树由表'
      },
      path: '/viewTemplate/viewLeftTreeRightList',
      component: lazyLoading('viewTemplate/ViewLeftTreeRightList')
    }
  ]
}
