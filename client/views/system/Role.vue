<template>
  <div class="box">
    <el-row>
      <el-col :span="2">
        <div>
          <router-link :to="{name: 'RoleAdd'}" tag="button" class="el-button el-button--primary">
            <i class="el-icon-plus"></i><span>新增</span>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          label="角色名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="英文名称"
          prop="enname">
        </el-table-column>
        <el-table-column
          label="归属机构"
          prop="office.name">
        </el-table-column>
        <el-table-column
          label="数据范围"
          prop="dataScope">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              type="success"
              :plain="true"
              @click="handleEdit(scope.$index, scope.row)">分配
            </el-button>
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-row>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        tableData: [{
          name: '系统管理员',
          enname: 'admin',
          office: {
            name: '集团总公司'
          },
          dataScope: '所在公司以及以下数据'
        }, {
          name: '研究院管理员',
          enname: 'yjyadmin',
          office: {
            name: '研究院'
          },
          dataScope: '所在公司以及以下数据'
        }, {
          name: '人事经理',
          enname: 'hr',
          office: {
            name: '集团总公司'
          },
          dataScope: '所在公司以及以下数据'
        }, {
          name: '财务经理',
          enname: 'financing',
          office: {
            name: '集团总公司'
          },
          dataScope: '所在公司以及以下数据'
        }],
        total: 43
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`每页 ${val} 条`)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>