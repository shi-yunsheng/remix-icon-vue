import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DonutChart",
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
    const RemixDonutChart = () => {
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
          "d": "M11 2.05v3.02C7.608 5.557 5 8.475 5 12c0 3.866 3.134 7 7 7 1.572 0 3.024-.518 4.192-1.394l2.137 2.137C16.605 21.153 14.4 22 12 22 6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13c-.2 2.011-.994 3.847-2.207 5.328l-2.137-2.136c.687-.916 1.153-2.006 1.323-3.192h3.022zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022c-.438-3.065-2.863-5.49-5.928-5.929V2.049z"
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
          "d": "M11 2.05v2.012C7.054 4.554 4 7.92 4 12c0 4.418 3.582 8 8 8 1.849 0 3.55-.627 4.906-1.68l1.423 1.423C16.605 21.153 14.4 22 12 22 6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13c-.2 2.011-.994 3.847-2.207 5.328l-1.423-1.422c.86-1.107 1.436-2.445 1.618-3.906h2.013zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-2.013c-.451-3.618-3.319-6.486-6.937-6.938V2.049z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixDonutChart);
    };
  }
});
export {
  _sfc_main as default
};
