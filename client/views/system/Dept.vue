<template>
  <div>
    <tree-view :model="nodes">
    </tree-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import treeView from '../../components/tree.vue'
  export default {
    data () {
      return {
        nodes: []
      }
    },
    components: {
      treeView
    },
    mounted () {
      this.getOrgTreeData()
    },
    methods: {
      getOrgTreeData () {
        this.$http.get('/api/org/getOrgTreeData').then((resp) => {
          this.nodes = resp.data
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>