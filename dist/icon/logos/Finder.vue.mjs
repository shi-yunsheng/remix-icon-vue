import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Finder",
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
    const RemixFinder = () => {
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
          "d": "M21 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h18zm-1 2h-8.465c-.69 1.977-1.035 4.644-1.035 8h3c-.115.92-.15 1.878-.107 2.877 1.226-.211 2.704-.777 4.027-1.71l1.135 1.665c-1.642 1.095-3.303 1.779-4.976 2.043.052.37.113.745.184 1.125H20V5zM6.555 14.168l-1.11 1.664C7.602 17.27 9.792 18 12 18v-2c-1.792 0-3.602-.603-5.445-1.832zM17 7c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1s-1-.448-1-1V8c0-.552.448-1 1-1zM7 7c-.552 0-1 .452-1 1v1c0 .552.448 1 1 1s1-.45 1-1V8c0-.552-.448-1-1-1z"
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
          "d": "M21 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h18zM10.48 4.999L4 5v14h8.746c-.062-.344-.116-.684-.163-1.02-.297.013-.491.02-.583.02-2.208 0-4.398-.73-6.555-2.168l1.11-1.664C8.398 15.397 10.208 16 12 16c.133 0 .265-.003.398-.01-.024-.497-.024-1.41.007-1.99H9.5v-1c0-3.275.32-5.94.98-8.001zm2.12 0C11.935 6.582 11.556 9.41 11.51 12h3.123l-.14 1.124c-.101.805-.137 1.645-.108 2.52 1.013-.3 2.031-.79 3.06-1.476l1.11 1.664c-1.32.88-2.652 1.495-3.993 1.84.057.433.13.876.219 1.327L20 19V5l-7.4-.001zM7 7c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1s-1-.448-1-1V8c0-.552.448-1 1-1zm10 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1s-1-.448-1-1V8c0-.552.448-1 1-1z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixFinder);
    };
  }
});
export {
  _sfc_main as default
};
