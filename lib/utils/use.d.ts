import { DataTableRowKey, ModalReactive } from 'naive-ui';
import { CSSProperties, Component, Ref } from 'vue';
export type ChooseOpts<T = any> = {
    title?: string;
    keys?: any[];
    query?: {};
    onConfirm?: (keys: any[], rows: T[]) => void;
    onConfirmClose?: (keys: any[], rows: T[]) => void;
    onCancel?: () => void;
    onMaskClick?: () => void;
};
export type XModalOptions = {
    multiple?: boolean;
    maskClosable?: boolean;
    width?: string;
    title?: string;
    content: Component;
    style?: CSSProperties;
};
export type ChooseModalProps = {
    modalApi: ModalReactive;
    options: ChooseOpts;
    multiple?: boolean;
};
export type OtherModalProps<T extends any> = {
    modalApi: ModalReactive;
    options: T;
};
/**
 *
 * @param xModalOpt
 * @descript 使用方式参见选择账户 /M80/M8003/index
 * @descript 已加入自动导入
 * T 为自定义类型, 默认是 ModalOpts
 */
export declare const useXModal: <P = any, T = ChooseOpts<P>>(xModalOpt: XModalOptions) => {
    open: (opt: T) => void;
    close: () => void;
};
/**
 * @descript modal首次弹窗骨架屏加载,没有骨架撑起来会抖动
 * @descript 已加入自动导入
 */
export declare const useSkeleton: () => {
    skeleton: Ref<boolean, boolean>;
    skeClose: (delay?: number) => void;
};
/**
 *
 * @param key 唯一id
 * @descript 获取table的选中数据 keys 和 rows
 * @descript 已加入自动导入
 *
 */
export declare const useTableChecked: <T>(key: string) => {
    handleCheck: (rowKeys: DataTableRowKey[], checkRows: any[]) => void;
    cKeys: Ref<DataTableRowKey[], DataTableRowKey[]>;
    cRows: Ref<import('@vue/reactivity').UnwrapRefSimple<T>[], T[] | import('@vue/reactivity').UnwrapRefSimple<T>[]>;
    cleanCheck: () => void;
};
/**
 *
 * @descript 新增时缓存未提交的数据
 * @descript 已加入自动导入
 */
export declare const useResetForm: <T>() => {
    refForm: (value: T) => Ref<T>;
    nextRestForm: () => boolean;
    checkRestForm: () => void;
};
