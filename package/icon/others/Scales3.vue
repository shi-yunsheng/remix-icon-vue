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

  const RemixScales3 = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0H24V24H0z" />
              <path d="M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512C21.237 16.292 19.7 17 18 17c-1.701 0-3.237-.708-4.329-1.845l3.094-8.512L13 5.387V19H17v2H7v-2h4V5.387L7.232 6.643l3.096 8.512C9.237 16.292 7.7 17 6 17c-1.701 0-3.237-.708-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103L16.582 13h2.835L18 9.103zm-12 0L4.582 13h2.835L6 9.103z" />
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
              <path d="M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512C21.237 16.292 19.7 17 18 17c-1.701 0-3.237-.708-4.329-1.845l3.094-8.512L13 5.387V19H17v2H7v-2h4V5.387L7.232 6.643l3.096 8.512C9.237 16.292 7.7 17 6 17c-1.701 0-3.237-.708-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103l-1.958 5.386c.587.331 1.257.511 1.958.511.7 0 1.37-.18 1.958-.51L18 9.102zm-12 0l-1.958 5.386C4.629 14.82 5.299 15 6 15c.7 0 1.37-.18 1.958-.51L6 9.102z" />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixScales3 />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
