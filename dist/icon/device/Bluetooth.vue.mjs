import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Bluetooth",
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
    const RemixBluetooth = () => {
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
          "d": "M0 0h24v24H0z"
        }, null), createVNode("path", {
          "d": "M14.341 12.03l4.343 4.343-5.656 5.656h-2v-6.686l-4.364 4.364-1.415-1.414 5.779-5.778v-.97L5.249 5.765l1.415-1.414 4.364 4.364V2.029h2l5.656 5.657-4.343 4.343zm-1.313 1.514v5.657l2.828-2.828-2.828-2.829zm0-3.03l2.828-2.828-2.828-2.828v5.657z"
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
          "d": "M0 0h24v24H0z"
        }, null), createVNode("path", {
          "d": "M14.341 12.03l4.343 4.343-5.656 5.656h-2v-6.686l-4.364 4.364-1.415-1.414 5.779-5.778v-.97L5.249 5.765l1.415-1.414 4.364 4.364V2.029h2l5.656 5.657-4.343 4.343zm-1.313 1.514v5.657l2.828-2.828-2.828-2.829zm0-3.03l2.828-2.828-2.828-2.828v5.657z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixBluetooth);
    };
  }
});
export {
  _sfc_main as default
};