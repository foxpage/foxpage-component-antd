/**
 * The ComponentProps is used to generate schema.json and schema.md
 * doc: https://github.com/YousefED/typescript-json-schema/blob/master/api.md
 */
export interface ComponentProps {
  /**
   * 按钮文案, 会替换掉 children 属性
   */
  textChildren?: string;
  /**
   * 设置按钮形状
   */
  shape?: 'circle' | 'round';
  /**
   * 设置按钮大小
   */
  size?: 'large' | 'middle' | 'small' | 'middle';
  /**
   * 设置按钮类型
   */
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * 用户自定义组件 Props
   */
  attrs?: { [index: string]: any };
}
