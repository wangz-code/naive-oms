import { DataTableBaseColumn, DataTableColumnKey, DataTableColumns } from 'naive-ui';
type Columns = DataTableColumns<any>;
type Config = Array<{
    key: DataTableColumnKey;
    title: string | undefined;
    show: boolean;
    column: DataTableBaseColumn;
    order: number;
}>;
export declare const useTableColStore: {
    state: {
        tables: {};
        fn: {};
    };
    /** 每个用户使用不同的缓存id */
    getID(uid: string): string;
    /** 1.初始化列配置 */
    initTableCols(uid: string, columns: Columns): any;
    /** 配置列配置 */
    setColsConfig(uid: string, config: Config, field?: string): void;
    /** 重置 */
    resetTableCols(uid: string): void;
    /** 清理 */
    cleanTableCols(): void;
};
export {};
