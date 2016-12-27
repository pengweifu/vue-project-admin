<template>
  <card-modal :visible="visible" @close="close" :title="title" transition="zoom">
    <div class="content has-text-centered">{{content}}</div>
  </card-modal>
</template>

<script>
import { CardModal } from 'vue-bulma-modal'

export default {
  components: {
    CardModal
  },

  props: {
    visible: Boolean,
    title: String,
    content: String
  },

  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
