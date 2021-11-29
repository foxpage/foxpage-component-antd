/**
 * The ComponentProps is used to generate schema.json and schema.md
 * doc: https://github.com/YousefED/typescript-json-schema/blob/master/api.md
 */
export interface ComponentProps {
  /**
   * 宽度
   */
  width?: number | string;
  /**
   * 主题颜色
   */
  theme?: 'light' | 'dark';
  /**
   * 是否可收起
   */
  collapsible?: boolean;
  /**
   * 是否默认收起
   */
  defaultCollapsed?: boolean;
  /**
   * 收缩宽度，设置为 0 会出现特殊 trigger
   */
  collapsedWidth?: number | string;
  /**
   * 触发响应式布局的断点
   */
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /**
   * 用户自定义组件 Props
   */
  attrs?: { [index: string]: any };
}
