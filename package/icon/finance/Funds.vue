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

  const RemixFunds = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3.897 17.86l3.91-3.91 2.829 2.828 4.571-4.57L17 14V9h-5l1.793 1.793-3.157 3.157-2.828-2.829-4.946 4.946A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.987 9.987 0 0 1-8.103-4.14z" />
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
              <path d="M4.406 14.523l3.402-3.402 2.828 2.829 3.157-3.157L12 9h5v5l-1.793-1.793-4.571 4.571-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixFunds />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
