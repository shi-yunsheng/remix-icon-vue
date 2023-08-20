import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Xbox",
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
    const RemixXbox = () => {
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
          "fill-rule": "nonzero",
          "d": "M5.418 19.527A9.956 9.956 0 0 0 12 22a9.967 9.967 0 0 0 6.585-2.473c1.564-1.593-3.597-7.257-6.585-9.514-2.985 2.257-8.15 7.921-6.582 9.514zm9.3-12.005c2.084 2.468 6.237 8.595 5.064 10.76A9.952 9.952 0 0 0 22 12.003a9.958 9.958 0 0 0-2.975-7.113s-.022-.018-.068-.035a.686.686 0 0 0-.235-.038c-.493 0-1.654.362-4.004 2.705zM5.045 4.856c-.048.017-.068.034-.072.035A9.963 9.963 0 0 0 2 12.003c0 2.379.832 4.561 2.218 6.278C3.05 16.11 7.2 9.988 9.284 7.523 6.934 5.178 5.771 4.818 5.28 4.818a.604.604 0 0 0-.234.039v-.002zM12 4.959S9.546 3.523 7.63 3.455c-.753-.027-1.212.246-1.268.282C8.149 2.538 10.049 2 11.987 2H12c1.945 0 3.838.538 5.638 1.737-.056-.038-.512-.31-1.266-.282-1.917.068-4.372 1.5-4.372 1.5v.004z"
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
          "d": "M4.797 15.485c1.124-2.52 3.2-5.44 4.487-6.962-1.248-1.246-2.162-1.931-2.818-2.3A7.977 7.977 0 0 0 4 12c0 1.25.286 2.432.797 3.485zm4.051-10.84C10.448 5.05 12 5.959 12 5.959v-.005s1.552-.904 3.151-1.31A7.974 7.974 0 0 0 12 4c-1.12 0-2.185.23-3.152.645zm8.686 1.578c-.655.37-1.568 1.055-2.816 2.3 1.287 1.523 3.362 4.441 4.486 6.961A7.968 7.968 0 0 0 20 12c0-2.27-.946-4.32-2.466-5.777zm.408 11.133c-1.403-2.236-4.09-4.944-5.942-6.343-1.85 1.4-4.539 4.108-5.941 6.345A7.98 7.98 0 0 0 12 20a7.98 7.98 0 0 0 5.942-2.644zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixXbox);
    };
  }
});
export {
  _sfc_main as default
};
