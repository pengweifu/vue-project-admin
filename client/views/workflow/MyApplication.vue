<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="table-responsive">
            <table class="table is-striped">
              <thead>
              <tr>
                <th>标题</th>
                <th>申请人</th>
                <th>申请时间</th>
                <th>当前状态</th>
                <th colspan="2">相关操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in applications">
                <td>
                  {{item.vcName}}
                </td>
                <td>
                  {{item.vcUserId}}
                </td>
                <td>
                  {{item.dtCtime}}
                </td>
                <td>
                  {{item.vcStatus}}
                </td>
                <td class="is-icon">
                  <router-link :to="{ name: 'ApplicationInfo', params: item}" tag="button" class="button is-success">
                    查看申请记录
                  </router-link>
                </td>
                <td class="is-icon">
                  <router-link :to="{ name: 'ApplicationRecord', params: {vcId: item.vcId}}" tag="button" class="button is-warning">
                    查看流转记录
                  </router-link>
                </td>
              </tr>
              </tbody>
            </table>
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
        applications: []
      }
    },
    mounted () {
      this.findApplication()
    },
    methods: {
      findApplication () {
        this.$http.get('/api/workflow/findApplication').then((resp) => {
          console.log(resp.data)
          this.applications = resp.data
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
