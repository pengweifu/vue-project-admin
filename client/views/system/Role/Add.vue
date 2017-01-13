<template>
  <div class="box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="归属机构">
        <tree-input :title="'归属机构'" :model="ruleForm.officename"></tree-input>
      </el-form-item>
      <el-form-item label="角色名称" prop="rolename">
        <el-input v-model="ruleForm.rolename"></el-input>
      </el-form-item>
      <el-form-item label="英文名称" prop="roleenname">
        <el-input v-model="ruleForm.roleenname"></el-input>
      </el-form-item>
      <el-form-item label="角色类型" prop="roletype">
        <el-select v-model="ruleForm.roletype" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否系统数据" prop="isssytem">
        <el-select v-model="ruleForm.isssytem" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否可用" prop="isenabled">
        <el-select v-model="ruleForm.isenabled" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数据范围" prop="datascope">
        <el-select v-model="ruleForm.datascope" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色授权">
        <el-tree
          :data="data"
          :props="defaultProps"
          show-checkbox
          @check-change="handleCheckChange">
        </el-tree>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input type="textarea" v-model="ruleForm.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import treeInput from '../../../components/treeInput'
  export default {
    data () {
      return {
        ruleForm: {
          officename: '',
          rolename: '',
          roleenname: '',
          roletype: '',
          isssytem: '',
          isenabled: '',
          datascope: '',
          remark: '',
          roleRights: []
        },
        rules: {
          rolename: [
            { required: true, message: '请输入角色名称', trigger: 'blur' }
          ],
          roleenname: [
            { required: true, message: '请输入角色英文名称', trigger: 'blur' }
          ],
          roletype: [
            { required: true, message: '请选择角色类型', trigger: 'change' }
          ],
          isssytem: [
            { required: true, message: '请选择是否系统数据', trigger: 'change' }
          ],
          isenabled: [
            { required: true, message: '请选择是否可用', trigger: 'change' }
          ],
          datascope: [
            { required: true, message: '请选择数据范围', trigger: 'change' }
          ],
          remark: [
            { required: true, message: '请填写备注', trigger: 'blur' }
          ]
        },
        options: [{
          value: '选项1',
          label: '超级管理员'
        }, {
          value: '选项2',
          label: '公司管理员'
        }, {
          value: '选项3',
          label: '人事经理'
        }, {
          value: '选项4',
          label: '财务经理'
        }],
        options1: [{
          value: '选项1',
          label: '是'
        }, {
          value: '选项2',
          label: '否'
        }],
        options2: [{
          value: '选项1',
          label: '所有数据'
        }, {
          value: '选项2',
          label: '所在公司以下数据'
        }, {
          value: '选项3',
          label: '所在公司数据'
        }, {
          value: '选项4',
          label: '所在部门以及以下数据'
        }],
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1'
          }, {
            label: '二级 2-2'
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1'
          }, {
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      handleCheckChange (data, checked, indeterminate) {
        checked ? this.ruleForm.roleRights.push(data) : this.ruleForm.roleRights.splice(data, 1)
      },
      back () {
        this.$router.back()
      }
    },
    components: {
      treeInput
    }
  }
</script>

<style lang="scss" scoped>

</style>