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

  const RemixSwitch = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill-rule="nonzero"
                d="M13.619 21c-.085 0-.141-.057-.127-.127V3.127c0-.056.042-.113.113-.113h2.785A4.61 4.61 0 0 1 21 7.624v8.766A4.61 4.61 0 0 1 16.39 21H13.62zm3.422-9.926c-1.004 0-1.824.82-1.824 1.824s.82 1.824 1.824 1.824 1.824-.82 1.824-1.824-.82-1.824-1.824-1.824zM5.8 8.4c0-.933.763-1.696 1.696-1.696.934 0 1.697.763 1.697 1.696 0 .934-.763 1.697-1.697 1.697A1.702 1.702 0 0 1 5.8 8.401zM11.54 3c.085 0 .142.057.128.127V20.86c0 .07-.057.127-.128.127H7.61A4.61 4.61 0 0 1 3 16.376V7.61A4.61 4.61 0 0 1 7.61 3h3.93zm-1.315 16.544V4.442H7.61c-.849 0-1.64.34-2.235.933a3.088 3.088 0 0 0-.933 2.235v8.766c0 .849.34 1.64.933 2.234a3.088 3.088 0 0 0 2.235.934h2.615z"
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
              <path
                fill-rule="nonzero"
                d="M12 3v18H7.6A4.6 4.6 0 0 1 3 16.4V7.6A4.6 4.6 0 0 1 7.6 3H12zm-2 2H7.6A2.6 2.6 0 0 0 5 7.6v8.8A2.6 2.6 0 0 0 7.6 19H10V5zm-2.5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM14 3h2.4A4.6 4.6 0 0 1 21 7.6v8.8a4.6 4.6 0 0 1-4.6 4.6H14V3zm3 11.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z"
              />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixSwitch />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
