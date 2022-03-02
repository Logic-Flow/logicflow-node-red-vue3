import { RectNode, RectNodeModel } from "@logicflow/core"

class FunctionNode extends RectNode {
}

class FunctionNodeModel extends RectNodeModel {
  getNodeStyle() {
    const style = super.getNodeStyle()
    if (this.properties.name) {
      style.fill = this.properties.color
    }
    return style
  }
}

export default {
  type: 'function-node',
  model: FunctionNodeModel,
  view: FunctionNode
}
