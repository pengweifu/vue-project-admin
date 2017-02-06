<template>
  <div style="width:100%;">
    <table style="width:100%;" class="table is-striped is-bordered">
      <thead>
      <tr>
        <th v-for="(column,index) in columns">
          {{column.text}}
        </th>
        <th>
          操作
        </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(record,trIndex) in dataSource"
            is="grid-tr"
            :tree-structure="treeStructure"
            :columns="columns"
            :record="record"
            :index="trIndex"
            v-on:toggle="toggle"
            v-on:row-show="rowShow"
            :requestUrl="requestUrl">
        </tr>
      </tbody>
    </table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import GridTr from './GridTr.vue'
  export default {
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
      },
      requestUrl: {
        type: String
      },
      total: {
        type: Number,
        default: function () {
          return 0
        }
      }
    },
    computed: {},
    methods: {
      toggle: function (trIndex) {
        let me = this
        let record = me.dataSource[trIndex]
        record._expanded = !record._expanded
      },
      rowShow: function (trIndex, show) {
        let me = this
        Vue.set(me.dataSource[trIndex], '_show', show)
      },
      handleSizeChange (val) {
        this.$emit('handle-size-change')
      },
      handleCurrentChange (val) {
        this.$emit('handle-current-change')
      }
    },
    components: {
      GridTr
    }
  }
</script>
<style>

</style>
