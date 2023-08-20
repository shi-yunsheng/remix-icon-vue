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

  const RemixCreativeCommonsZero = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 4c-2.761 0-5 2.686-5 6s2.239 6 5 6 5-2.686 5-6-2.239-6-5-6zm2.325 3.472c.422.69.675 1.57.675 2.528 0 2.21-1.343 4-3 4-.378 0-.74-.093-1.073-.263l-.164-.092 3.562-6.173zM12 8c.378 0 .74.093 1.073.263l.164.092-3.562 6.173C9.253 13.838 9 12.958 9 12c0-2.21 1.343-4 3-4z" />
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
                d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.415 0-8 3.585-8 8s3.585 8 8 8 8-3.585 8-8-3.585-8-8-8zm0 2c2.761 0 5 2.686 5 6s-2.239 6-5 6-5-2.686-5-6 2.239-6 5-6zm2.325 3.472l-3.562 6.173c.377.228.796.355 1.237.355 1.657 0 3-1.79 3-4 0-.959-.253-1.839-.675-2.528zM12 8c-1.657 0-3 1.79-3 4 0 .959.253 1.839.675 2.528l3.562-6.173A2.377 2.377 0 0 0 12 8z"
              />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixCreativeCommonsZero />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
