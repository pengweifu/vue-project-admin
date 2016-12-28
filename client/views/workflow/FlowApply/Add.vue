<template>
  <div>
    {{template}}
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h3 class="title">点击下载模板</h3>
          <div class="block">
            <div class="control is-horizontal">
              <a :href="'http://10.238.18.82:8888/'+template.vcFilePath">点击下载该模板文件{{template.vcName}}</a>
            </div>
          </div>
        </article>
      </div>

  </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h3 class="title">申请信息</h3>
          <div class="block">
            <div class="control is-horizontal">
              <button class="button is-primary" @click="submitApplication">提交</button>
              <router-link :to="{ name: 'FlowApply'}" tag="button" class="button is-link">返回</router-link>
            </div>
          </div>
        </article>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        template: {}
      }
    },
    mounted () {
      this.template = this.$route.params
    },
    methods: {
      submitApplication () {
        this.$http.post('/api/workflow/submitApplication', {
          vcTemplateId: this.template.vcId
        }).then((resp) => {
          this.$router.back()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>