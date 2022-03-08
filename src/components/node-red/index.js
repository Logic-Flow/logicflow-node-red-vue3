import FunctionNode from "./nodes/FunctionNode"
import SwitchNode from "./nodes/SwitchNode"
// import ConditionNode from "./nodes/ConditionNode"

class NodeRedExtension {
  static pluginName = 'NodeRedExtension'
  constructor ({ lf }) {
    lf.register(FunctionNode)
    lf.register(SwitchNode)
    // lf.register(ConditionNode)
  }
}

export default NodeRedExtension