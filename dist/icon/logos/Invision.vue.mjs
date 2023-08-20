import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Invision",
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
    const RemixInvision = () => {
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
          "d": "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2.988 11.065c-.06.267-.09.555-.09.79 0 .927.482 1.542 1.508 1.542.851 0 1.541-.526 2.038-1.375l-.303 1.267h1.69l.966-4.031c.241-1.02.71-1.55 1.419-1.55.558 0 .905.36.905.957 0 .173-.015.361-.075.565l-.498 1.853a2.89 2.89 0 0 0-.106.785c0 .88.498 1.523 1.54 1.523.89 0 1.6-.596 1.992-2.025l-.664-.267c-.332.958-.62 1.13-.846 1.13-.226 0-.347-.156-.347-.47 0-.141.03-.298.076-.487l.483-1.805c.12-.424.166-.8.166-1.145 0-1.35-.785-2.055-1.736-2.055-.89 0-1.796.835-2.248 1.715l.331-1.579h-2.58l-.363 1.39h1.208l-.744 3.098c-.583 1.35-1.656 1.372-1.79 1.34-.222-.051-.363-.139-.363-.438 0-.172.03-.42.106-.718l1.132-4.672H6.927l-.362 1.39h1.192l-.77 3.272zm1.637-5.44a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z"
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
          "d": "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm1.988 9.065l.77-3.271H6.564l.362-1.39h2.868l-1.132 4.67a3.071 3.071 0 0 0-.106.72c0 .298.141.386.362.437.135.032 1.208.01 1.791-1.34l.744-3.097h-1.208l.363-1.39h2.58l-.331 1.578c.452-.88 1.358-1.715 2.248-1.715.95 0 1.736.704 1.736 2.055 0 .345-.046.721-.166 1.145l-.483 1.805a2.159 2.159 0 0 0-.076.487c0 .314.121.47.347.47.227 0 .514-.172.846-1.13l.664.267c-.393 1.429-1.102 2.025-1.993 2.025-1.041 0-1.539-.643-1.539-1.523 0-.25.03-.518.106-.785l.498-1.853c.06-.204.075-.392.075-.565 0-.596-.347-.958-.905-.958-.71 0-1.178.53-1.419 1.55l-.966 4.032h-1.69l.303-1.267c-.497.85-1.187 1.375-2.038 1.375-1.026 0-1.509-.615-1.509-1.542 0-.235.03-.523.09-.79zm1.637-5.44a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixInvision);
    };
  }
});
export {
  _sfc_main as default
};