import { defineComponent, reactive, openBlock, createBlock, createVNode } from "vue";
import { Props } from "../props.mjs";
import isNumber from "../../utils/isNumber.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Evernote",
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
    const RemixEvernote = () => {
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
          "d": "M8.63 7.754c-.216.201-.546.217-.743.217h-2.11c-.61 0-.974 0-1.22.033-.134.017-.298.084-.381.117-.033.016-.033 0-.017-.016l4.816-4.94c.017-.017.033-.017.017.017a1.734 1.734 0 0 0-.116.382c-.033.249-.033.615-.033 1.23v2.212c0 .2-.017.533-.214.748zm4.682 14.184c-.56-.366-.857-.848-.973-1.147a2.443 2.443 0 0 1-.181-.915 2.513 2.513 0 0 1 2.507-2.51c.412 0 .742.332.742.748a.735.735 0 0 1-.38.648.946.946 0 0 1-.28.1c-.082.017-.396.05-.543.183a.776.776 0 0 0-.298.582.92.92 0 0 0 .264.649c.297.299.693.465 1.122.465a2.036 2.036 0 0 0 2.028-2.045c0-1.014-.676-1.913-1.567-2.311-.132-.067-.346-.117-.544-.167a6.719 6.719 0 0 0-.495-.083c-.693-.084-2.424-.632-2.54-2.178 0 0-.51 2.328-1.534 2.96-.098.05-.23.1-.379.133-.148.033-.312.05-.363.05-1.665.1-3.43-.433-4.65-1.696 0 0-.825-.682-1.253-2.594-.099-.466-.297-1.298-.412-2.08-.05-.281-.067-.498-.083-.698 0-.814.495-1.363 1.121-1.445h3.365c.576 0 .907-.15 1.121-.35.28-.266.347-.649.347-1.098V3.631c.08-.615.627-1.131 1.434-1.131h.396c.165 0 .363.017.544.033.132.017.247.05.445.1 1.006.25 1.22 1.28 1.22 1.28l2.854.5c.907.166 3.15.316 3.578 2.594 1.006 5.42.396 10.675.347 10.675-.71 5.121-4.931 4.871-4.931 4.871a3.426 3.426 0 0 1-2.029-.615zm2.622-10.309c-.033.084-.066.183-.05.233.018.05.051.066.084.083.198.1.527.15 1.006.2.478.05.808.083 1.022.05.033 0 .067-.017.1-.067s.016-.15.016-.233c-.05-.449-.462-.781-1.006-.848-.545-.05-1.006.167-1.172.582z"
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
          "d": "M10.5 8.5a1 1 0 0 1-1 1H6.001c-.336 0-.501.261-.501.532 0 1.32.254 2.372.664 3.193.216.433.399.67.523.79.735.76 1.886 1.16 3.092 1.089.095-.006.199-.064.332-.208a1.51 1.51 0 0 0 .214-.293 2 2 0 0 1 2.531-1.073c.693.258 1.277.434 1.813.56.196.046.375.083.586.122-.077-.014.402.074.518.098.34.07.598.146.883.29a5.087 5.087 0 0 1 1.775 1.475c.045-.591.077-1.268.087-2.026a34.182 34.182 0 0 0-.559-6.673c-.074-.398-.236-.562-.663-.718a3.847 3.847 0 0 0-.587-.155c-.147-.028-.65-.11-.693-.118a1273 1273 0 0 1-2.34-.409l-.528-.092a2 2 0 0 1-1.524-1.26 11.467 11.467 0 0 0-.034-.088 5.595 5.595 0 0 0-.702-.036c-.271 0-.388.124-.388.463V8.5zm6.23 11.639c.352-.356.56-.829.587-1.327.054-1.036-.824-2.48-2.317-2.634-.617-.063-1.586-.306-2.842-.774 0 0-.7 1.603-2.26 1.696-1.665.1-3.43-.433-4.65-1.696 0 0-1.748-1.64-1.748-5.372 0-.814.29-1.422.648-1.904.96-1.292 2.505-2.78 4.133-4.304C9 3.15 9.701 2.5 10.888 2.5c2.04 0 2.32.664 2.605 1.414l2.854.499c.907.166 3.15.316 3.578 2.594 1.006 5.42.458 9.87.347 10.675-.71 5.121-4.772 4.871-4.931 4.871-2.059 0-3.178-1.373-3.183-2.677a2.494 2.494 0 0 1 1.038-2.034 2.586 2.586 0 0 1 1.527-.478c.305 0 .687.318.687.753 0 .37-.255.575-.382.645-.223.124-1.122.174-1.122.865 0 .317.35 1.114 1.386 1.114.588 0 1.094-.256 1.437-.602zm-1.796-9.51c.166-.415.627-.632 1.172-.582.544.067.956.4 1.006.848 0 .083.017.183-.017.233-.032.05-.066.067-.1.067-.213.033-.543 0-1.021-.05-.48-.05-.808-.1-1.006-.2-.033-.017-.066-.033-.083-.083s.016-.15.05-.233z"
        }, null)])])]);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(RemixEvernote);
    };
  }
});
export {
  _sfc_main as default
};
