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

  const RemixBilliards = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 1.75a2.5 2.5 0 0 1 1.88 4.148c.565.456.92 1.117.92 1.852 0 1.38-1.254 2.5-2.8 2.5-1.546 0-2.8-1.12-2.8-2.5 0-.735.355-1.396.92-1.853A2.5 2.5 0 0 1 12 7.75zm0 5c-.753 0-1.3.488-1.3 1s.547 1 1.3 1 1.3-.488 1.3-1-.547-1-1.3-1zm0-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
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
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 1.75a2.5 2.5 0 0 0-1.88 4.147c-.565.457-.92 1.118-.92 1.853 0 1.38 1.254 2.5 2.8 2.5 1.546 0 2.8-1.12 2.8-2.5 0-.735-.355-1.396-.92-1.852A2.5 2.5 0 0 0 12 7.75zm0 5c.753 0 1.3.488 1.3 1s-.547 1-1.3 1-1.3-.488-1.3-1 .547-1 1.3-1zm0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixBilliards />
</template>
