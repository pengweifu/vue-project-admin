<template>
  <div>
    <el-row>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <div>
            <el-radio-group v-model="radio">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div>
            <el-checkbox v-model="checked" checked>备选项</el-checkbox>
          </div>
          <div>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B"></el-checkbox>
              <el-checkbox label="复选框 C"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div>
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <el-switch
              v-model="value1"
              on-text=""
              off-text="">
            </el-switch>
            <el-switch
              v-model="value2"
              on-color="#13ce66"
              off-color="#ff4949">
            </el-switch>
          </div>
          <div>
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value3"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </div>
        </div>

      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple-light">
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
            <el-form-item
              prop="email"
              label="邮箱"
              :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
            >
              <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item
              v-for="(domain, index) in dynamicValidateForm.domains"
              :label="'域名' + index"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
              :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
            >
              <el-input v-model="domain.value"></el-input>
              <el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
              <el-button @click="addDomain">新增域名</el-button>
              <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {},
    data () {
      return {
        radio: '',
        checked: true,
        checkList: [],
        input: '',
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
        value: '',
        value1: true,
        value2: true,
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value3: '',
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      removeDomain (item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain () {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>