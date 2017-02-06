<template>
  <div>
    <el-row class="box">
      <el-col :span="24">
        <div>
          <el-form :inline="true" :model="formData" label-width="80px">
            <el-form-item label="编号">
              <el-input v-model="formData.input" placeholder="input输入框"></el-input>
            </el-form-item>
            <el-form-item label="选择时间">
              <el-date-picker
                v-model="formData.dateValue"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <el-row class="box">
      <el-row>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <router-link :to="{ name: 'ViewForm' }" tag="button" class="el-button el-button--primary">
              <i class="el-icon-plus"></i><span>新增</span>
            </router-link>

          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <grid-panel :columns="columns" :tree-structure="true" :data-source="dataSource" :requestUrl="'/viewTemplate/viewForm'">
          </grid-panel>
        </el-col>

      </el-row>

    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import {GridPanel} from '../../components/treeTable'
  export default {
    props: [],
    data () {
      return {
        formData: {
          input: '',
          dateValue: ''
        },
        columns: [
          {
            text: '姓名',
            dataIndex: 'name'
          },
          {
            text: '年龄',
            dataIndex: 'age'
          },
          {
            text: '性别',
            dataIndex: 'sex'
          }
        ],
        dataSource: [
          {
            id: 1,
            parentId: 0,
            name: '测试1',
            age: 18,
            sex: '男',
            children: [
              {
                id: 2,
                parentId: 1,
                name: '测试2',
                age: 22,
                sex: '男'
              }
            ]
          },
          {
            id: 3,
            parentId: 0,
            name: '测试3',
            age: 23,
            sex: '女',
            children: [
              {
                id: 4,
                parentId: 3,
                name: '测试4',
                age: 22,
                sex: '男'
              },
              {
                id: 5,
                parentId: 3,
                name: '测试5',
                age: 25,
                sex: '男'
              },
              {
                id: 6,
                parentId: 3,
                name: '测试6',
                age: 26,
                sex: '女',
                children: [
                  {
                    id: 7,
                    parentId: 6,
                    name: '测试7',
                    age: 27,
                    sex: '男'
                  }
                ]
              }
            ]
          },
          {
            id: 18,
            parentId: 0,
            name: '测试8',
            age: 18,
            sex: '男'
          }
        ]
      }
    },
    methods: {
      onSubmit () {
        console.log(this.formData)
        console.log('submit!')
      }
    },
    components: {
      GridPanel
    }
  }
</script>

<style lang="scss" scoped>

</style>