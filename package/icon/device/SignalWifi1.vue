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

  const RemixSignalWifi1 = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0H24V24H0z" />
              <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997C3.78 4.497 7.714 3 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392l5.108 6.324C9.698 13.256 10.818 13 12 13c1.181 0 2.303.256 3.312.716L20.42 7.39C17.922 5.841 15.027 5 12 5z" />
            </g>
          </svg>
        </i>
      );
    } else {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0H24V24H0z" />
              <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997C3.78 4.497 7.714 3 12 3zm0 12c-.693 0-1.367.117-2 .34l2 2.477 2-2.477c-.63-.22-1.307-.34-2-.34zm0-10c-3.028 0-5.923.842-8.42 2.392l5.108 6.324C9.698 13.256 10.818 13 12 13c1.181 0 2.303.256 3.312.716L20.42 7.39C17.922 5.841 15.027 5 12 5z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixSignalWifi1 />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
