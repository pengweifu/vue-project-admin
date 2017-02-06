<template>
  <div>
    <div @click="showDialog">
      <el-input placeholder="点击选择树"
                v-model="model.label"
                :disabled="true" icon="search">
      </el-input>
    </div>
    <el-dialog :title="title" v-model="dialogShow" size="tiny">
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
        <el-button type="primary" @click="handleComfirm">确 定</el-button>
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
      },
      title: {
        Type: String,
        default: '树选择器'
      }
    },
    data () {
      return {
        dialogShow: false,
        myModel: {}
      }
    },
    methods: {
      showDialog () {
        this.dialogShow = true
      },
      handleCheckChange (data, node) {
        this.myModel = data
      },
      handleComfirm () {
        this.dialogShow = !this.dialogShow
        console.log(this.myModel)
        this.$emit('model-change', this.myModel)
      },
      resetTreeData () {
        this.dialogShow = !this.dialogShow
        this.myModel = {}
        this.$emit('model-change', this.myModel)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>