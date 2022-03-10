import { h } from '@logicflow/core'
import BaseNode from "./BaseNode"

class DelayNode extends BaseNode.view {
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
      href: 'images/delay.svg'
    })
  }
}

class DelayNodeModel extends BaseNode.model {
  getNodeStyle() {
    const style = super.getNodeStyle()
    style.fill = 'rgb(230, 224, 248)';
    return style
  }
}

export default {
  type: 'delay-node',
  model: DelayNodeModel,
  view: DelayNode
}
