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

  const RemixUsb = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0H24V24H0z" />
              <path d="M12 1l3 5h-2v7.381l3-1.499-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553c1.166.412 2 1.523 2 2.829 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.187.69-2.213 1.69-2.7L6 14l-.001-2.268C5.402 11.386 5 10.74 5 10c0-1.105.895-2 2-2s2 .895 2 2c0 .74-.402 1.387-1 1.732V13l3 2.086V6H9l3-5z" />
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
              <path d="M12 1l3 5h-2v7.381l3-1.499-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553c1.166.412 2 1.523 2 2.829 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.187.69-2.213 1.69-2.7L6 14l-.001-2.268C5.402 11.386 5 10.74 5 10c0-1.105.895-2 2-2s2 .895 2 2c0 .74-.402 1.387-1 1.732V13l3 2.086V6H9l3-5zm0 18c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixUsb />
</template>
