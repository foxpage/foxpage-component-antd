/**
 * The ComponentProps is used to generate schema.json and schema.md
 * doc: https://github.com/YousefED/typescript-json-schema/blob/master/api.md
 */

export interface ComponentProps {
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop?: number;
  /**
   * 距离窗口底部达到指定偏移量后触发
   */
  offsetBottom?: number;
  /**
   * 设置 Affix 需要监听其滚动事件的元素，值为一个 document.querySelector 方法接受的字符串
   */
  target?: string;
  /**
   * component customer attrs 样式对象
   */
  attrs?: object;
}
