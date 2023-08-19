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

  const RemixBlurOff = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5.432 6.846L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.038-3.04A9 9 0 0 1 5.432 6.848zM8.243 4.03L12 .272l6.364 6.364a9.002 9.002 0 0 1 2.05 9.564L8.244 4.03z" />
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
              <path d="M18.154 19.568A9 9 0 0 1 5.432 6.846L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.038-3.04zM6.847 8.262a7 7 0 0 0 9.891 9.89l-9.89-9.89zM20.414 16.2l-1.599-1.599a6.995 6.995 0 0 0-1.865-6.55L12 3.1 9.657 5.443 8.243 4.03 12 .272l6.364 6.364a9.002 9.002 0 0 1 2.05 9.564z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixBlurOff />
</template>
