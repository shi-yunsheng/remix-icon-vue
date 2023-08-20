import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Centos",
  props: Props,
  setup(__props) {
    const props = __props;
    const iconStyle = reactive({
      "--icon-size": "",
      "--icon-color": ""
    });
    const iconSize = isNumber(props.size) ? `${props.size}px` : props.size;
    const iconColor = props.color || "";
    iconStyle["--icon-size"] = iconSize;
    iconStyle["--icon-color"] = iconColor;
    const RemixCentos = () => {
      if (props.fill) {
        return createVNode("i", {
          "class": ["remix-icon", {
            "remix-icon--spin": props.spin
          }],
          "style": iconStyle
        }, [createVNode("svg", {
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 24 24"
        }, [createVNode("g", null, [createVNode("path", {
          "fill": "none",
          "d": "M0 0H24V24H0z"
        }, null), createVNode("path", {
          "d": "M12 13.06l4.47 4.471L12 22l-4.47-4.47L12 13.06zm-8 3.06L7.879 20H4v-3.88zm16 0V20h-3.88L20 16.12zm-2.47-8.59L22 12l-4.469 4.47-4.47-4.47 4.469-4.47zm-11.06 0L10.94 12l-4.471 4.469L2 12l4.47-4.47zM12 2l4.469 4.469L12 10.939 7.53 6.47 12 2zM7.879 4l-3.88 3.879L4 4h3.879zM20 4v3.879l-3.88-3.88L20 4z"
        }, null)])])]);
      } else {
        return createVNode("i", {
          "class": ["remix-icon", {
            "remix-icon--spin": props.spin
          }],
          "style": iconStyle
        }, [createVNode("svg", {
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 24 24"
        }, [createVNode("g", null, [createVNode("path", {
          "fill": "none",
          "d": "M0 0H24V24H0z"
        }, null), createVNode("path", {
          "d": "M12 2l4.292 4.292 1.061-1.06L16.121 4H20v3.879l-1.233-1.233-1.06 1.061L22 12l-4.292 4.293 1.059 1.059L20 16.121V20h-3.88l1.232-1.233-1.059-1.06L12 22l-4.293-4.293-1.061 1.06L7.879 20H4v-3.88l1.231 1.232 1.061-1.06L2 12l4.293-4.293-1.062-1.061L4 7.879V4h3.879L6.646 5.23l1.062 1.062L12 2zm0 11.413l-2.88 2.879 2.88 2.88 2.879-2.88L12 13.412zM7.707 9.12L4.828 12l2.878 2.878 2.88-2.88-2.879-2.877zm8.585 0l-2.877 2.878 2.878 2.879L19.172 12l-2.88-2.879zM12 4.828L9.122 7.707l2.879 2.878 2.877-2.879L12 4.828z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixCentos);
    };
  }
});
export {
  _sfc_main as default
};
