import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KakaoTalk",
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
    const RemixKakaoTalk = () => {
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
          "d": "M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z"
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
          "d": "M5.678 18.123C3.092 16.566 1.5 14.112 1.5 11.405 1.5 6.701 6.248 3 12 3s10.5 3.701 10.5 8.405c0 4.704-4.748 8.405-10.5 8.405-.442 0-.882-.022-1.318-.065l-3.765 2.458c-.615.326-.957.425-1.485.066-.62-.424-.596-.892-.381-1.56l.627-2.586zM3.5 11.405c0 2.132 1.418 4.123 3.781 5.32l.706.359-.186.77-.401 1.648 2.8-1.83.366.046c.473.061.952.092 1.434.092 4.741 0 8.5-2.93 8.5-6.405S16.741 5 12 5s-8.5 2.93-8.5 6.405zm14.407-.346l1.514 2.155a.472.472 0 1 1-.773.543l-1.428-2.033-.427.413V13.5a.472.472 0 0 1-.944 0v-1.439a.471.471 0 0 1 0-.222V9.282a.472.472 0 0 1 .944 0v1.542l1.928-1.866a.472.472 0 0 1 .656.678l-1.47 1.423zm-2.958 1.925a.472.472 0 0 1 0 .944h-1.932a.472.472 0 0 1-.471-.472V9.297a.472.472 0 1 1 .943 0v3.687h1.46zm-5.857-1.092h1.334l-.638-1.707-.696 1.707zm2.523.488l.345.925a.472.472 0 1 1-.884.33l-.298-.799h-2.07l-.331.813a.472.472 0 1 1-.874-.357l1.66-4.075a.696.696 0 0 1 .654-.447.69.69 0 0 1 .627.474l1.046 2.8a.469.469 0 0 1 .127.32l-.002.016zM8.293 9.302c0 .26-.21.472-.471.472h-1.14v3.736a.472.472 0 0 1-.945 0V9.774h-1.16a.472.472 0 1 1 0-.944h3.245c.26 0 .471.211.471.472z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixKakaoTalk);
    };
  }
});
export {
  _sfc_main as default
};
