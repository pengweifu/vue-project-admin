<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
              <tr>
                <th>流程名称</th>
                <th>最新版本</th>
                <th colspan="2">相关操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="process in processDefinitions">
                <td>
                  {{process.name}}
                </td>
                <td>
                  {{process.version}}
                </td>
                <td class="is-icon">
                  <a href="javascript:;" @click="openModalCard(process.key)">
                    <i class="fa fa-github"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="javascript:;" @click="viewProcessShow(process.id)">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <button @click="deploy">定义流程文件</button>
          <div>
            <p>说明：</p>
            <p>1，列表显示的是所有流程定义（不同名称）的最新版本。</p>
            <p>2，删除流程定义时，此名称的所有版本的流程定义都会被删除。</p>
          </div>
          <!--<vue-file-upload-->
          <!--:url="/vue-file-upload/demo/upload.php"-->
          <!--:onAdd="onAddItem"-->
          <!--:filters="filters"-->
          <!--:request-options="reqopts">-->
          <!--</vue-file-upload>-->
          <!--<table>-->
          <!--<thead>-->
          <!--<tr>-->
          <!--<th>name</th>-->
          <!--<th>size</th>-->
          <!--<th>preview</th>-->
          <!--<th>progress</th>-->
          <!--<th>status</th>-->
          <!--<th>action</th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr v-for='file in files'>-->
          <!--<td v-text='file.name'></td>-->
          <!--<td v-text='file.size'></td>-->
          <!--<td>-->
          <!--<img :src="onPreview(file)" alt="">-->
          <!--</td>-->
          <!--<td v-text='file.progress'></td>-->
          <!--<td v-text='onStatus(file)'></td>-->
          <!--<td>-->
          <!--<button type="button" value="upload" @click="uploadItem(file)">upload</button>-->
          <!--<button type="button" @click="uploadAll(file)">上传所有文件</button>-->
          <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
          <!--</table>-->
        </article>
      </div>
    </div>
    <card-modal :visible="isShowModal"
                :title="'删除流程'"
                transition="zoom"
                v-on:ok="deleteProcess"
                v-on:cancel="openModalCard">
      <div class="content has-text-centered">确定要删除这个流程吗?</div>
    </card-modal>
    <!--<card-modal :visible="isShowImg"-->
                <!--:title="'流程图'"-->
                <!--transition="zoom"-->
                <!--v-on:ok="viewProcessShow"-->
                <!--v-on:cancel="viewProcessShow">-->
      <!--<img :src="" alt="流程图">-->
    <!--</card-modal>-->
  </div>
</template>

<script type="text/ecmascript-6">
  //  import VueFileUpload from 'vue-file-upload'
  import { CardModal } from 'vue-bulma-modal'

  export default {
//    data(){
//      return{
//        files:[],
//        //文件过滤器，只能上传图片
//        filters:[
//          {
//            name:"imageFilter",
//            fn(file){
//              var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
//              return '|zip|'.indexOf(type) !== -1;
//            }
//          }
//        ],
//        //回调函数绑定
//        cbEvents:{
//          onCompleteUpload:(file,response,status,header)=>{
//            console.log(file);
//            console.log("finish upload;")
//          }
//        },
//        //xhr请求附带参数
//        reqopts:{
//          formData:{
//            tokens:'tttttttttttttt'
//          },
//          responseType:'json',
//          withCredentials:false
//        }
//      }
//    },
//    methods:{
//      onStatus(file){
//        if(file.isSuccess){
//          return "上传成功";
//        }else if(file.isError){
//          return "上传失败";
//        }else if(file.isUploading){
//          return "正在上传";
//        }else{
//          return "待上传";
//        }
//      },
//      onAddItem(files){
//        console.log(files);
//        this.files = files;
//      },
//      uploadItem(file){
//        //单个文件上传
//        file.upload();
//      },
//      uploadAll(){
//        //上传所有文件
//        this.$refs.vueFileUploader.uploadAll();
//      }
//    },
//    components:{
//      VueFileUpload
//    }
    components: {
      CardModal
    },
    mounted () {
      this.getListAll()
    },
    data () {
      return {
        processDefinitions: [],
        isShowModal: false,
        isShowImg: false,
        currentKey: '',
        currentId: ''
      }
    },
    methods: {
      getListAll () {
        this.$http.get('/api/workflow/getAllLastDeployment').then((resp) => {
          console.log(resp)
          this.processDefinitions = resp.data
        })
      },
      deploy () {
        this.$http.put('/api/workflow/deploy').then((resp) => {
          console.log(resp)
          this.getListAll()
        })
      },
      openModalCard (key) {
        if (key) {
          this.currentKey = key
        }
        this.isShowModal = !this.isShowModal
      },
      deleteProcess () {
        console.log(111)
        this.$http.delete('/api/workflow/deleteDeploymentByPDKey/' + this.currentKey).then((resp) => {
          this.isShowModal = false
          this.getListAll()
          console.log(resp)
        })
      },
      viewProcessShow (id) {
        if (id) {
          this.currentId = id
        }
        this.isShowImg = !this.isShowImg
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-responsive {
    display: block;
    width: 100%;
    min-height: .01%;
    overflow-x: auto;
  }
</style>