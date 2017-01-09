<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="table-responsive">
            <table class="table is-striped">
              <thead>
              <tr>
                <th>模板名称</th>
                <th>所有流程</th>
                <th colspan="3">相关操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in templates">
                <td>
                  {{item.vcName}}
                </td>
                <td>
                  {{item.vcPdkey}}
                </td>
                <td class="is-icon">
                  <a href="javascript:;" @click="DeleteModal(item.vcId)">
                    <i class="fa fa-github"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-globe"></i>
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="box">
            <router-link :to="{ name: 'TemplateAdd'}" tag="button" class="button is-primary">
              添加
            </router-link>
          </div>
          <div>
            <p>说明：</p>
            <p>1，删除时，相应的文件也被删除。</p>
            <p>2，下载时，文件名默认为：{表单模板名称}.doc</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {
    },
    props: [],
    data () {
      return {
        templates: [],
        currentTemplateId: '',
        isShowModal: false
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
      },
//      isShowDeleteModal (templateId) {
//        if (templateId) {
//          this.currentTemplateId = templateId
//        }
//        this.isShowModal = !this.isShowModal
//      },
      deleteTemplate () {
        return this.$http.delete('/api/workflow/deleteTemplate/' + this.currentTemplateId)
      },
      DeleteModal (templateId) {
        this.currentTemplateId = templateId
        this.$confirm('此操作将永久删除该模板, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteTemplate().then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }, () => {
            this.$message.error('错了哦，这是一条错误消息')
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
