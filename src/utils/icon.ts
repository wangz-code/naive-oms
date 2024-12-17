/*
 * @Author: wangqz
 * @Date: 2024-12-17
 * @LastEditTime: 2024-12-17
 * @Description: content
 */

import { NIcon } from 'naive-ui';
import { Component, h } from 'vue';

/**  * @param icon Icon 组件 */
export function renderIcon(icon: Component) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
}
