import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Bell",
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
    const RemixBell = () => {
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
          "d": "M13.414 10.586l.48.486.465.485.459.492c3.458 3.764 5.472 7.218 4.607 8.083-.4.4-1.356.184-2.64-.507a9.006 9.006 0 0 1-10.403-.592l2.98-2.98a2 2 0 1 0-1.45-1.569l.035.155-2.979 2.98a9.007 9.007 0 0 1-.592-10.405c-.692-1.283-.908-2.238-.508-2.639.977-.976 5.25 1.715 9.546 6.01zm6.364-6.364a2 2 0 0 1-.164 2.976 9.015 9.015 0 0 1 .607 8.47c-1.189-1.954-3.07-4.174-5.393-6.496l-.537-.532c-2.128-2.079-4.156-3.764-5.958-4.86a9.015 9.015 0 0 1 8.471.607 2 2 0 0 1 2.974-.165z"
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
          "d": "M14.121 9.879c4.296 4.295 6.829 8.728 5.657 9.9-.475.474-1.486.34-2.807-.273a9.008 9.008 0 0 1-10.59-.474l-.038.04-1.414-1.415.038-.04A9.006 9.006 0 0 1 4.495 7.03c-.614-1.322-.748-2.333-.273-2.808 1.128-1.128 5.277 1.177 9.417 5.182l.482.475zm-1.414 1.414C10.823 9.409 8.87 7.842 7.236 6.87l-.186.18a7.002 7.002 0 0 0-.657 9.142l1.846-1.846a2 2 0 1 1 1.416 1.415l-1.848 1.846a7.002 7.002 0 0 0 9.143-.657l.179-.188-.053-.089c-.976-1.615-2.52-3.53-4.369-5.38zm7.071-7.071a2 2 0 0 1-.164 2.976 9.015 9.015 0 0 1 .662 8.345 21.168 21.168 0 0 0-1.386-2.306 6.99 6.99 0 0 0-1.94-6.187 6.992 6.992 0 0 0-6.187-1.94 21.092 21.092 0 0 0-2.306-1.386 9.016 9.016 0 0 1 8.347.663 2 2 0 0 1 2.974-.165z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixBell);
    };
  }
});
export {
  _sfc_main as default
};
