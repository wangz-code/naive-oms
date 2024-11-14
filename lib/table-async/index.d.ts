import { DataTableRowKey } from 'naive-ui';
import { default as OmsTableAsync } from './src/Table.vue';
export { OmsTableAsync };
export type TableConfig<Q = {
    [k: string]: any;
}> = {
    /** 请求参数处理 */
    paramsHandler?: (p: Q) => {
        [k: string]: any;
    };
    /** 监听filter变化,重新查询 */
    watchFilter?: boolean;
    /** 列配置 */
    colsConfig?: boolean;
    /** 请求参数 */
    params: Q;
    /** 列id */
    rowKey: string;
};
export type TableAsyRef<Row> = {
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
};
export declare const useAsyncTable: <T>() => {
    tableRef: import('vue').Ref<TableAsyRef<T>, TableAsyRef<T>>;
    reload: () => void;
    getKeys: () => DataTableRowKey[];
    getRows: () => T[];
    setKeys: (keys: DataTableRowKey[]) => void;
    setRows: (rows: T[]) => void;
    cleanCheck: () => void;
    getSource: () => T[];
    refresh: () => void;
};
