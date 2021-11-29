/**
 * The ComponentProps is used to generate schema.json and schema.md
 * doc: https://github.com/YousefED/typescript-json-schema/blob/master/api.md
 */
export interface ComponentProps {
  /**
   * 用户自定义组件 Props
   */
  layout?: 'horizontal' | 'vertical' | 'inline';
  size?: 'small' | 'middle' | 'large';
  /**
   * 用户自定义组件 Props
   */
  attrs?: { [index: string]: any };
}
