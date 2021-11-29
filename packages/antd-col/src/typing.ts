/**
 * The ComponentProps is used to generate schema.json and schema.md
 * doc: https://github.com/YousefED/typescript-json-schema/blob/master/api.md
 */
export interface ComponentProps {
  /**
   * 栅格占位格数，为 0 时相当于 display: none
   */
  span: number;
  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   */
  offset?: number;
  /**
   * 栅格顺序
   */
  order?: number;
  /**
   * 栅格向左移动格数
   */
  pull?: number;
  /**
   * 栅格向右移动格数
   */
  push?: number;
  /**
   * flex 布局属性
   */
  flex?: number | string;
  /**
   * 自定义 Col props
   */
  attrs?: { [index: string]: any };
  /**
   * foxpage 系统级组件装饰属性
   */
  _decorator?: { [index: string]: any };
}
