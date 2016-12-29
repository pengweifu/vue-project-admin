<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">模板基本信息</h1>
          <div class="block">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">模板名称</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" type="text" placeholder="模板名称" v-model="vcName">
                </p>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">所用流程</label>
              </div>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="vcPdkey">
                    <option>请选择</option>
                    <option v-for="item in processDefinitions" :value="item.key">{{item.name}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">模板文件</h1>
          <div class="block">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">添加上传文件</label>
              </div>
              <div class="control">
                <upload :name="'file'" :action="'/api/workflow/deployTemplate'" :params="{vcName: vcName, vcPdkey: vcPdkey}"></upload>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label"></label>
              </div>
              <div class="control">
                <button class="button is-primary" @click="deployTemplate">提交</button>
                <router-link :to="{ name: 'Template'}" tag="button" class="button is-link">返回</router-link>
              </div>
            </div>
          </div>
          <div>
            <p>说明</p>：
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
  import upload from '../../components/upload'
  export default {
    props: [],
    components: {
      upload
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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>