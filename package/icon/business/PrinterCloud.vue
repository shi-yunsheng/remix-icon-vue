<script setup lang="tsx">
  import { reactive } from 'vue';
  import { Props } from '../props';
  import { TIconStyle } from '../interface';
  import isNumber from '../../utils/isNumber';

  // 图标属性
  const props = defineProps(Props);

  // 样式变量
  const iconStyle = reactive<TIconStyle>({
    '--icon-size': '',
    '--icon-color': '',
  });

  // 计算尺寸
  const iconSize = isNumber(props.size) ? `${props.size}px` : props.size;
  // 颜色
  const iconColor = props.color || '';
  // 更新变量值
  iconStyle['--icon-size'] = iconSize;
  iconStyle['--icon-color'] = iconColor;

  const RemixPrinterCloud = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10.566 17A4.737 4.737 0 0 0 10 19.25c0 1.023.324 1.973.877 2.75H7v-5h3.566zm6.934-4a3.5 3.5 0 0 1 3.5 3.5l-.001.103a2.75 2.75 0 0 1-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.392L14 16.5a3.5 3.5 0 0 1 3.5-3.5zM21 8a1 1 0 0 1 1 1l.001 4.346A5.482 5.482 0 0 0 17.5 11l-.221.004A5.503 5.503 0 0 0 12.207 15H5v5H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h18zM8 10H5v2h3v-2zm9-8a1 1 0 0 1 1 1v3H6V3a1 1 0 0 1 1-1h10z" />
            </g>
          </svg>
        </i>
      );
    } else {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1l.001 5.346a5.516 5.516 0 0 0-2-1.745L20 9H4v8h2v-1a1 1 0 0 1 1-1h5.207l-.071.283-.03.02A4.763 4.763 0 0 0 10.567 17L8 17v3h2.06a4.73 4.73 0 0 0 .817 2H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h10zm.5 11a3.5 3.5 0 0 1 3.5 3.5l-.001.103a2.75 2.75 0 0 1-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.392L14 16.5a3.5 3.5 0 0 1 3.5-3.5zm0 2a1.5 1.5 0 0 0-1.473 1.215l-.02.14L16 16.5v1.62l-1.444.406a.75.75 0 0 0 .08 1.466l.109.008h5.51a.75.75 0 0 0 .19-1.474l-1.013-.283L19 18.12V16.5l-.007-.144A1.5 1.5 0 0 0 17.5 15zM8 10v2H5v-2h3zm8-6H8v3h8V4z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixPrinterCloud />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
