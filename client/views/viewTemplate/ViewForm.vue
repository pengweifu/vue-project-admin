<template>
  <div class="box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="输入框" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="下拉选择" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单个时间">
        <el-date-picker
          v-model="ruleForm.datesingle"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="区域时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="开关" prop="delivery">
        <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="滑块设置">
        <el-slider
          v-model="ruleForm.silder"
          show-input>
        </el-slider>
      </el-form-item>
      <el-form-item label="多选" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="归属部门">
        <tree-input
          :model="ruleForm.treeInput"
          :treeNodes="regions"
          :props="props"
          @model-change="modelChange">
        </tree-input>
      </el-form-item>
      <el-form-item label="单选" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上传文件">
        <el-upload
          action="//jsonplaceholder.typicode.com/posts/"
          type="drag"
          :multiple="true"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :default-file-list="ruleForm.fileList"
        >
          <i class="el-icon-upload"></i>
          <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="多行文本" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import treeInput from '../../components/treeInput.vue'
  export default {
    props: [],
    data () {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          treeInput: '',
          fileList: [],
          datesingle: '',
          silder: 0,
          tableData: []
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
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
        options: [{
          value: '1',
          label: '北京'
        }, {
          value: '2',
          label: '上海'
        }, {
          value: '3',
          label: '重庆'
        }, {
          value: '4',
          label: '贵阳'
        }, {
          value: '5',
          label: '杭州'
        }],
        isFormEdit: false
      }
    },
    mounted () {
      console.log(this.$route.query.parentId)
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
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      modelChange (val) {
        this.ruleForm.treeInput = val
      }
    },
    components: {
      treeInput
    }
  }
</script>

<style lang="scss" scoped>

</style>