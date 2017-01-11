<template>
  <div>
    <div @click="showDialog">
      <el-input placeholder="点击选择树"
                v-model="model.label"
                :disabled="true" icon="search">
      </el-input>
    </div>
    <el-dialog title="从树里面选择信息" v-model="dialogShow" size="tiny">
      <span>
        <el-tree
          :data="treeNodes"
          :props="props"
          :current-node-key="model.id"
          highlight-current
          @current-change="handleCheckChange">
        </el-tree>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogShow = false">确 定</el-button>
        <el-button type="danger" @click="resetTreeData">清 除</el-button>
        <el-button @click="dialogShow = false">取 消</el-button>
      </span>
    </el-dialog>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'treeView',
    props: {
      model: {
        Type: Object,
        default: function () {
          return {}
        }
      },
      treeNodes: {
        Type: Array,
        default: function () {
          return []
        }
      },
      props: {
        Type: Object,
        default: function () {
          return {
            label: 'name',
            children: 'children'
          }
        }
      }
    },
    data () {
      return {
        dialogShow: false
      }
    },
    methods: {
      showDialog () {
        this.dialogShow = true
      },
      handleCheckChange (data, node) {
        this.model = data
      },
      resetTreeData () {
        this.dialogShow = false
        this.model = {}
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>