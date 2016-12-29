<template>
  <div :class="[classname]">
    <label :for="name">
      <input type="file" :name="name" :id="id || name"
             :accept="accept" @click="fileInputClick"
             @change="fileInputChange" :multiple="multiple">
      <slot></slot>
    </label>
    <button type="button" @click="fileUpload">Upload</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      classname: String,
      name: {
        type: String,
        required: true
      },
      id: String,
      action: {
        type: String,
        required: true
      },
      accept: String,
      multiple: String,
      headers: Object,
      params: Object,
      successCallback: {
        type: Function,
        default: function (resp) {
          console.log(resp)
        }
      },
      errorCallback: {
        type: Function,
        default: function (resp) {
          console.log(resp)
        }
      }
    },
    data: function () {
      return {
        myFiles: [] // a container for the files in our field
      }
    },
    methods: {
      fileInputClick: function () {
        // click actually triggers after the file dialog opens
        this.$emit('fileInputClick')
      },
      fileInputChange: function () {
        // get the group of files assigned to this field
        let ident = this.id || this.name
        this.myFiles = this.$el.querySelector('#' + ident).files
        console.log(this.myFiles)
        this.$emit('fileInputChange', this.myFiles)
      },
      fileUpload: function () {
        if (this.myFiles.length > 0) {
          // a hack to push all the Promises into a new array
          let form = new window.FormData()
          if (this.multiple) {
            form.append(this.name, this.myFiles)
          } else {
            form.append(this.name, this.myFiles[0])
          }
          // 添加其他参数
          if (typeof this.params === 'object' && this.params) {
            Object.keys(this.params).forEach((k) => {
              form.append(k, this.params[k])
            })
          }
          this.$http.post(this.action, form, {progress: (event) => {
            console.log(event)
          }}).then(this.successCallback, this.errorCallback)
        } else {
          // someone tried to upload without adding files
          var err = new Error('No files to upload for this field')
          console.error('onFileError', this.myFiles, err)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>