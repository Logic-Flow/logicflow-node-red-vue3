<template>
  <div class="demo-collapse">
    <el-button @click="$emit('btnClick', properties.t)">click_me_{{properties.t}}</el-button>
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
    title: String,
  },
  emits: ['btnClick'],
  mounted () {
    console.log(this)
  },
  methods: {
    update(properties) {
      console.log(444, properties)
    }
  }
}
</script>
<style scoped>

</style>