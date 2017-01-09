<template>
  <div>
    <tree :data="data" :props="defaultProps"
          @node-click="handleNodeClick"
          :render-content="my_render_function">
    </tree>
  </div>
</template>

<script type="text/ecmascript-6">
//  import treeView from '../../components/tree'
  import { Tree } from 'element-ui'
  import 'element-ui/lib/theme-default/tree.css'
  export default {
    data () {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1'
          }, {
            label: '二级 2-2'
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1'
          }, {
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      },
      my_render_function (h, {node}) {
        return h('span', [
          h('span', {
            attrs: {
              class: 'el-tree-node__label'
            }
          }, node.label),
          h('button', {
            class: 'button is-success'
          }, 'aaa')
        ])
      }
    },
    components: {
//      treeView
      Tree
    }
  }
</script>

<style lang="scss" scoped>
</style>