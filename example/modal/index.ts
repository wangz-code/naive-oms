import { DelRes } from '../../src';

export type ExcelOpts = {
  title?: string; // 开窗标题 优先级最高
  query: { api: (p: FormData) => Promise<DelRes> };
  onSuccess?: () => void; // 上传成功
  onCancel?: () => void;
  onMaskClick?: () => void;
};
export { default as Modal } from './Modal.vue';
