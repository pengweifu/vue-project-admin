<template>
  <div class="box">
    <el-row :gutter="20">
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-button type="primary" icon="plus" @click="dialogFormVisible = true">
            新增
          </el-button>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-button type="primary" icon="edit">修改</el-button>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-button type="primary" icon="circle-cross">取消</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="属性名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="langth"
          label="长度">
        </el-table-column>
        <el-table-column
          prop="point"
          label="小数点">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
        </el-table-column>
        <el-table-column
          prop="qiantai"
          label="前台录入">
        </el-table-column>
        <el-table-column
          prop="defeat"
          label="默认值">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template scope="scope">
            <el-button @click="handleClick" type="text" size="small">编辑</el-button>
            <el-button @click="DeleteModal()" type="text" size="small" class="red">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <!--新增表单-->
    <el-dialog title="属性配置" size="small" v-model="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" class="demo-form-inline">
        <el-form-item label="属性名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" placeholder="请输入属性值" auto-complete="off" class="inputw200"></el-input>
        </el-form-item>
        <el-form-item label="属性类型" :label-width="formLabelWidth" prop="radio3">
          <el-radio-group v-model="form.radio3">
            <el-radio-button label="String"></el-radio-button>
            <el-radio-button label="Data"></el-radio-button>
            <el-radio-button label="Integer"></el-radio-button>
            <el-radio-button label="Double"></el-radio-button>
            <el-radio-button label="Number"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="其备注" :label-width="formLabelWidth" prop="data1">
          <el-input v-model="form.date1" placeholder="请输入备注" auto-complete="off" class="inputw200"></el-input>
        </el-form-item>
        <el-form-item label="默认值" :label-width="formLabelWidth" prop="data2">
          <el-input v-model="form.date2" auto-complete="off" :disabled="true" placeholder="无"
                    class="inputw200"></el-input>
        </el-form-item>
        <el-form-item label="字段业务关联" :label-width="formLabelWidth" prop="data3">
          <el-input v-model="form.date3" auto-complete="off" placeholder="字段业务关联" class="inputw200"></el-input>
        </el-form-item>
        <el-form-item label="前台录入" :label-width="formLabelWidth" prop="radio2">
          <el-radio-group v-model="form.radio2">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="字符长度" :label-width="formLabelWidth" prop="length">
          <div class="block inputw200">
            <!--<span class="demonstration">自定义初始值</span>-->
            <el-slider v-model="form.length" :max="255" show-input></el-slider>
          </div>
        </el-form-item>
        <el-tag type="danger">1、请不要添加XX_ID的主键，系统自动生成一个32位无序不重复字符序列作为主键</el-tag>
        <el-tag type="danger">2、主键名为 类名_ID 格式，所有字段的字母都用大写</el-tag>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {},
    data () {
      return {
        tableData: [{
          date: '2',
          name: '王小虎',
          address: '上海市',
          langth: '24',
          point: '。',
          remark: '上海市',
          qiantai: '上海市',
          defeat: '上',
          defeat1: '上海'
        }, {
          date: '3',
          name: '王小虎',
          address: '上海市',
          langth: '24',
          point: '。',
          remark: '上海市',
          qiantai: '上海市',
          defeat: '上',
          defeat1: '上海'
        }, {
          date: '21',
          name: '王小虎',
          address: '上海市',
          langth: '24',
          point: '。',
          remark: '上海市',
          qiantai: '上海市',
          defeat: '上',
          defeat1: '上海'
        }, {
          date: '25',
          name: '王小虎',
          address: '上海市',
          langth: '24',
          point: '。',
          remark: '上海市',
          qiantai: '上海市',
          defeat: '上',
          defeat1: '上海'
        }],
        dialogFormVisible: false,
        form: {
          name: '',
          date1: '',
          date2: '',
          date3: '',
          radio2: 1,
          radio3: 'String',
          length: 100
        },
        rules: {
          name: [
            {required: true, message: '请输入属性名', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          date1: [
            {required: true, message: '请输入', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          date2: [
            {required: true, message: '请输入', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          date3: [
            {required: true, message: '请输入', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          length: [
            {type: 'number', required: true, trigger: 'change'}
          ],
          radio2: [
            {type: 'number', required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          radio3: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        },
        formLabelWidth: '180px'
      }
    },
    methods: {
      DeleteModal (templateId) {
        this.currentTemplateId = templateId
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.$message.error('错了哦，这是一条错误消息')
//          this.deleteTemplate().then(() => {
//            this.$message({
//              type: 'success',
//              message: '删除成功!'
//            })
//          }, () => {
//            this.$message.error('错了哦，这是一条错误消息')
//          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      handleClick () {
        console.log(1)
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(formName)
            this.$message.success('提交成功')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style>
  .el-input-number__decrease, .el-input-number__increase {
    top: 3px !important;
  }

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  /*.el-col {*/
  /*border-radius: 4px;*/
  /*}*/
  /*.bg-purple-dark {*/
  /*background: #99a9bf;*/
  /*}*/
  /*.bg-purple {*/
  /*background: #d3dce6;*/
  /*}*/
  /*.bg-purple-light {*/
  /*background: #e5e9f2;*/
  /*}*/
  /*.grid-content {*/
  /*border-radius: 4px;*/
  /*min-height: 36px;*/
  /*}*/
  /*.row-bg {*/
  /*padding: 10px 0;*/
  /*background-color: #f9fafc;*/
  /*}*/
  .myclass {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
