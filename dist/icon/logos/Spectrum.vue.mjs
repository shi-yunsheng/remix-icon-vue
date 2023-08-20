import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Spectrum",
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
    const RemixSpectrum = () => {
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
          "d": "M13.2 2.006C21.24 2.093 22 3.25 22 12l-.006 1.2C21.907 21.24 20.75 22 12 22l-1.2-.006c-7.658-.083-8.711-1.136-8.794-8.795L2 11.691l.006-.89c.085-7.85 1.19-8.76 9.382-8.8l1.811.005zM8.25 7h-.583a.667.667 0 0 0-.66.568L7 7.667v3.666c0 .335.247.612.568.66l.099.007h.583a3.75 3.75 0 0 1 3.745 3.55l.005.2v.583c0 .335.247.612.568.66l.099.007h3.666a.667.667 0 0 0 .66-.568l.007-.099v-.583a8.75 8.75 0 0 0-8.492-8.746L8.25 7z"
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
          "d": "M11.388 2.001l1.811.005.844.014c7.161.164 7.938 1.512 7.957 9.667l-.006 1.512-.014.844c-.164 7.161-1.512 7.938-9.667 7.957l-1.512-.006-.888-.015c-6.853-.163-7.827-1.428-7.907-8.78L2 11.691l.006-.89.014-.865c.165-7.053 1.487-7.897 9.368-7.935zM14.12 4.01L10.882 4l-1.322.01c-5.489.082-5.544.82-5.559 7.403l.001 2.175.01 1.04c.089 4.982.793 5.343 6.4 5.369l3.454-.002.776-.009c5.108-.091 5.347-.837 5.358-6.877l-.003-2.743-.012-1.055c-.094-4.796-.785-5.25-5.865-5.303zM8.25 7A8.75 8.75 0 0 1 17 15.75v.583a.667.667 0 0 1-.667.667h-3.666a.667.667 0 0 1-.667-.667v-.583A3.75 3.75 0 0 0 8.25 12h-.583A.667.667 0 0 1 7 11.333V7.667C7 7.299 7.299 7 7.667 7h.583z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixSpectrum);
    };
  }
});
export {
  _sfc_main as default
};
