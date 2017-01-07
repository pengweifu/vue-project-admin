<template>
  <div>
    <tree-view :model="nodes">

    </tree-view>

      </div>
    </card-modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import treeView from '../../components/tree.vue'
  import { CardModal } from 'vue-bulma-modal'
  export default {
    data () {
      return {
        nodes: [],
        isShowModal: false
      }
    },
    components: {
      treeView,
      CardModal
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