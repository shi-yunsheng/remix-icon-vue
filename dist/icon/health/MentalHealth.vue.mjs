import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MentalHealth",
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
    const RemixMentalHealth = () => {
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
          "d": "M11 2c4.068 0 7.426 3.036 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17c0 1.105-.895 2-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305C3.657 13.631 3 11.892 3 10c0-4.418 3.582-8 8-8zm-.53 5.763c-.684-.684-1.792-.684-2.475 0-.684.683-.684 1.791 0 2.474L11 13.243l3.005-3.006c.684-.683.684-1.791 0-2.474-.683-.684-1.791-.684-2.475 0l-.53.53-.53-.53z"
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
          "d": "M11 2c4.068 0 7.426 3.036 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17c0 1.105-.895 2-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305C3.657 13.631 3 11.892 3 10c0-4.418 3.582-8 8-8zm0 2c-3.314 0-6 2.686-6 6 0 1.385.468 2.693 1.316 3.75C7.41 15.114 8 16.667 8 18.306V20h5l.002-3H17v-4.248l1.55-.664-1.543-2.425-.057-.442C16.566 6.251 14.024 4 11 4zm-.53 3.763l.53.53.53-.53c.684-.684 1.792-.684 2.475 0 .684.683.684 1.791 0 2.474L11 13.243l-3.005-3.006c-.684-.683-.684-1.791 0-2.474.683-.684 1.791-.684 2.475 0z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixMentalHealth);
    };
  }
});
export {
  _sfc_main as default
};
