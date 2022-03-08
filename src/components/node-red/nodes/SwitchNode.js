import { h } from '@logicflow/core'
import BaseNode from "./BaseNode"

class SwitchNode extends BaseNode.view {
  getIcon () {
    const {
      width,
      height,
    } = this.props.model;
    return h('image', {
      width: 30,
      height: 30,
      x: - width / 2,
      y: - height / 2,
      href: 'images/switch.svg'
    })
  }
}

class SwitchNodeModel extends BaseNode.model {
  getNodeStyle() {
    const style = super.getNodeStyle()
    style.fill = 'rgb(226, 217, 110)';
    return style
  }
}

export default {
  type: 'switch-node',
  model: SwitchNodeModel,
  view: SwitchNode
}
