<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h5 class="title is-5">模板基本信息</h5>
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="模板名称">
              <el-input v-model="vcName" placeholder="模板名称"></el-input>
            </el-form-item>
            <el-form-item label="所用流程">
              <el-select v-model="vcPdkey" placeholder="请选择">
                <el-option
                  v-for="item in processDefinitions"
                  :label="item.label"
                  :value="item.key">
                  {{item.name}}
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <!--<div class="block">-->
            <!--<div class="control is-horizontal">-->
              <!--<div class="control-label">-->
                <!--<label class="label">模板名称</label>-->
              <!--</div>-->
              <!--<div class="control is-grouped">-->
                <!--<p class="control is-expanded">-->
                  <!--<el-input v-model="vcName" placeholder="模板名称"></el-input>-->
                  <!--&lt;!&ndash;<input class="input" type="text" placeholder="模板名称" v-model="vcName">&ndash;&gt;-->
                <!--</p>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="control is-horizontal">-->
              <!--<div class="control-label">-->
                <!--<label class="label">所用流程</label>-->
              <!--</div>-->
              <!--<div class="control">-->
                <!--<div class="is-fullwidth">-->
                  <!--<el-select v-model="vcPdkey" class="is-fullwidth" placeholder="请选择">-->
                    <!--<el-option-->
                      <!--v-for="item in processDefinitions"-->
                      <!--:label="item.label"-->
                      <!--:value="item.key">-->
                      <!--{{item.name}}-->
                    <!--</el-option>-->
                  <!--</el-select>-->
                  <!--&lt;!&ndash;<select v-model="vcPdkey">&ndash;&gt;-->
                    <!--&lt;!&ndash;<option>请选择</option>&ndash;&gt;-->
                    <!--&lt;!&ndash;<option v-for="item in processDefinitions" :value="item.key">{{item.name}}</option>&ndash;&gt;-->
                  <!--&lt;!&ndash;</select>&ndash;&gt;-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h5 class="title is-5">模板文件</h5>
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="添加上传文件">
              <el-upload
                :name="file"
                action="//jsonplaceholder.typicode.com/posts/"
                type="drag"
                :multiple="true"
                :data="{vcName: vcName, vcPdkey: vcPdkey}"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="successCall"
                :on-error="handleError"
                :default-file-list="fileList"
              >
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-form>
          <!--<div class="block">-->
            <!--<div class="control is-horizontal">-->
              <!--<div class="control-label">-->
                <!--<label class="label">添加上传文件</label>-->
              <!--</div>-->
              <!--<div class="control">-->
                <!--<el-upload-->
                  <!--:name="file"-->
                  <!--action="//jsonplaceholder.typicode.com/posts/"-->
                  <!--type="drag"-->
                  <!--:multiple="true"-->
                  <!--:data="{vcName: vcName, vcPdkey: vcPdkey}"-->
                  <!--:on-preview="handlePreview"-->
                  <!--:on-remove="handleRemove"-->
                  <!--:on-success="successCall"-->
                  <!--:on-error="handleError"-->
                  <!--:default-file-list="fileList"-->
                <!--&gt;-->
                  <!--<i class="el-icon-upload"></i>-->
                  <!--<div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>-->
                  <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                <!--</el-upload>-->
                <!--&lt;!&ndash;<upload :name="'file'"&ndash;&gt;-->
                <!--&lt;!&ndash;:action="'/api/workflow/deployTemplate'"&ndash;&gt;-->
                <!--&lt;!&ndash;:params="{vcName: vcName, vcPdkey: vcPdkey}"&ndash;&gt;-->
                <!--&lt;!&ndash;:successCallback="successCall">&ndash;&gt;-->

                <!--&lt;!&ndash;</upload>&ndash;&gt;-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="control is-horizontal">-->
              <!--<div class="control-label">-->
                <!--<label class="label"></label>-->
              <!--</div>-->
              <!--<div class="control">-->
                <!--<button class="button is-primary" @click="deployTemplate">提交</button>-->
                <!--<router-link :to="{ name: 'Template'}" tag="button" class="button is-link">返回</router-link>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <div>
            <p>说明：</p>
            <p>1，模板文件是doc扩展名的文件（Word文档）。</p>
            <p>2，如果是添加：必须要选择模板文件。</p>
            <p>3，如果是修改：只是在 需要更新模板文件时 才选择一个文件。</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: [],
    components: {
    },
    mounted () {
      this.getAllLastDeployment()
    },
    data () {
      return {
        vcName: '',
        vcPdkey: '',
        processDefinitions: []
      }
    },
    methods: {
      getAllLastDeployment () {
        this.$http.get('/api/workflow/getAllLastDeployment').then((resp) => {
          console.log(resp.data)
          this.processDefinitions = resp.data
        })
      },
      deployTemplate () {
        this.$http.post('/api/workflow/deployTemplate', {vcName: this.vcName, vcPdkey: this.vcPdkey}).then((resp) => {
          console.log(resp)
        })
      },
      successCall () {
//        this.$router.back()
        this.$message({
          message: '恭喜你，上传成功',
          type: 'success'
        })
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
