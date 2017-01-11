<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column v-for="column in columnData"
        :label="column.label"
        :width="column.width">
        <template scope="scope">
          <span>{{ scope.row[column.columnName] }}</span>
        </template>

      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary">新增子表数据</el-button>
    <el-dialog title="业务子表数据" v-model="dialogFormVisible">
      <el-form :model="currentModel">
        <el-form-item label="日期" :label-width="120px">
          <el-date-picker
            v-model="currentModel.date"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="120px">
          <el-input v-model="currentModel.name" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="120px">
          <el-input v-model="currentModel.age" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      tableData: {
        Type: Array,
        default: function () {
          return []
        }
      },
      columnData: {
        Type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        currentModel: {
          date: '',
          name: '',
          age: ''
        }
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>