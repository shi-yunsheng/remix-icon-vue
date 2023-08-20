import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Zcool",
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
    const RemixZcool = () => {
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
          "d": "M9.902 21.839A7.903 7.903 0 0 1 2 13.935C2 10.29 4.467 7.06 7.824 6.31 11.745 5.43 13.528 4.742 14.9 2c.998 1.935.323 3.71 0 4.677 4.698-1.129 6.371-3.28 6.774-3.548 0 3.952-1.231 6.452-2.419 8.065 1.476-.056 2.009-.484 2.744-.587-.325 1.448-1.5 3.49-4.33 4.795a7.905 7.905 0 0 1-7.768 6.437zm3.71-6.452c0 .323-.053.484-.403.484l-3.15.002 2.96-3.248c.86-.86.86-1.29.86-2.388 0-.334-.048-.717.048-1.05.047-.144-.048-.192-.191-.144-.335.095-.908.095-1.863.095H7.575c-.239 0-.335-.143-.239-.334 0-.048 0-.191-.096-.191-.62.286-.764 1.576-.716 2.388 0 .43.239.669.573.669h3.391l-3.486 3.725c-.24.287-.478.669-.478 1.194v1.051c0 .478.287.764.812.86h5.988c.555 0 .933-.233.933-.855v-1.129c0-.208 0-.968-.645-1.129z"
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
          "d": "M8.26 8.26C5.838 8.803 4 11.208 4 13.935a5.903 5.903 0 0 0 11.703 1.098 2 2 0 0 1 1.129-1.448c.482-.222.91-.473 1.284-.743-.863-.603-1.186-1.862-.47-2.834a9.796 9.796 0 0 0 1.391-2.651 19.04 19.04 0 0 1-3.668 1.265c-1.261.303-2.392-.638-2.466-1.814-1.18.572-2.67 1.01-4.642 1.452zm10.996 2.934c1.166 0 1.917-.424 2.744-.587-.325 1.448-1.5 3.49-4.33 4.795A7.903 7.903 0 0 1 2 13.936C2 10.29 4.467 7.06 7.824 6.308 11.745 5.43 13.528 4.742 14.9 2c.689 1.333.689 2.892 0 4.677 2.816-.67 5.074-1.852 6.774-3.548 0 4.802-1.822 7.186-2.419 8.065zm-5.84 3.932c.584.145.584.832.584 1.02v1.022c0 .561-.342.773-.844.773H7.742c-.475-.087-.734-.346-.734-.778v-.95c0-.475.216-.82.432-1.08l3.152-3.369H7.526c-.302 0-.518-.216-.518-.604-.044-.735.086-1.9.647-2.16.087 0 .087.13.087.173-.087.173 0 .302.216.302h3.887c.863 0 1.381 0 1.684-.086.13-.043.216 0 .173.13-.087.302-.044.647-.044.95 0 .993 0 1.382-.777 2.159l-2.678 2.937 2.85-.002c.316 0 .364-.146.364-.437z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixZcool);
    };
  }
});
export {
  _sfc_main as default
};
