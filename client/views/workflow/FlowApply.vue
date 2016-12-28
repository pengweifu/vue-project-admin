<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
              <tr>
                <th>请选择模板</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="template in templates">
                <router-link :to="{ name: 'FlowApplyAdd', params: template}" tag="td">
                  {{template.vcName}}
                </router-link>
              </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p>说明：此页面是列出所有的表单模板记录</p>
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
        templates: []
      }
    },
    mounted () {
      this.findAllTemplate()
    },
    methods: {
      findAllTemplate () {
        this.$http.get('/api/workflow/findAllTemplate').then((resp) => {
          this.templates = resp.data
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>