import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Basketball",
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
    const RemixBasketball = () => {
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
          "d": "M12.366 13.366l1.775 1.025a9.98 9.98 0 0 0-.311 7.44A9.911 9.911 0 0 1 12 22a9.964 9.964 0 0 1-4.11-.88l4.476-7.754zm3.517 2.032l4.234 2.444a10.033 10.033 0 0 1-4.363 3.43 7.988 7.988 0 0 1 .008-5.57l.121-.304zM8.86 11.342l1.775 1.024-4.476 7.75a10.026 10.026 0 0 1-3.59-4.785 9.978 9.978 0 0 0 6.085-3.713l.206-.276zm13.046-.726c.063.453.095.915.095 1.384a9.964 9.964 0 0 1-.88 4.11l-4.236-2.445a7.985 7.985 0 0 1 4.866-3.021l.155-.028zM2.881 7.891l4.235 2.445a7.99 7.99 0 0 1-5.021 3.05A10.14 10.14 0 0 1 2 12c0-1.465.315-2.856.88-4.11zm14.961-4.008a10.026 10.026 0 0 1 3.59 4.785 9.985 9.985 0 0 0-6.086 3.715l-.205.276-1.775-1.025 4.476-7.75zM12 2c1.465 0 2.856.315 4.11.88l-4.476 7.754L9.859 9.61a9.98 9.98 0 0 0 .311-7.442A9.922 9.922 0 0 1 12 2zm-3.753.73a7.992 7.992 0 0 1-.01 5.57l-.12.303-4.234-2.445a10.036 10.036 0 0 1 4.164-3.346l.2-.083z"
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
          "d": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixBasketball);
    };
  }
});
export {
  _sfc_main as default
};
