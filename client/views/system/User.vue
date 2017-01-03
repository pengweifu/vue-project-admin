<template>
  <div>
    我是部门管理
    <tree :model="">

    </tree>
  </div>
</template>

<script type="text/ecmascript-6">
  import tree from '../../components/tree'
  export default {
    data () {
      return {
        nodes: [
          {
            vcId: 1
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>