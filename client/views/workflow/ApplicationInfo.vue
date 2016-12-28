<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="block">
            <div class="control is-horizontal">
              <a :href="'http://10.238.18.82:8888/'+application.vcFilePath">点击下载该申请文档[{{application.vcName}}]</a>
            </div>
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
        application: {}
      }
    },
    mounted () {
      this.application = this.$route.params
    }
  }
</script>

<style lang="scss" scoped>

</style>