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

  const RemixSafari = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16.7 6.8l-6.114 3.786L6.8 16.7l-.104-.104-1.415 1.414.708.708 1.414-1.415L7.3 17.2l6.114-3.785L17.2 7.3l.104.104 1.415-1.414-.708-.708-1.414 1.415.104.104zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.5-19v2h1V3h-1zm0 16v2h1v-2h-1zM8.094 3.876l.765 1.848.924-.382-.765-1.848-.924.382zm6.123 14.782l.765 1.848.924-.382-.765-1.848-.924.382zm.765-15.164l-.765 1.848.924.382.765-1.848-.924-.382zM8.86 18.276l-.765 1.848.924.382.765-1.848-.924-.382zM21 11.5h-2v1h2v-1zm-16 0H3v1h2v-1zm15.458 3.615l-1.835-.794-.397.918 1.835.794.397-.918zM5.774 8.761L3.94 7.967l-.397.918 1.835.794.397-.918zm14.35-.667l-1.848.765.382.924 1.848-.765-.382-.924zM5.342 14.217l-1.848.765.382.924 1.848-.765-.382-.924zm13.376 3.793l-1.415-1.414-.707.707 1.414 1.415.708-.708zM7.404 6.697L5.99 5.282l-.708.708 1.415 1.414.707-.707zm3.908 4.615l3.611-2.235-2.235 3.61-1.376-1.375z" />
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
                d="M17.812 6.503l-4.398 6.911-6.911 4.398A7.973 7.973 0 0 0 11 19.938V18h2v1.938a7.96 7.96 0 0 0 3.906-1.618l-1.37-1.37 1.414-1.414 1.37 1.37A7.96 7.96 0 0 0 19.938 13H18v-2h1.938a7.973 7.973 0 0 0-2.126-4.497zm-.315-.315A7.973 7.973 0 0 0 13 4.062V6h-2V4.062A7.96 7.96 0 0 0 7.094 5.68l1.37 1.37L7.05 8.464l-1.37-1.37A7.96 7.96 0 0 0 4.062 11H6v2H4.062a7.973 7.973 0 0 0 2.126 4.497l4.398-6.911 6.911-4.398zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
              />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixSafari />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
