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

  const RemixPaypal = () => {
    if (props.fill) {
      return (
        <i class={['remix-icon', { 'remix-icon--spin': props.spin }]} style={iconStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502zm-2.96-5.09c.762.868.983 1.81.752 3.285-.019.123-.04.24-.062.36-.735 3.773-3.089 5.446-6.956 5.446H8.957c-.63 0-1.174.414-1.354 1.002l-.014-.002-.93 5.894H3.121a.051.051 0 0 1-.05-.06l2.598-16.51A.95.95 0 0 1 6.607 2h5.976c2.183 0 3.716.469 4.523 1.388z" />
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
                d="M8.495 20.667h1.551l.538-3.376a2.805 2.805 0 0 1 2.77-2.366h.5c2.677 0 4.06-.983 4.55-3.503.208-1.066.117-1.73-.171-2.102-1.207 3.054-3.79 4.16-6.962 4.16h-.884c-.384 0-.794.209-.852.58l-1.04 6.607zm-4.944-.294a.551.551 0 0 1-.544-.637L5.68 2.776A.92.92 0 0 1 6.59 2h6.424c2.212 0 3.942.467 4.899 1.558.87.99 1.123 2.084.871 3.692.36.191.668.425.916.706.818.933.978 2.26.668 3.85-.74 3.805-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.679l-.702 4.383a.804.804 0 0 1-.794.679H6.72a.483.483 0 0 1-.477-.558l.274-1.736H3.55zm6.836-8.894h.884c3.19 0 4.895-1.212 5.483-4.229.02-.101.037-.203.053-.309.166-1.06.05-1.553-.398-2.063-.465-.53-1.603-.878-3.396-.878h-5.5L5.246 18.373h1.561l.73-4.628.007.001a2.915 2.915 0 0 1 2.843-2.267z"
              />
            </g>
          </svg>
        </i>
      );
    }
  };
</script>

<template>
  <RemixPaypal />
</template>

<style lang="scss">
  @import '../style.scss';
</style>
