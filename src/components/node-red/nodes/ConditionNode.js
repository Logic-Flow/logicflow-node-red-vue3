import { HtmlNode, HtmlNodeModel, h } from "@logicflow/core";
import { createApp } from 'vue';
// import ConditonNode from './ConditionNode.vue';
class ConditionNode extends HtmlNode {
  // constructor (props) {
  //   super(props)
  //   this.app = createApp({})
  //   this.app.component('button-counter', {
  //     data() {
  //       return {
  //         count: 0
  //       }
  //     },
  //     template: `
  //       <button @click="count++">
  //         You clicked me {{ count }} times.
  //       </button>`
  //   })
  // }
  /**
   * 1.1.7版本后支持在view中重写锚点形状。
   * 重写锚点新增
   */
  getAnchorShape(anchorData) {
    const { x, y, type } = anchorData;
    return h("rect", {
      x: x - 5,
      y: y - 5,
      width: 10,
      height: 10,
      className: `custom-anchor ${
        type === "left" ? "incomming-anchor" : "outgoing-anchor"
      }`
    });
  }
  setHtml(rootEl) {
    const el = document.createElement('div')
    el.id = 'js_id'
    console.log(5555, this.app, rootEl);
    el.innerHTML = '<div><button-counter></button-counter>111</div>' 
    rootEl.appendChild(el);
    const app = createApp({})

    // Define a new global component called button-counter
    app.component('button-counter', {
      data() {
        return {
          count: 0
        }
      },
      template: `
        <button v-on:click="count++">
          You clicked me {{ count }} times.
        </button>`
    })
    setTimeout(() => {
      app.mount('#js_id');
    })
    // rootEl.appendChild(container);
  }
}

class ConditionNodeModel extends HtmlNodeModel {
  /**
   * 给model自定义添加字段方法
   */
  addField(item) {
    this.properties.fields.push(item);
    this.setAttributes();
    // 为了保持节点顶部位置不变，在节点变化后，对节点进行一个位移,位移距离为添加高度的一半。
    this.move(0, 24 / 2);
  }
  getOutlineStyle() {
    const style = super.getOutlineStyle();
    style.stroke = "none";
    style.hover.stroke = "none";
    return style;
  }
  // 如果不用修改锚地形状，可以重写颜色相关样式
  getAnchorStyle(anchorInfo) {
    const style = super.getAnchorStyle();
    if (anchorInfo.type === "left") {
      style.fill = "red";
      style.hover.fill = "transparent";
      style.hover.stroke = "transpanrent";
      style.className = "lf-hide-default";
    } else {
      style.fill = "green";
    }
    return style;
  }
}

export default {
  type: "condition-node",
  model: ConditionNodeModel,
  view: ConditionNode
};
