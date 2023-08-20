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

  const RemixSlack = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M6.527 14.514A1.973 1.973 0 0 1 4.56 16.48a1.973 1.973 0 0 1-1.967-1.967c0-1.083.884-1.968 1.967-1.968h1.968v1.968zm.992 0c0-1.083.884-1.968 1.967-1.968 1.083 0 1.968.885 1.968 1.968v4.927a1.973 1.973 0 0 1-1.968 1.967 1.973 1.973 0 0 1-1.967-1.967v-4.927zm1.967-7.987A1.973 1.973 0 0 1 7.52 4.56c0-1.083.884-1.967 1.967-1.967 1.083 0 1.968.884 1.968 1.967v1.968H9.486zm0 .992c1.083 0 1.968.884 1.968 1.967a1.973 1.973 0 0 1-1.968 1.968H4.56a1.973 1.973 0 0 1-1.967-1.968c0-1.083.884-1.967 1.967-1.967h4.927zm7.987 1.967c0-1.083.885-1.967 1.968-1.967s1.967.884 1.967 1.967a1.973 1.973 0 0 1-1.967 1.968h-1.968V9.486zm-.992 0a1.973 1.973 0 0 1-1.967 1.968 1.973 1.973 0 0 1-1.968-1.968V4.56c0-1.083.885-1.967 1.968-1.967s1.967.884 1.967 1.967v4.927zm-1.967 7.987c1.083 0 1.967.885 1.967 1.968a1.973 1.973 0 0 1-1.967 1.967 1.973 1.973 0 0 1-1.968-1.967v-1.968h1.968zm0-.992a1.973 1.973 0 0 1-1.968-1.967c0-1.083.885-1.968 1.968-1.968h4.927c1.083 0 1.967.885 1.967 1.968a1.973 1.973 0 0 1-1.967 1.967h-4.927z" />
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
              <path d="M14.5 3A1.5 1.5 0 0 1 16 4.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 14.5 3zm-10 10H6v1.5A1.5 1.5 0 1 1 4.5 13zm8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5V18zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5a1.5 1.5 0 0 1 0 3H18V9.5A1.5 1.5 0 0 1 19.5 8zm-15 0h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5A1.5 1.5 0 0 1 11 4.5V6H9.5a1.5 1.5 0 0 1 0-3zm0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 9.5 13z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixSlack />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
