import { DataTableRowKey } from 'naive-ui';
export { default as OmsTableAsync } from './src/Table.vue';
export type TableConfig<T = {
    [k: string]: any;
}> = {
    /** 请求参数处理 */
    paramsHandler?: (p: T) => {
        [k: string]: any;
    };
    /** 监听filter变化,重新查询 */
    watchFilter?: boolean;
    /** 加载完成后立即查询 */
    immediately?: boolean;
    /** 列配置 */
    colsConfig?: boolean;
    /** 请求参数 */
    params: T;
    /** 列id */
    rowKey: string;
    /** 查询重置按钮组位置 如果设置top需要手动添加 <component justify="end" :is="TableCtrl()"></component> */
    tableCtrl?: 'top' | 'default';
};
export type TableAsyRef<Row, Q = {
    [k: string]: any;
}> = {
    cKeys: DataTableRowKey[];
    cRows: Row[];
    /** 设置table 已选中的key */
    setKeys: (p: DataTableRowKey[]) => void;
    /** 设置table 已选中的记录 */
    setRows: (p: Row[]) => void;
    /** 获取table 已选中的key */
    getKeys: () => DataTableRowKey[];
    /** 获取table 已选中的记录 */
    getRows: () => Row[];
    /** 获取table 当前的数据 */
    getSource: () => Row[];
    /** 清空已选 */
    cleanCheck: () => void;
    /** 页码重置为1,重新查询 */
    reload: () => void;
    /** 当前页重新查询 */
    refresh: () => void;
    /** 获取查询参数 */
    getParams: () => Q;
};
export declare const useAsyncTable: <T, Q = any>() => {
    tableRef: import('vue').Ref<{
        cKeys: DataTableRowKey[];
        cRows: import('@vue/reactivity').UnwrapRefSimple<T>[];
        setKeys: (p: DataTableRowKey[]) => void;
        setRows: (p: T[]) => void;
        getKeys: () => DataTableRowKey[];
        getRows: () => T[];
        getSource: () => T[];
        cleanCheck: () => void;
        reload: () => void;
        refresh: () => void;
        getParams: () => Q;
    }, TableAsyRef<T, Q> | {
        cKeys: DataTableRowKey[];
        cRows: import('@vue/reactivity').UnwrapRefSimple<T>[];
        setKeys: (p: DataTableRowKey[]) => void;
        setRows: (p: T[]) => void;
        getKeys: () => DataTableRowKey[];
        getRows: () => T[];
        getSource: () => T[];
        cleanCheck: () => void;
        reload: () => void;
        refresh: () => void;
        getParams: () => Q;
    }>;
    reload: () => void;
    getKeys: () => DataTableRowKey[];
    getRows: () => import('@vue/reactivity').UnwrapRefSimple<T>[];
    setKeys: (keys: DataTableRowKey[]) => void;
    setRows: (rows: T[]) => void;
    cleanCheck: () => void;
    getSource: () => T[];
    refresh: () => void;
    getParams: () => Q;
};
