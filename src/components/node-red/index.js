import { createApp } from 'vue';
import FunctionNode from "./nodes/FunctionNode";
import SwitchNode from "./nodes/SwitchNode";
import StartNode  from "./nodes/StartNode";
import FetchNode from "./nodes/FetchNode";
import FlowLink from "./FlowLink";
import Palette from './tools/Palette.vue';

class NodeRedExtension {
  static pluginName = 'NodeRedExtension'
  constructor ({ lf }) {
    lf.register(FunctionNode);
    lf.register(SwitchNode);
    lf.register(StartNode);
    lf.register(FetchNode);
    lf.register(FlowLink);
    lf.setDefaultEdgeType('flow-link');
    this.app = createApp(Palette, {
      lf
    })
  }
  render(lf, domOverlay) {
    const node = document.createElement('div')
    node.className = 'node-red-palette'
    domOverlay.appendChild(node)
    setTimeout(() => {
      this.app.mount(node)
    })
  }
}

export default NodeRedExtension