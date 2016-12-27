import lazyLoading from './lazyLoading'

export default {
  name: 'Workfolw',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: '工作流管理'
  },

  children: [
    {
      name: 'ProcessDefine',
      meta: {
        label: '审批流程'
      },
      path: '/workflow/processDefine',
      component: lazyLoading('workflow/ProcessDefine')
    },
    {
      name: 'Template',
      meta: {
        label: '表单模板'
      },
      path: '/workflow/template',
      component: lazyLoading('workflow/Template')
    },
    {
      name: 'TemplateAdd',
      meta: {
        label: '表单模板/新增',
        show: false
      },
      path: '/workflow/template/add',
      component: lazyLoading('workflow/Template/Add')
    },
    {
      name: 'FlowApply',
      meta: {
        label: '起草申请'
      },
      path: '/workflow/flowApply',
      component: lazyLoading('workflow/FlowApply')
    },
    {
      name: 'MyTaskFlow',
      meta: {
        label: '待我审批'
      },
      path: '/workflow/myTaskFlow',
      component: lazyLoading('workflow/MyTaskFlow')
    },
    {
      name: 'MyApplication',
      meta: {
        label: '我的申请'
      },
      path: '/workflow/myApplication',
      component: lazyLoading('workflow/MyApplication')
    }
  ]
}
