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
      name: 'FlowApplyAdd',
      meta: {
        label: '提交申请',
        show: false
      },
      path: '/workflow/flowApply/add',
      component: lazyLoading('workflow/FlowApply/Add')
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
    },
    {
      name: 'ApplicationInfo',
      meta: {
        label: '申请信息',
        show: false
      },
      path: '/workflow/applicationInfo',
      component: lazyLoading('workflow/ApplicationInfo')
    },
    {
      name: 'ApplicationRecord',
      meta: {
        label: '审批流转记录',
        show: false
      },
      path: '/workflow/applicationRecord',
      component: lazyLoading('workflow/ApplicationRecord')
    },
    {
      name: 'ApplicationDeal',
      meta: {
        label: '审批流转记录',
        show: false
      },
      path: '/workflow/applicationDeal',
      component: lazyLoading('workflow/ApplicationDeal')
    },
    {
      name: 'DrawWorkFlow',
      meta: {
        label: '绘制审批流程',
        show: false
      },
      path: '/workflow/processDefine/drawWorkFlow',
      component: lazyLoading('workflow/ProcessDefine/DrawWorkFlow')
    }
  ]
}
