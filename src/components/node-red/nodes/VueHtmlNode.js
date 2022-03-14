import { HtmlNode, HtmlNodeModel } from "@logicflow/core";
import { createApp } from 'vue';
import VueNode from './VueNode.vue';

class VueHtmlNode extends HtmlNode {
  constructor (props) {
    super(props)
    this.app = createApp(VueNode)
  }
  setHtml(rootEl) {
    const node = document.createElement('div')
    const { model, graphModel } = this.props;
    const properties = model.getProperties();
    rootEl.appendChild(node)
    if (!this.isMounted) {
      this.app.mount(node)
      this.app._instance.emitsOptions['btn:click'] = (val) => {
        graphModel.eventCenter.emit('vue-node:click', {
          id: model.id,
          val
        })
      }
      this.isMounted = true
    } else {
      this.app._instance.props.properties = properties
    }
  }
}

class VueHtmlNodeModel extends HtmlNodeModel {
  setAttributes() {
    this.width = 300;
    this.height = 32;
    this.text.editable = false;
  }
  getOutlineStyle() {
    const style = super.getOutlineStyle();
    style.stroke = 'none';
    style.hover.stroke = 'none';
    return style;
  }
  getDefaultAnchor() {
    return []
  }
}

export default {
  type: 'vue-html',
  model: VueHtmlNodeModel,
  view: VueHtmlNode
}