import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Reactjs",
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
    const RemixReactjs = () => {
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
          "d": "M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884.591.643 1.179 1.374 1.746 2.175.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175 21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28 25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28 25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667 27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97c-.238.572-.442 1.13-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6-.41-.892-.749-1.766-1.01-2.6-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445c-.55-.121-1.135-.223-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z"
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
          "d": "M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-.528 2.994c.175.21.351.414.528.609.177-.195.353-.398.528-.609a24.883 24.883 0 0 1-1.056 0zm-1.995-.125a20.678 20.678 0 0 1-2.285-.368c-.075.35-.132.69-.17 1.016-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.678 20.678 0 0 1-1.462-1.796zm7.331-.368c-.717.16-1.483.284-2.285.368a20.678 20.678 0 0 1-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.36 11.36 0 0 0-.17-1.016zm1.45-.387c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48C3.167 14.794 1.5 13.48 1.5 12s1.667-2.793 4.241-3.614c-.576-2.639-.273-4.74 1.009-5.48 1.282-.74 3.253.048 5.25 1.867 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.206 22.5 10.52 22.5 12s-1.667 2.793-4.241 3.614zm-7.32-9.779a11.36 11.36 0 0 0-.793-.655C8.868 4.225 7.903 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.678 20.678 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796zm3.585 1.796c.802.084 1.568.209 2.285.368.075-.35.132-.69.17-1.016.19-1.583-.075-2.545-.478-2.777-.403-.233-1.368.019-2.645.974a11.36 11.36 0 0 0-.794.655c.497.542.987 1.143 1.462 1.796zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.884 24.884 0 0 1 1.056 0zm-4.156 7.198a24.884 24.884 0 0 1-.528-.914c-.095.257-.183.51-.263.761.257.056.521.107.79.153zm1.932.234a22.897 22.897 0 0 0 3.392 0A22.897 22.897 0 0 0 15.392 12a22.897 22.897 0 0 0-1.696-2.938 22.897 22.897 0 0 0-3.392 0A22.897 22.897 0 0 0 8.608 12a22.897 22.897 0 0 0 1.696 2.938zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153 24.884 24.884 0 0 1 .527.914zM6.13 9.837c-.34.11-.662.23-.964.36C3.701 10.825 3 11.535 3 12c0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163zm1.45-.388c.081.25.169.504.264.76a24.884 24.884 0 0 1 .528-.913c-.27.046-.534.097-.791.153zm10.29 4.714c.34-.11.662-.23.964-.36C20.299 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803a11.36 11.36 0 0 0-.964-.36c-.222.7-.497 1.426-.825 2.163.328.737.603 1.462.825 2.163zm-1.45.388c-.081-.25-.169-.504-.264-.76a24.884 24.884 0 0 1-.528.913c.27-.046.534-.097.791-.153z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixReactjs);
    };
  }
});
export {
  _sfc_main as default
};
