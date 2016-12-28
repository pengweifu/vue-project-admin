<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h2 class="title">申请信息</h2>
          <div class="block">
            <div class="control is-horizontal">
              <a :href="'http://10.238.18.82:8888/'+application.vcFilePath">
                点击下载该申请文档[{{application.vcName}}]
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h2 class="title">审批信息</h2>
          <div class="block">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">审批意见</label>
              </div>
              <div class="control">
                <textarea class="textarea" placeholder="审批意见" v-model="approveData.vcComment"></textarea>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
              </div>
              <div class="control is-grouped">
                <p class="control">
                  <button class="button is-primary" @click="pass">审批通过</button>
                </p>
                <p class="control">
                  <button class="button is-danger" @click="refuse">审批不通过</button>
                </p>
                <p class="control">
                  <button class="button" @click="back">返回</button>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>说明</p>：
            <p>1，同意：本次审批通过，流程继续执行。如果所有的环节都通过，则表单的最终状态为：已通过。。</p>
            <p>2，不同意：本次审批未通过，流程结束，不再继续执行。表单的最终状态为：未通过。</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        application: {},
        approveData: {
          vcComment: '',
          vcResult: ''
        },
        taskId: ''
      }
    },
    mounted () {
      this.application = this.$route.params.application
      this.approveData.vcApplicationId = this.application.vcId
      this.taskId = this.$route.params.taskId
    },
    methods: {
      pass () {
        this.approveData.vcResult = '同意'
        this.approve()
      },
      refuse () {
        this.approveData.vcResult = '不同意'
        this.approve()
      },
      approve () {
        this.$http.post('/api/workflow/approve', {
          approveInfo: this.approveData,
          taskId: this.taskId
        }).then((resp) => {
          console.log(resp)
          this.$router.back()
        })
      },
      back () {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>