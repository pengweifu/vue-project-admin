<template>
  <tr v-show="show">
    <td v-for="(column,tdIndex) in columns" key="tdIndex" :width="column.width">
      <span v-if="spaceIconShow(tdIndex)" v-for="space in record._level" class="ms-tree-space"></span>
      <button class="button is-outlined is-primary is-small" v-if="toggleIconShow(tdIndex,record)" @click="toggle">
        <i v-if="!record._expanded" class="fa fa-caret-right" aria-hidden="true"></i>
        <i v-if="record._expanded" class="fa fa-caret-down" aria-hidden="true"></i>
      </button>
      <span v-else-if="tdIndex===0" class="ms-tree-space"></span>
      {{record[column.dataIndex]}}
    </td>
    <td>
      <button type="button" class="el-button el-button--default el-button--small">
        <router-link
          :to="{ path: requestUrl, query: {id: record.id} }"
          tag="span">
          编辑
        </router-link>
      </button>
      <el-button
        size="small"
        type="danger"
        @click="handleDelete()">
        删除
      </el-button>
      <button type="button" class="el-button el-button--success el-button--small">
        <router-link :to="{ path: requestUrl, query: {parentId: record.parentId} }"
                     tag="span">
          添加下级树结构
        </router-link>
      </button>
    </td>
  </tr>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      index: {
        type: Number
      },
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
      record: {
        type: Object,
        default: function () {
          return {}
        }
      },
      requestUrl: {
        type: String
      }
    },
    computed: {
      show: function () {
        let me = this
        let record = me.record
        let show = (record._parent ? (record._parent._expanded && record._parent._show) : true)
        me.$emit('row-show', me.index, show)
        return show
      }
    },
    methods: {
      spaceIconShow (index) {
        let me = this
        if (me.treeStructure && index === 0) {
          return true
        }
        return false
      },
      toggleIconShow (index, record) {
        let me = this
        if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {
          return true
        }
        return false
      },
      toggle () {
        let me = this
        me.$emit('toggle', me.index)
      },
      handleDelete () {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    components: {}
  }
</script>
<style>
  .ms-tree-space{position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 18px;
    height: 14px;}
  .ms-tree-space::before{content: ""}
  table td{
    line-height: 26px;
  }
</style>
