<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
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
                  <a href="javascript:;" @click="isShowDeleteModal(item.vcId)">
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
          <router-link :to="{ name: 'TemplateAdd'}" tag="button" class="button is-primary">
            添加
          </router-link>
          <div>
            <p>说明：</p>
            <p>1，删除时，相应的文件也被删除。</p>
            <p>2，下载时，文件名默认为：{表单模板名称}.doc</p>
          </div>
        </article>
      </div>
    </div>
    <card-modal :visible="isShowModal"
                :title="'删除模板'"
                transition="zoom"
                v-on:ok="deleteTemplate"
                v-on:cancel="isShowDeleteModal">
      <div class="content has-text-centered">确定要删除这个模板吗?</div>
    </card-modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import { CardModal } from 'vue-bulma-modal'
  export default {
    components: {
      CardModal
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
      isShowDeleteModal (templateId) {
        if (templateId) {
          this.currentTemplateId = templateId
        }
        this.isShowModal = !this.isShowModal
      },
      deleteTemplate () {
        this.$http.delete('/api/workflow/deleteTemplate/' + this.currentTemplateId).then((resp) => {
          this.isShowModal = false
          this.findAllTemplate()
          console.log(resp)
        })
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>