import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Suitcase2",
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
    const RemixSuitcase2 = () => {
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
          "d": "M18 23h-2v-1H8v1H6v-1H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h3V3c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h3c1.105 0 2 .895 2 2v13c0 1.105-.895 2-2 2h-1v1zM10 9H8v9h2V9zm6 0h-2v9h2V9zm-2-5h-4v1h4V4z"
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
          "d": "M18 23h-2v-1H8v1H6v-1H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h3V3c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h3c1.105 0 2 .895 2 2v13c0 1.105-.895 2-2 2h-1v1zm1-16H5v13h14V7zm-9 2v9H8V9h2zm6 0v9h-2V9h2zm-2-5h-4v1h4V4z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixSuitcase2);
    };
  }
});
export {
  _sfc_main as default
};