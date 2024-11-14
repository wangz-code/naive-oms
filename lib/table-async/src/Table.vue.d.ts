import { TableConfig } from '../../index';
import { DataTableColumns, DataTableCreateSummary, DataTableRowKey } from 'naive-ui';
type T = {
    [k: string]: any;
};
type A = Function;
type TablePorps = {
    /** 请求 */
    api: A;
    /** 配置参数*/
    config: TableConfig<T>;
    /** 合计行 */
    summary?: DataTableCreateSummary<T>;
    /** 立即查询 default: true */
    query?: boolean;
    /** 表格高度 */
    maxHeight?: string | number;
    /** 查询重置按钮组位置 需要手动添加 <component justify="end" :is="TableCtrl()"></component> */
    buttonGrop?: 'top' | 'default';
};
declare let __VLS_typeProps: TablePorps;
type __VLS_PublicProps = {
    'columns'?: DataTableColumns<T>;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        form?(_: {
            collapsed: boolean;
            reload: () => void;
            qParams: T;
            TableCtrl: () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>;
        }): any;
        "bar-left"?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {
    cKeys: import('vue').Ref<DataTableRowKey[], DataTableRowKey[]>;
    cRows: import('vue').Ref<T[], T[]>;
    setKeys: (keys: DataTableRowKey[]) => void;
    setRows: (rows: T[]) => void;
    cleanCheck: () => void;
    reload: () => void;
    getSource: () => T[];
    refresh: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:columns": (columns: DataTableColumns<T>) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:columns"?: (columns: DataTableColumns<T>) => any;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
