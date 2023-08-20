import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Amazon",
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
    const RemixAmazon = () => {
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
          "d": "M21.996 18.23c0 .727-.405 2.127-1.314 2.896-.182.14-.365.061-.285-.143.265-.648.872-2.147.587-2.492-.2-.262-1.03-.243-1.738-.182-.324.041-.607.06-.828.105-.203.017-.245-.163-.041-.303.262-.185.545-.325.87-.428 1.15-.344 2.48-.137 2.67.083.036.042.08.16.08.463zm-1.921 1.294a7.426 7.426 0 0 1-.83.55c-2.122 1.275-4.87 1.943-7.258 1.943-3.843 0-7.28-1.417-9.888-3.788-.223-.182-.038-.446.223-.303 2.81 1.64 6.288 2.632 9.889 2.632 2.265 0 4.708-.424 7.035-1.336.162-.061.344-.144.503-.202.367-.165.69.243.326.504zm-6.17-11.03c0-1.041.041-1.654-.304-2.18-.306-.433-.833-.693-1.568-.652-.798.044-1.655.567-1.874 1.526-.042.22-.171.436-.436.483l-2.436-.31c-.174-.04-.438-.173-.352-.521C7.458 4.088 9.81 3.129 12.033 3h.523c1.22 0 2.787.349 3.79 1.264 1.217 1.136 1.088 2.662 1.088 4.32v3.927c0 1.178.477 1.7.958 2.314.13.219.174.477-.045.655-.48.435-1.394 1.219-1.917 1.654-.174.133-.488.147-.61.045-.77-.645-.958-1.003-1.435-1.658-.83.871-1.526 1.352-2.355 1.613a7.035 7.035 0 0 1-1.784.216c-2.09 0-3.746-1.303-3.746-3.88 0-2.049 1.09-3.442 2.7-4.101 1.61-.66 3.95-.87 4.704-.874zm-.478 5.192c.52-.872.477-1.586.477-3.185-.651 0-1.306.045-1.871.178-1.045.303-1.874.961-1.874 2.355 0 1.09.567 1.832 1.525 1.832.132 0 .248-.016.349-.045.67-.186 1.088-.522 1.394-1.135z"
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
          "d": "M15.625 14.62c-1.107 1.619-2.728 2.384-4.625 2.384-2.304 0-4.276-1.773-3.993-4.124.315-2.608 2.34-3.73 5.708-4.143.601-.073.85-.094 2.147-.19l.138-.01v-.215C15 6.526 13.932 5.3 12.5 5.3c-1.437 0-2.44.747-3.055 2.526l-1.89-.652C8.442 4.604 10.193 3.3 12.5 3.3c2.603 0 4.5 2.178 4.5 5.022 0 2.649.163 4.756.483 5.557.356.892.486 1.117.884 1.613l-1.56 1.251c-.523-.652-.753-1.049-1.181-2.122v-.001zm5.632 5.925c-.271.2-.742.081-.529-.44.265-.648.547-1.408.262-1.752-.21-.255-.467-.382-1.027-.382-.46 0-.69.06-.995.08-.204.013-.293-.297-.091-.44a2.96 2.96 0 0 1 .87-.428c1.15-.344 2.505-.155 2.67.083.365.53-.199 2.569-1.16 3.28zm-1.182-1.084a7.555 7.555 0 0 1-.83.695c-2.122 1.616-4.87 2.46-7.258 2.46-3.843 0-7.28-1.793-9.888-4.795-.223-.23-.038-.566.223-.384 2.81 2.077 6.288 3.333 9.889 3.333 2.265 0 4.708-.537 7.035-1.693.162-.076.344-.18.503-.254.367-.21.69.306.326.638zm-5.065-8.92c-1.258.094-1.496.113-2.052.181-2.552.313-3.797 1.003-3.965 2.398-.126 1.043.81 1.884 2.007 1.884 2.039 0 3.517-1.228 4.022-4.463h-.012z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixAmazon);
    };
  }
});
export {
  _sfc_main as default
};
