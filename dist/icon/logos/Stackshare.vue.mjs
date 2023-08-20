import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Stackshare",
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
    const RemixStackshare = () => {
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
          "d": "M21 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h18zm-4.208 2.621c-1.011 0-1.864.676-2.133 1.6h-1.998l-2.46 4.185H8.763c-.268-.925-1.121-1.6-2.133-1.6-1.226 0-2.221.994-2.221 2.22 0 1.228.995 2.222 2.221 2.222 1.012 0 1.865-.676 2.133-1.6h1.471l2.417 4.133h2.018c.268.925 1.121 1.6 2.132 1.6 1.227 0 2.222-.994 2.222-2.221s-.995-2.222-2.222-2.222c-1.01 0-1.864.676-2.132 1.6h-1.317l-2.056-3.536 2.053-3.538h1.31c.27.925 1.122 1.6 2.133 1.6 1.227 0 2.222-.994 2.222-2.221s-.995-2.222-2.222-2.222zm.011 9.427c.644 0 1.168.524 1.168 1.168 0 .644-.524 1.167-1.168 1.167-.566 0-1.038-.405-1.144-.94 0 0-.031-.227 0-.454.106-.535.578-.94 1.144-.94zm-10.152-4.21c.644 0 1.168.524 1.168 1.168 0 .643-.524 1.167-1.168 1.167-.644 0-1.167-.524-1.167-1.167 0-.644.523-1.167 1.167-1.167zm10.15-4.209c.644 0 1.168.523 1.168 1.167s-.524 1.168-1.168 1.168c-.565 0-1.038-.406-1.144-.941-.026-.206 0-.446 0-.446.106-.543.579-.948 1.144-.948z"
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
          "d": "M9.536 13H7.329c-.412 1.166-1.523 2-2.829 2-1.657 0-3-1.343-3-3s1.343-3 3-3c1.306 0 2.418.835 2.83 2h2.206L13 5h3.17c.412-1.165 1.524-2 2.83-2 1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.306 0-2.417-.834-2.829-2h-2.017l-2.886 4.999L14.155 17h2.016c.411-1.165 1.523-2 2.829-2 1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.306 0-2.417-.834-2.829-2H13l-3.464-6zM19 17c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM4.5 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM19 5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixStackshare);
    };
  }
});
export {
  _sfc_main as default
};
