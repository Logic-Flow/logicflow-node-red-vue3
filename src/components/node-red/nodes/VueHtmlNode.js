import { HtmlNode, HtmlNodeModel } from "@logicflow/core";
import { createApp, ref, h } from 'vue';
import VueNode from './VueNode.vue';

class VueHtmlNode extends HtmlNode {
  constructor (props) {
    super(props)
    // const appRef = ref(null)
    this.app = createApp({
      render: () => h(VueNode, {
        // ref: appRef,
        title: '312',
        properties: props.model.getProperties(),
        onBtnClick: (i) => {
          console.log(44, i)
          props.model.setProperties({
            t: i++
          })
        }
      })
    })
  }
  setHtml(rootEl) {
    const node = document.createElement('div')
    // const { model, graphModel } = this.props;
    // const properties = model.getProperties();
    rootEl.appendChild(node)
    this.app.mount(node)
    console.log(34)
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