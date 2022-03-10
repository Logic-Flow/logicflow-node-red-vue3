<script>
import { ref } from 'vue'
import LogicFlow from '@logicflow/core'
import '@logicflow/core/dist/style/index.css'
import NodeRedExtension from './node-red/index'
import './node-red/style.css'

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
        size: 10,
        config: {
          color: '#eeeeee'
        }
      },
      adjustEdge: false,
      hoverOutline: false,
      edgeSelectedOutline: false,
      keyboard: {
        enabled: true,
      },
      // keyboard: true,
      plugins: [
        NodeRedExtension
      ]
    })
    this.lf.render({
      nodes: [
        {
          type: 'start-node',
          x: 220,
          y: 200,
          text: '开始'
        },
      ]
    })
  }
}
</script>

<template>
  <div class="flow-chart">
    <div ref="container" class="container"></div>
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
.flow-chart /deep/ .lf-red-node, .flow-chart /deep/ .lf-element-text {
  cursor: move;
}
.flow-chart-palette {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
