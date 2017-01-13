<template>
  <div>
    <grid-body :columns="columns"
               :tree-structure="treeStructure"
               :data-source="data"
               />
  </div>
</template>
<script type="text/ecmascript-6">
  import Utils from '../utils/index.js'
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
      }
    },
    methods: {
    },
    components: {
      GridBody
    }
  }
</script>
<style lang="scss" scoped>

</style>
