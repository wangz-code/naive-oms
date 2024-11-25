import { DataTableColumns, DataTableCreateSummary, DataTableRowKey } from 'naive-ui';
import { TableConfig } from '../index';
declare const _default: <T extends object, A extends Function, Q extends object>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:columns"?: (columns: DataTableColumns<T>) => any;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onUpdate:columns"> & ({
        columns?: DataTableColumns<T>;
    } & {
        /** 请求 */
        api: A;
        /** 配置参数*/
        config: TableConfig<Q>;
        /** 合计行 */
        summary?: DataTableCreateSummary<T>;
        /** 立即查询 default: true */
        query?: boolean;
        /** 是否需要自动分页(true:远程分页, false:前端分页) */
        remote?: boolean;
        /** 表格高度 */
        maxHeight?: string | number;
    })> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{
        cKeys: import('vue').Ref<DataTableRowKey[], DataTableRowKey[]>;
        cRows: import('vue').Ref<import('@vue/reactivity').UnwrapRefSimple<T>[], import('@vue/reactivity').UnwrapRefSimple<T>[] | T[]>;
        setKeys: (keys: DataTableRowKey[]) => void;
        setRows: (rows: T[]) => void;
        cleanCheck: () => void;
        reload: () => void;
        getSource: () => import('@vue/reactivity').UnwrapRefSimple<T>[];
        refresh: () => void;
        getParams: () => any;
    }>): void;
    attrs: any;
    slots: {
        form?(_: {
            collapsed: boolean;
            reload: () => void;
            qParams: import('@vue/reactivity').DistributeRef<[Q] extends [import('vue').Ref<any, any>] ? import('@vue/shared').IfAny<Q, import('vue').Ref<Q, Q>, Q> : import('vue').Ref<import('vue').UnwrapRef<Q>, Q | import('vue').UnwrapRef<Q>>>;
            TableCtrl: () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>;
        }): any;
        "bar-left"?(_: {}): any;
    };
    emit: {
        'update:columns': [columns: DataTableColumns<T>];
    };
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
