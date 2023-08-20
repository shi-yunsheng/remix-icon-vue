import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Firefox",
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
    const RemixFirefox = () => {
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
          "d": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.464.314-2.854.88-4.106.466-.939 1.233-1.874 1.85-2.194-.653 1.283-.973 2.54-1.04 3.383.454-1.5 1.315-2.757 2.52-3.644 2.066-1.519 4.848-1.587 5.956-.62-2.056.707-4.296 3.548-3.803 6.876.08.55.245 1.084.489 1.582-.384-1.01-.418-2.433.202-3.358.692-1.03 1.678-1.248 2.206-1.136-.208-.044-.668.836-.736.991-.173.394-.259.82-.251 1.25a3.395 3.395 0 0 0 1.03 2.38c1.922 1.871 5.023 1.135 6.412-1.002.953-1.471 1.069-3.968-.155-5.952a6.915 6.915 0 0 0-1.084-1.32c-1.85-1.766-4.48-2.57-6.982-2.205-1.106.177-2.047.496-2.824.956C7.755 2.798 9.91 2 12 2z"
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
          "d": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.464.314-2.854.88-4.106.466-.939 1.233-1.874 1.85-2.194-.653 1.283-.973 2.54-1.04 3.383.454-1.5 1.315-2.757 2.52-3.644 2.066-1.519 4.848-1.587 5.956-.62-2.056.707-4.296 3.548-3.803 6.876.08.55.245 1.084.489 1.582-.384-1.01-.418-2.433.202-3.358.692-1.03 1.678-1.248 2.206-1.136-.208-.044-.668.836-.736.991-.173.394-.259.82-.251 1.25a3.395 3.395 0 0 0 1.03 2.38c1.922 1.871 5.023 1.135 6.412-1.002.953-1.471 1.069-3.968-.155-5.952a6.915 6.915 0 0 0-1.084-1.32c-1.85-1.766-4.48-2.57-6.982-2.205-1.106.177-2.047.496-2.824.956C7.755 2.798 9.91 2 12 2zM6.875 7.705c-2.253.781-3.501 3.17-2.579 6.46a8.004 8.004 0 0 0 7.455 5.831L12 20a8 8 0 0 0 7.985-7.504l.009-.212c-.13.349-.283.674-.463.98l-.14.227c-2.104 3.239-6.681 4.075-9.48 1.348a5.392 5.392 0 0 1-.962-1.257l-.106-.201c-1.736-.387-2.584-1.326-2.543-2.817.027-.991.23-1.96.575-2.86z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixFirefox);
    };
  }
});
export {
  _sfc_main as default
};
