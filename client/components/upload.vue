<template>
  <div>
    <el-upload
      action="//jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :default-file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Button, Upload} from 'element-ui'
  import 'element-ui/lib/theme-default/button.css'
  import 'element-ui/lib/theme-default/upload.css'
  export default {
    props: [],
    components: {
      'el-button': Button,
      'el-upload': Upload
    }
  }
</script>

<style lang="scss" scoped>

</style>
