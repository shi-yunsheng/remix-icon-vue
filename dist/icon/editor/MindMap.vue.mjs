import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MindMap",
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
    const RemixMindMap = () => {
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
        "d": "M18 3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-1.1 0-2 .9-2 2v.171c1.166.412 2 1.523 2 2.829 0 1.306-.834 2.417-2 2.829V15c0 1.1.9 2 2 2h1.17c.412-1.165 1.524-2 2.83-2h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-2.21 0-4-1.79-4-4H5c-1.657 0-3-1.343-3-3s1.343-3 3-3h2c0-2.21 1.79-4 4-4h1.17c.412-1.165 1.524-2 2.83-2h3zm0 14h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zM8 11H5c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zm10-6h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1z"
      }, null)])])]);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixMindMap);
    };
  }
});
export {
  _sfc_main as default
};
