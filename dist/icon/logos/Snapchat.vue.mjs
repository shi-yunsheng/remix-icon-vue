import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Snapchat",
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
    const RemixSnapchat = () => {
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
          "d": "M11.871 21.764c-1.19 0-1.984-.561-2.693-1.056-.503-.357-.976-.696-1.533-.79a4.568 4.568 0 0 0-.803-.066c-.472 0-.847.071-1.114.125-.17.03-.312.058-.424.058-.116 0-.263-.032-.32-.228-.05-.16-.081-.312-.112-.459-.08-.37-.147-.597-.286-.62-1.489-.227-2.38-.57-2.554-.976-.014-.044-.031-.09-.031-.125-.01-.125.08-.227.205-.25 1.181-.196 2.242-.824 3.138-1.858.696-.803 1.035-1.579 1.066-1.663 0-.01.009-.01.009-.01.17-.351.205-.65.102-.895-.191-.46-.825-.656-1.257-.79-.111-.03-.205-.066-.285-.093-.37-.147-.986-.46-.905-.892.058-.312.472-.535.811-.535.094 0 .174.014.24.05.38.173.723.262 1.017.262.366 0 .54-.138.584-.182a24.93 24.93 0 0 0-.035-.593c-.09-1.365-.192-3.059.24-4.03 1.298-2.907 4.053-3.14 4.869-3.14L12.156 3h.05c.815 0 3.57.227 4.868 3.139.437.971.33 2.67.24 4.03l-.008.067c-.01.182-.023.356-.032.535.045.035.205.169.535.173.286-.008.598-.102.954-.263a.804.804 0 0 1 .312-.066c.125 0 .25.03.357.066h.009c.299.112.495.321.495.54.009.205-.152.517-.914.825-.08.03-.174.067-.285.093-.424.13-1.057.335-1.258.79-.111.24-.066.548.103.895 0 .01.009.01.009.01.049.124 1.337 3.049 4.204 3.526a.246.246 0 0 1 .205.25c0 .044-.009.089-.031.129-.174.41-1.057.744-2.555.976-.138.022-.205.25-.285.62a6.831 6.831 0 0 1-.112.459c-.044.147-.138.227-.298.227h-.023c-.102 0-.24-.013-.423-.049a5.285 5.285 0 0 0-1.115-.116c-.263 0-.535.023-.802.067-.553.09-1.03.433-1.534.79-.717.49-1.515 1.051-2.697 1.051h-.254z"
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
          "d": "M15.396 10.58l.02-.249a32.392 32.392 0 0 0 .083-2.326c0-.87-.294-1.486-.914-2.063-.66-.614-1.459-.942-2.59-.942-1.137 0-1.958.335-2.51.888-.696.695-.958 1.218-.958 2.1 0 .521.061 1.994.096 2.618a2 2 0 0 1-.469 1.402c.055.098.105.204.153.317.3.771.198 1.543-.152 2.271-.392.818-.731 1.393-1.41 2.154a7.973 7.973 0 0 1-.642.643 1.999 1.999 0 0 1 .412.565 5.886 5.886 0 0 1 1.585.074c.81.146 1.324.434 2.194 1.061l.016.011.213.152c.619.44.877.546 1.473.546.609 0 .91-.121 1.523-.552l.207-.146c.876-.632 1.407-.928 2.231-1.076a6.664 6.664 0 0 1 1.559-.074 1.999 1.999 0 0 1 .417-.567 8.409 8.409 0 0 1-.616-.616 9.235 9.235 0 0 1-1.447-2.16c-.363-.749-.47-1.54-.137-2.321.04-.098.085-.19.132-.276a2 2 0 0 1-.469-1.435zm-10.315-.102c.419 0 .6.305 1.219.305.157 0 .26-.035.326-.066-.009-.156-.099-1.986-.099-2.729 0-1.688.72-2.69 1.543-3.514C8.893 3.65 10.175 3 11.996 3c1.82 0 3.066.653 3.952 1.478.886.825 1.551 1.93 1.551 3.528 0 1.555-.099 2.594-.108 2.716a.59.59 0 0 0 .279.065c.63 0 .63-.31 1.33-.31.685 0 .983.57.983.823 0 .621-.833.967-1.33 1.126-.369.117-.931.291-1.075.635-.074.174-.043.4.092.678.003.008 1.26 2.883 3.93 3.326.235.035.391.241.391.483 0 .332-.37.617-.726.782-.443.2-1.091.37-1.952.505-.043.078-.134.485-.235.887-.135.542-.801.366-.991.326A4.997 4.997 0 0 0 16.291 20c-.482.087-.913.378-1.395.726-.713.504-1.465 1.076-2.9 1.076-1.436 0-2.144-.572-2.857-1.076-.482-.348-.905-.637-1.396-.726-.898-.163-1.57.036-1.795.057-.226.02-.842.244-.996-.327-.045-.166-.191-.808-.235-.895-.856-.135-1.508-.313-1.952-.513-.365-.165-.726-.443-.726-.779 0-.235.158-.44.391-.482 2.644-.483 3.766-3.005 3.922-3.33.132-.276.161-.5.091-.679-.143-.343-.704-.513-1.073-.635-.105-.034-1.336-.373-1.336-1.117 0-.24.205-.573.582-.73a1.36 1.36 0 0 1 .465-.092z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixSnapchat);
    };
  }
});
export {
  _sfc_main as default
};
