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

  const RemixClosedCaptioning = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0H24V24H0z" />
              <path d="M21 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h18zM9 8c-2.208 0-4 1.792-4 4s1.792 4 4 4c1.1 0 2.1-.45 2.828-1.172l-1.414-1.414C10.053 13.776 9.553 14 9 14c-1.105 0-2-.895-2-2s.895-2 2-2c.55 0 1.048.22 1.415.587l1.414-1.414C11.105 8.448 10.105 8 9 8zm7 0c-2.208 0-4 1.792-4 4s1.792 4 4 4c1.104 0 2.104-.448 2.828-1.172l-1.414-1.414c-.362.362-.862.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.553 0 1.053.224 1.415.587l1.414-1.414C18.105 8.448 17.105 8 16 8z" />
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
              <path d="M21 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h18zm-1 2H4v14h16V5zM9 8c1.105 0 2.105.448 2.829 1.173l-1.414 1.414C10.053 10.224 9.553 10 9 10c-1.105 0-2 .895-2 2s.895 2 2 2c.553 0 1.053-.224 1.414-.586l1.414 1.414C11.104 15.552 10.104 16 9 16c-2.208 0-4-1.792-4-4s1.792-4 4-4zm7 0c1.105 0 2.105.448 2.829 1.173l-1.414 1.414C17.053 10.224 16.553 10 16 10c-1.105 0-2 .895-2 2s.895 2 2 2c.552 0 1.052-.224 1.414-.586l1.414 1.414C18.104 15.552 17.104 16 16 16c-2.208 0-4-1.792-4-4s1.792-4 4-4z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixClosedCaptioning />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
