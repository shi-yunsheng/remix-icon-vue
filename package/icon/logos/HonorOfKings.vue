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

  const RemixHonorOfKings = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0H24V24H0z" />
              <path d="M21.158 4.258c.034 3.5.591 4.811.788 6.701.301 2.894-.657 5.894-2.875 8.112-3.666 3.666-9.471 3.89-13.4.673l2.852-2.853c2.344 1.67 5.617 1.454 7.72-.648 2.102-2.103 2.318-5.377.648-7.72l4.267-4.265zm-2.83-.002l-2.851 2.853c-2.344-1.67-5.617-1.454-7.72.648-2.102 2.103-2.318 5.376-.648 7.72l-4.267 4.265c-.034-3.5-.591-4.811-.788-6.701-.301-2.894.657-5.894 2.875-8.112 3.666-3.666 9.471-3.89 13.4-.673zM12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" />
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
              <path d="M18.328 4.256l-1.423 1.423c-3.138-2.442-7.677-2.22-10.562.664-2.374 2.374-2.944 5.868-1.71 8.78l2.417-2.417c-.213-1.503.258-3.085 1.414-4.242 1.71-1.71 4.352-1.922 6.293-.636l-1.464 1.464c-1.115-.532-2.49-.337-3.414.587-.924.923-1.12 2.299-.587 3.414l-6.45 6.45c-.034-3.5-.591-4.812-.788-6.702-.301-2.894.657-5.894 2.875-8.112 3.666-3.666 9.471-3.89 13.4-.673zm2.83.002c.034 3.5.591 4.811.788 6.701.301 2.894-.657 5.894-2.875 8.112-3.666 3.666-9.471 3.89-13.4.673l1.424-1.423c3.138 2.442 7.677 2.22 10.562-.664 2.374-2.374 2.944-5.868 1.71-8.78l-2.417 2.417c.213 1.503-.258 3.085-1.414 4.242-1.71 1.71-4.352 1.922-6.293.636l1.464-1.464c1.115.532 2.49.337 3.414-.587.924-.923 1.12-2.299.587-3.414l6.45-6.45z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixHonorOfKings />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
