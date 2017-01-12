<template>
  <div style="width:1000px;">
    <grid-head :columns="columns"
               :rest-width="restWidth"
               :flex-count="flexCount"/>
    <grid-body :columns="columns"
               :tree-structure="treeStructure"
               :data-source="data"
               :rest-width="restWidth"
               :flex-count="flexCount"/>
  </div>
</template>
<script type="text/ecmascript-6">
  import Utils from '../utils/index.js'
  import GridHead from './GridHead.vue'
  import GridBody from './GridBody.vue'
  export default {
    name: 'grid-panel',
    props: {
      treeStructure: {
        type: Boolean,
        default: function () {
          return false
        }
      },
      columns: {
        type: Array,
        default: function () {
          return []
        }
      },
      dataSource: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        gridPanelWidth: 0
      }
    },
    computed: {
      data: function () {
        let me = this
        if (me.treeStructure) {
          let data = Utils.MSDataTransfer.treeToArray(me.dataSource)
          console.log(data)
          return data
        }
        return me.dataSource
      },
      restWidth: function () {
        let me = this
        let widthCount = 0
        Array.from(me.columns).forEach(function (column) {
          if (column.width) {
            widthCount += column.width
          }
        })
        let restWidth = me.gridPanelWidth - widthCount
        return restWidth
      },
      flexCount: function () {
        let me = this
        let flexCount = 0
        Array.from(me.columns).forEach(function (column) {
          if (!column.width) {
            if (column.flex) {
              flexCount += column.flex
            } else {
              flexCount += 1
            }
          }
        })
        console.log(flexCount)
        return flexCount
      }
    },
    mounted () {
      let me = this
      me.getWidth()
    },
    methods: {
      getWidth: function () {
        let me = this
        me.gridPanelWidth = me.$el.clientWidth
      }
    },
    components: {
      GridHead,
      GridBody
    }
  }
</script>
<style lang="scss" scoped>

</style>
