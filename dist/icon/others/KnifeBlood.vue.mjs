import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KnifeBlood",
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
    const RemixKnifeBlood = () => {
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
          "d": "M4.342 1.408L22.373 19.44a1.5 1.5 0 0 1-2.121 2.122l-4.596-4.597L12.12 20.5 8 16.38V19a1 1 0 0 1-2 0v-4a1 1 0 0 0-1.993-.117L4 15v1a1 1 0 0 1-2 0V7.214a7.976 7.976 0 0 1 2.168-5.627l.174-.179z"
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
          "fill-rule": "nonzero",
          "d": "M4.342 1.408L22.373 19.44a1.5 1.5 0 0 1-2.121 2.122l-4.596-4.597L12.12 20.5 8 16.38V19a1 1 0 0 1-2 0v-4a1 1 0 0 0-1.993-.117L4 15v1a1 1 0 0 1-2 0V7.214a7.976 7.976 0 0 1 2.168-5.627l.174-.179zm.241 3.07l-.051.11a5.993 5.993 0 0 0-.522 2.103L4 7l-.001.12a5.984 5.984 0 0 0 1.58 4.003l.177.185 6.363 6.363 2.829-2.828L4.583 4.478z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixKnifeBlood);
    };
  }
});
export {
  _sfc_main as default
};
