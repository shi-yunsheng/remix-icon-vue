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

  const RemixGatsby = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill-rule="nonzero"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM6.429 17.571c-1.5-1.5-2.286-3.5-2.286-5.428l7.786 7.714c-2-.071-4-.786-5.5-2.286zm7.285 2.072l-9.357-9.357c.786-3.5 3.929-6.143 7.643-6.143 2.643 0 4.929 1.286 6.357 3.214l-1.071.929C16.07 6.643 14.143 5.57 12 5.57c-2.786 0-5.143 1.786-6.071 4.286l8.214 8.214c2.071-.714 3.643-2.5 4.143-4.642h-3.429V12h5c0 3.714-2.643 6.857-6.143 7.643z"
              />
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
              <path d="M11.751 21.997c-5.221-.128-9.45-4.257-9.736-9.438l-.012-.313 9.748 9.751zM12 2a9.988 9.988 0 0 1 8.193 4.265l-1.638 1.148A8.003 8.003 0 0 0 4.534 9.12L14.88 19.466A8.018 8.018 0 0 0 19.748 14H15.5v-2H22c0 4.726-3.279 8.686-7.685 9.73L2.269 9.686C3.314 5.28 7.274 2 12 2z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixGatsby />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
