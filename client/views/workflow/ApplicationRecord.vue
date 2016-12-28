<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
              <tr>
                <th>审批人</th>
                <th>审批时间</th>
                <th>是否通过</th>
                <th>审批意见</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in approveInfos">
                <td>
                  {{item.vcUserId}}
                </td>
                <td>
                  {{item.dtCtime}}
                </td>
                <td>
                  {{item.vcResult}}
                </td>
                <td>
                  {{item.vcComment}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <button class="button is-primary" @click="back">返回</button>
        </article>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        approveInfos: []
      }
    },
    mounted () {
      let applicationId = this.$route.params.vcId
      this.findApproveInfo(applicationId)
    },
    methods: {
      findApproveInfo (applicationId) {
        this.$http.get('/api/workflow/findApproveInfo/' + applicationId).then((resp) => {
          console.log(resp)
          this.approveInfos = resp.data
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