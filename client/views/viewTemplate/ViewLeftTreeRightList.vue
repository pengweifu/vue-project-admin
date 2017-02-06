<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="4" class="box">
        <div class="mytitle">
          左树右表
        </div>
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
          class="grid-content"
          :default-expand-all="true"
          :highlight-current="true">

        </el-tree>
      </el-col>
      <el-col :span="20">
        <el-row class="box">
          <el-col :span="24">
            <div>
              <el-form :inline="true" :model="formData" label-width="80px">
                <el-form-item label="编号">
                  <el-input v-model="formData.input" placeholder="input输入框"></el-input>
                </el-form-item>
                <el-form-item label="归属部门">
                  <tree-input
                    :model="formData.treeInput"
                    :treeNodes="regions"
                    :props="props"
                    @model-change="modelChange">
                  </tree-input>
                </el-form-item>
                <el-form-item label="选择时间">
                  <el-date-picker
                    v-model="formData.dateValue"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="多选框">
                  <el-checkbox-group v-model="formData.checkList">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="下拉框">
                  <el-select v-model="formData.selectValue" clearable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="单选">
                  <el-radio-group v-model="formData.radioValue">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="开关">
                  <el-switch
                    v-model="formData.switchValue"
                    on-color="#13ce66"
                    off-color="#ff4949">
                  </el-switch>
                </el-form-item>
                <el-form-item label="多行文本">
                  <el-input type="textarea" v-model="formData.desc"></el-input>
                </el-form-item>
                <el-form-item label="上传文件">
                  <el-upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :default-file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
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
              <div>
                <router-link :to="{ name: 'ViewForm' }" tag="button" class="el-button el-button--primary">
                  <i class="el-icon-plus"></i><span>新增</span>
                </router-link>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  label="日期"
                  width="180">
                  <template scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="姓名"
                  width="180">
                  <template scope="scope">
                    <el-popover trigger="hover" placement="top">
                      <p>姓名: {{ scope.row.name }}</p>
                      <p>住址: {{ scope.row.address }}</p>
                      <div slot="reference" class="name-wrapper">
                        <el-tag>{{ scope.row.name }}</el-tag>
                      </div>
                    </el-popover>
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
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
              </el-pagination>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import treeInput from '../../components/treeInput.vue'
  export default {
    components: {
      treeInput
    },
    data () {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        formData: {
          input: '11',
          treeInput: {},
          dateValue: '',
          checkList: ['复选框 A'],
          selectValue: '',
          radioValue: '',
          switchValue: '',
          sliderValue: 0,
          desc: ''
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        regions: [{
          id: 1,
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1'
          }, {
            id: 4,
            label: '二级 2-2'
          }]
        }, {
          label: '一级 3',
          id: 5,
          children: [{
            id: 6,
            label: '二级 3-1'
          }, {
            id: 7,
            label: '二级 3-2'
          }]
        }],
        props: {
          label: 'label',
          children: 'children'
        },
        fileList: [],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        total: 0
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log('选中该节点的时候，右边表格显示子元素:' + data.label)
      },
      onSubmit () {
        console.log(this.formData)
        console.log('submit!')
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      modelChange (val) {
        this.formData.treeInput = val
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
  .grid-content {
    border-radius: 4px;
  }
  /*注释可以消除边框*/
  .el-tree {
    border: none;
  }
  .mytitle{
    background-color: #d7e8ff;
    background: linear-gradient(to bottom, #F3F6FF 0%,#d7e8ff 100%);
    padding: 10px 12px;
    margin: -20px -5px 10px -5px;
    border-radius: 4px 4px 0 0;
  }
</style>