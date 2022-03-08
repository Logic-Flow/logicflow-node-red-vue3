<script>
import { ref } from 'vue'
import LogicFlow from '@logicflow/core'
import '@logicflow/core/dist/style/index.css'
import NodeRedExtension from './node-red/index'
import './node-red/style.css'
import Palette from './Palette.vue'

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
      },
      plugins: [
        NodeRedExtension
      ]
    })
    this.lf.render({
      nodes: [
        {
          id: 'id1',
          type: 'function-node',
          x: 350,
          y: 150,
          text: '开始节点啊啊撒'
        },
        {
          id: 'id2',
          type: 'switch-node',
          x: 550,
          y: 150,
          text: 'switch'
        }
      ]
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
    <Palette class="flow-chart-palette">
      <button @click="setProperties">11</button>
    </Palette>
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
