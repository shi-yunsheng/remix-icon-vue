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

  const RemixHeartAdd = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0H24V24H0z" />
              <path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243c2.16 2.166 2.329 5.557.507 7.91C19.926 12.24 18.99 12 18 12c-3.314 0-6 2.686-6 6 0 1.009.249 1.96.689 2.794l-.69.691-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z" />
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
              <path d="M19 14v3h3v2h-3.001L19 22h-2l-.001-3H14v-2h3v-3h2zm1.243-9.243c2.262 2.268 2.34 5.88.236 8.235l-1.42-1.418c1.331-1.524 1.261-3.914-.232-5.404-1.503-1.499-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.991-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451l8.432 8.446L12 21.485 3.52 12.993c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixHeartAdd />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
