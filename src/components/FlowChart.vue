<script>
import { ref } from 'vue'
import LogicFlow from '@logicflow/core'
import '@logicflow/core/dist/style/index.css'

export default {
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)
    return {
      count
    }
  },
  mounted() {
    console.log(44, this.count)
    this.lf = new LogicFlow({
      container: this.$refs.container,
      grid: true
    })
    this.lf.render()
  }
}
</script>

<template>
  <div ref="container" class="container"></div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
