/**
 * The ComponentProps is used to generate schema.json and schema.md
 * doc: https://github.com/YousefED/typescript-json-schema/blob/master/api.md
 */
export interface ComponentProps {
  /**
   * 输入框默认内容
   */
  defaultValue?: string;
  /**
   * 控件大小。注：标准表单内的输入框大小限制为 large
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * 是否有边框
   */
  bordered?: boolean;
  /**
   * 可以点击清除图标删除内容
   */
  allowClear?: boolean;
  /**
   * 用户自定义组件 Props
   */
  attrs?: { [index: string]: any };
}
