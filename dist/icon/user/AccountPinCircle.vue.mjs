import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccountPinCircle",
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
    const RemixAccountPinCircle = () => {
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
          "d": "M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
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
          "d": "M9.745 21.745C5.308 20.722 2 16.747 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.747-3.308 8.722-7.745 9.745L12 24l-2.255-2.255zm-2.733-3.488a7.953 7.953 0 0 0 3.182 1.539l.56.129L12 21.172l1.247-1.247.56-.13a7.956 7.956 0 0 0 3.36-1.686A6.979 6.979 0 0 0 12.16 16c-2.036 0-3.87.87-5.148 2.257zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixAccountPinCircle);
    };
  }
});
export {
  _sfc_main as default
};
