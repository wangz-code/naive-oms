import { ArrowUndoOutline, CheckmarkCircleSharp, CloseCircleOutline } from '@vicons/ionicons5';
import { Send, Trash } from '@vicons/tabler';

export { default as OmsIbtn } from './src/IconButton.vue';

/**
 * @description 预设button
 */
export const btnAttr = {
  delete: {
    type: 'error',
    strong: true,
    tertiary: true,
    icon: Trash,
  },
  launch: {
    type: 'default',
    strong: true,
    tertiary: true,
    icon: Send,
  },
  reject: {
    type: 'error',
    strong: true,
    tertiary: true,
    icon: ArrowUndoOutline,
  },
  agree: {
    type: 'success',
    strong: true,
    tertiary: true,
    icon: CheckmarkCircleSharp,
  },
  disagree: {
    type: 'error',
    strong: true,
    tertiary: true,
    icon: CloseCircleOutline,
  },
};
