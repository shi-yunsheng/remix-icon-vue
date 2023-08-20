import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Disqus",
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
    const RemixDisqus = () => {
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
          "d": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-2.53 0-4.84-.94-6.601-2.488L1.5 20l1.424-3.797C2.33 14.925 2 13.501 2 12 2 6.477 6.477 2 12 2zM8 7v10h3.733l.263-.004c3.375-.103 5.337-2.211 5.337-5.025v-.027l-.003-.215C17.23 8.956 15.21 7 11.79 7H8zm3.831 2.458c1.628 0 2.709.928 2.709 2.529v.028l-.005.183c-.079 1.5-1.138 2.345-2.704 2.345h-1.108V9.458h1.108z"
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
          "d": "M11.95 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-2.306 0-4.492-.784-6.249-2.192l-4.718.59 1.72-4.586C2.207 14.614 1.95 13.324 1.95 12c0-5.523 4.477-10 10-10zm0 2c-4.418 0-8 3.582-8 8 0 1.178.254 2.318.738 3.362l.176.38-.847 2.26 2.315-.289.338.297C8.12 19.286 9.978 20 11.95 20c4.418 0 8-3.582 8-8s-3.582-8-8-8zM8 7h3.79c3.42 0 5.44 1.956 5.54 4.729l.003.215v.027c0 2.814-1.962 4.922-5.337 5.025l-.263.004H8V7h3.79H8zm3.831 2.458h-1.108v5.085h1.108c1.566 0 2.625-.845 2.704-2.345l.005-.183v-.028c0-1.6-1.08-2.53-2.709-2.53z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixDisqus);
    };
  }
});
export {
  _sfc_main as default
};
