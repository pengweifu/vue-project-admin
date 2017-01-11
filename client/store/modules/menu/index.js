import * as types from '../../mutation-types'
// import lazyLoading from './lazyLoading'
// import charts from './charts'
// import uifeatures from './uifeatures'
// import components from './components'
// import tables from './tables'
import system from './system'
import activiti from './activiti'
import template from './template'

// show: meta.label -> name
// name: component name
// meta.label: display label
// 这个对象需要从后台获取
const state = {
  items: [
    // {
    //   name: 'Dashboard',
    //   path: '/dashboard',
    //   meta: {
    //     icon: 'fa-tachometer'
    //   },
    //   component: lazyLoading('dashboard', true)
    // },
    // charts,
    // uifeatures,
    // components,
    // tables
    system,
    activiti,
    template
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
