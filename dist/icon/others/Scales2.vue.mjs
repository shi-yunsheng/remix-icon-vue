import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Scales2",
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
    const RemixScales2 = () => {
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
          "d": "M6 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2c0 1.657-1.343 3-3 3h-4l.001 2.062C16.947 7.555 20 10.921 20 15v6c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1v-6c0-4.08 3.054-7.446 7-7.938V5H7C5.34 5 4 3.66 4 2h2zm6 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.742-.202-1.436-.554-2.032l-2.739 2.74-.094.082c-.392.305-.96.278-1.32-.083-.39-.39-.39-1.024 0-1.414l2.739-2.74C13.436 11.203 12.742 11 12 11z"
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
          "d": "M6 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2c0 1.657-1.343 3-3 3h-4l.001 2.062C16.947 7.555 20 10.921 20 15v6c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1v-6c0-4.08 3.054-7.446 7-7.938V5H7C5.34 5 4 3.66 4 2h2zm6 7c-3.238 0-6 2.76-6 6v5h12v-5c0-3.238-2.762-6-6-6zm0 2c.742 0 1.436.202 2.032.554l-2.74 2.739c-.39.39-.39 1.024 0 1.414.361.36.929.388 1.32.083l.095-.083 2.74-2.739c.351.596.553 1.29.553 2.032 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixScales2);
    };
  }
});
export {
  _sfc_main as default
};
