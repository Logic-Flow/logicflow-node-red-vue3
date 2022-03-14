<template>
  <div class="demo-collapse">
    <el-button @click="$emit('btn:click', properties.t)">vue_html_node: click_me_{{properties.t}}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    properties: {
      type: Object,
      default: () => ({
        t: 1
      })
    },
  },
  emits: ['btn:click']
}
</script>
<style scoped>

</style>