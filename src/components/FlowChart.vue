<script>
import { ref } from 'vue'
import LogicFlow from '@logicflow/core'
import '@logicflow/core/dist/style/index.css'
import Palette from './Palette.vue'
import FunctionNode from './nodes/FunctionNode'

export default {
  setup() {
    const count = ref(0)
    return {
      count
    }
  },
  mounted() {
    this.lf = new LogicFlow({
      container: this.$refs.container,
      grid: {
        visible: true,
        type: 'mesh',
        config: {
          color: '#eeeeee'
        }
      }
    })
    console.log(FunctionNode)
    this.lf.register(FunctionNode)
    this.lf.render({
      nodes: [
        {
          id: 'id1',
          type: 'function-node',
          x: 350,
          y: 150,
          properties: {
            name: '1',
            color: 'red',
            forms: []
          },
          text: {
            x: 365,
            y: 152,
            value: '开始节点'
          }
        }]
    })
  },
  methods: {
    setProperties () {
      this.lf.setProperties('id1', {
        color: 'green',
      })
    }
  },
  components: {
    Palette
  }
}
</script>

<template>
  <div class="flow-chart">
    <div ref="container" class="container"></div>
    <Palette class="flow-chart-palette">
      <button @click="setProperties">11</button>
    </Palette>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.flow-chart {
  position: relative;
  width: 100%;
  height: 100%;
}
.flow-chart-palette {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
