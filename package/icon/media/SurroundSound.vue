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

  const RemixSurroundSound = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.05 4.121A6.978 6.978 0 0 0 5 12.071c0 1.933.784 3.683 2.05 4.95l1.414-1.414A4.984 4.984 0 0 1 7 12.07c0-1.38.56-2.63 1.464-3.535L7.05 7.12zm9.9 0l-1.414 1.415A4.984 4.984 0 0 1 17 12.07c0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.978 6.978 0 0 0 19 12.07a6.978 6.978 0 0 0-2.05-4.95zM12 15.071a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
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
              <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.05 4.121l1.414 1.415A4.984 4.984 0 0 0 7 12.07c0 1.38.56 2.63 1.464 3.536L7.05 17.02A6.978 6.978 0 0 1 5 12.07c0-1.933.784-3.683 2.05-4.95zm9.9 0a6.978 6.978 0 0 1 2.05 4.95 6.978 6.978 0 0 1-2.05 4.95l-1.414-1.414A4.984 4.984 0 0 0 17 12.07c0-1.38-.56-2.63-1.464-3.535L16.95 7.12zM12 13.071a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixSurroundSound />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
