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

  const RemixMickey = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.5 2a4.5 4.5 0 0 1 .883 8.913 8 8 0 1 1-14.765-.001A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254A7.998 7.998 0 0 1 12 6c.693 0 1.365.088 2.006.254A4.5 4.5 0 0 1 18.5 2z" />
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
              <path
                fill-rule="nonzero"
                d="M18.5 2a4.5 4.5 0 0 1 .883 8.913l.011.027a8 8 0 0 1-7.145 11.056L12 22a8 8 0 0 1-7.382-11.088A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254l.073-.019A8.018 8.018 0 0 1 12 6l.25.004a8 8 0 0 1 1.756.25A4.5 4.5 0 0 1 18.5 2zM12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM5.5 4a2.5 2.5 0 0 0 0 5l.164-.005.103-.01A8.044 8.044 0 0 1 7.594 7.32l.33-.206A2.5 2.5 0 0 0 5.5 4zm13 0a2.5 2.5 0 0 0-2.466 2.916l.043.2.028.016a8.04 8.04 0 0 1 2.128 1.852A2.5 2.5 0 1 0 18.5 4z"
              />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixMickey />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
