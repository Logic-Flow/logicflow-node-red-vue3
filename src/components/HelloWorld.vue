<script>
import { ref } from 'vue'

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
    console.log(44, this.con)
  }
}
</script>

<template>
  <div ref="container"></div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
