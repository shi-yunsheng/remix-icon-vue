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

  const RemixOpenSource = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0H24V24H0z" />
              <path d="M12 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55C14.354 14.148 15 13.15 15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.15.647 2.148 1.596 2.652l-2.518 6.55C4.504 19.675 2 16.13 2 12 2 6.477 6.477 2 12 2z" />
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
              <path d="M12 2c5.523 0 10 4.477 10 10 0 4.4-2.841 8.136-6.789 9.473l-.226.074-2.904-7.55C13.15 13.95 14 13.054 14 12c0-1.105-.895-2-2-2s-2 .895-2 2c0 1.077.851 1.955 1.917 1.998l-2.903 7.549-.225-.074C4.84 20.136 2 16.4 2 12 2 6.477 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8 0 2.92 1.564 5.475 3.901 6.872l1.48-3.849C8.534 14.29 8 13.207 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.207-.535 2.29-1.38 3.023.565 1.474 1.059 2.757 1.479 3.85C18.435 17.475 20 14.92 20 12c0-4.418-3.582-8-8-8z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixOpenSource />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
