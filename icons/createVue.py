# 此脚本用于创建并注册图标组件库
# 创建时间：2022年10月2日

import os
import re

vue_prefix = "Remix"  # 组件前缀
svg_dir = r"./"  # 要转换的svg路径
to_vue_dir = r"../package/icon/"  # 生成的vue路径
import_vue = r"../package/icon"  # 组件导入路径（即to_vue_dir文件）
to_index_dir = r"../package/index.ts"  # 组件索引
# to_remix_dir = r"../package/remix-icon.ts" 
import_remix = r"../package/remix-icon"  # 全局文件导入路径（即to_remix_dir文件）
to_declare_dir = r"../package/remix-icon.d.ts"  # 类型声明


def to_upper_camel_case(name: str) -> str:
    """
    将短线命名转成驼峰命名（大驼峰）
    """
    name_list = name.split("-")
    for i in range(len(name_list)):
        nl = list(name_list[i])
        nl[0] = nl[0].upper()
        name_list[i] = "".join(nl)
    return "".join(name_list)


def create_component() -> dict:
    """
    创建组件文件
    """
    vue_name = {}  # 组件名列表

    svg_list = {}  # svg文件列表

    # 模板
    template = f"""
    <script setup lang="tsx">
      import {{ reactive }} from 'vue';
      import {{ Props }} from '../props';
      import {{ TIconStyle }} from '../interface';
      import isNumber from '../../utils/isNumber';

      // 图标属性
      const props = defineProps(Props);

      // 样式变量
      const iconStyle = reactive<TIconStyle>({{
        '--icon-size': '',
        '--icon-color': '',
      }});

      // 计算尺寸
      const iconSize = isNumber(props.size) ? `${{props.size}}px` : props.size;
      // 颜色
      const iconColor = props.color || '';
      // 更新变量值
      iconStyle['--icon-size'] = iconSize;
      iconStyle['--icon-color'] = iconColor;

      const {vue_prefix}_vue_name_ = () => {{_vue_content_}};
    </script>

    <template>
      <{vue_prefix}_vue_name_ />
    </template>

    <style lang="scss">
      @import '../style.scss';
    </style>
  """

    # 插入到模板的头部数据
    vue_head = """
    class={['remix-icon', { 'remix-icon--spin': props.spin }]}
    style={iconStyle}
  """

    # 遍历获取svg文件路径
    for root, dirs, file in os.walk(svg_dir):
        # 获取目录名，目录名下对应类型的svg
        svg_type = root.split("/")[1]
        # 排除空目录（或没有svg文件的目录）
        if svg_type:
            svg_list[svg_type] = {"line": {}, "fill": {}, "other": {}}
            for f in file:
                if re.match(".+-line", f[:-4]):
                    key = to_upper_camel_case(f[:-9])
                    # 获取文件内容
                    with open(f"./{svg_type}/{f}", "rb+") as f:
                        svg_list[svg_type]["line"][key] = f.read().decode("utf-8")
                elif re.match(".+-fill", f[:-4]):
                    key = to_upper_camel_case(f[:-9])
                    # 获取文件内容
                    with open(f"./{svg_type}/{f}", "rb+") as f:
                        svg_list[svg_type]["fill"][key] = f.read().decode("utf-8")
                else:
                    key = to_upper_camel_case(f[:-4])
                    with open(f"./{svg_type}/{f}", "rb+") as f:
                        svg_list[svg_type]["other"][key] = f.read().decode("utf-8")

    # 遍历svg文件
    for key in svg_list:
        svg_line = svg_list[key]["line"]
        svg_fill = svg_list[key]["fill"]
        svg_other = svg_list[key]["other"]

        # 对应类型的图标
        vue_name[str(key).lower()] = []

        for k in svg_line:
            # 更新内容
            d_content = f"""
        if (props.fill) {{
          return (<i {vue_head}>{svg_fill[k]}</i>);
        }} else {{
          return (<i {vue_head}>{svg_line[k]}</i>);
        }}
      """
            # 内容插入到模板
            d_template = template.replace("_vue_name_", k)
            d_template = d_template.replace("_vue_content_", d_content)
            # 合并目录
            vue_dir = f"{to_vue_dir}{str(key).lower()}"
            # 如果目录不存在先创建
            if not os.path.exists(vue_dir):
                os.makedirs(vue_dir)
            # 写入文件
            with open(f"{vue_dir}/{k}.vue", "w+", encoding="utf-8") as f:
                f.write(d_template)
            # 添加组件名
            vue_name[str(key).lower()].append(k)

        for k in svg_other:
            # 更新内容
            s_content = f"""return (<i {vue_head}>{svg_other[k]}</i>);"""
            # 内容插入到模板
            s_template = template.replace("_vue_name_", k)
            s_template = s_template.replace("_vue_content_", s_content)
            # 合并目录
            vue_dir = f"{to_vue_dir}{str(key).lower()}"
            # 如果目录不存在先创建
            if not os.path.exists(vue_dir):
                os.makedirs(vue_dir)
            # 写入文件
            with open(f"{vue_dir}/{k}.vue", "w+", encoding="utf-8") as f:
                f.write(s_template)
            # 添加组件名
            vue_name[str(key).lower()].append(k)

    return vue_name


def createIndex(vue_name: dict):
    """
    创建图标入口文件
    """
    index_import = []
    index_export = []

    for key in vue_name:
        for name in vue_name[key]:
            index_import.append(
                f"import {vue_prefix}{name} from './icon/{key}/{name}.vue';"
                # f"const {vue_prefix}{name} = defineAsyncComponent(() => import('./icon/{key}/{name}.vue'));"
            )
            index_export.append(f"{vue_prefix}{name},")

    # 数组转成字符串
    index_import = "\n".join(index_import)
    index_export = "\n".join(index_export)

    # 索引文件内容
    index = f"""
    
    import type {{ App, Component }} from 'vue';

    {index_import}

    const icons: {{[key: string]: Component}} = {{ {index_export} }};
    
    const remixIcon = {{
      ...icons,
      install: (app: App) => {{
        for (const key in icons) {{
          app.component(key, icons[key]);
        }}
      }},
    }};

    const install = (app: App) => {{
      app.use(remixIcon);
    }};

    export default {{
      install,
    }};
  """

    # 写入文件
    with open(to_index_dir, "w+", encoding="utf-8") as f:
        f.write(index)


def create_declare(vue_name: dict):
    """
    创建图标的类型声明接口文件
    """
    interface = []

    for key in vue_name:
        for name in vue_name[key]:
            interface.append(
                f"{vue_prefix}{name}: typeof import('{import_remix}')['{vue_prefix}{name}'];"
            )

    # 数组转成字符串
    interface = "\n".join(interface)

    # 声明文件内容
    declare = f"""
    import '@vue/runtime-core';

    export {{}};

    declare module '@vue/runtime-core' {{
      export interface GlobalComponents {{
        {interface}
      }}
    }}
  """

    # 写入文件
    with open(to_declare_dir, "w+", encoding="utf-8") as f:
        f.write(declare)


def main():
    """
    主函数
    """
    vue_name = create_component()
    createIndex(vue_name)
    create_declare(vue_name)
    # 回到项目根路径格式化代码文件
    os.chdir("../")
    res = os.popen("pnpm lint")
    print(res.buffer.read().decode(encoding="utf-8"))


if __name__ == "__main__":
    main()
