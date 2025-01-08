import { DrawerProps } from "naive-ui";

/**
 * post提交防抖延迟毫秒
 */
export const debounceDely = 500;

/**
 * @description userMessagePro延迟
 */
export const messageDely = 3500;

/**
 * @description 组件公用配置
 */
export const compBind = {
  drawer: {
    to: '#drawer-target',
    trapFocus: false,
    blockScroll: false,
    placement: 'right',
    width: 600,
  } as DrawerProps,
};
