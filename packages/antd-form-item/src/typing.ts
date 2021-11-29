/**
 * The ComponentProps is used to generate schema.json and schema.md
 * doc: https://github.com/YousefED/typescript-json-schema/blob/master/api.md
 */
export interface ComponentProps {
  /**
   * 表单字段名
   */
  name?: string;
  /**
   * label 标签的文本
   */
  label?: string;
  /**
   * 用户自定义组件 Props
   */
  attrs?: { [index: string]: any };
}
