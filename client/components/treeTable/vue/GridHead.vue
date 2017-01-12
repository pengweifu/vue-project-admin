<template>
  <div>
    <div class="">
      <grid-head-item v-for="(column,index) in columns"
                      :column="column"
                      :flex-count="flexCount"
                      :rest-width="restWidth"
      />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import GridHeadItem from './GridHeadItem.vue'
  export default {
    props: {
      columns: {
        type: Array,
        default: function () {
          return []
        }
      },
      flexCount: {
        type: Number
      },
      restWidth: {
        type: Number
      }
    },
    computed: {},
    components: {
      GridHeadItem
    }
  }
</script>
<style>

</style>
