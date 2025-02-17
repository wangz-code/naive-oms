import { DataTableBaseColumn, DataTableColumnKey, DataTableColumns } from 'naive-ui';
import { Sorter } from 'naive-ui/es/data-table/src/interface';
import { VNodeChild } from 'vue';
type Columns = DataTableColumns<any>;
type Config = Array<{
    key: DataTableColumnKey;
    title: string | undefined;
    show: boolean;
    column: DataTableBaseColumn;
    order: number;
}>;
type Call = {
    render: (rowData: any, rowIndex: number) => VNodeChild;
    sorter: boolean | Sorter | 'default';
};
type TableState = {
    tables: {
        [x: string]: {
            config: Config;
            field: string;
        };
    };
    fn: {
        [x: string]: {
            [key: DataTableColumnKey]: Call;
        };
    };
};
export declare const useTableColStore: {
    state: TableState;
    /** 每个用户使用不同的缓存id */
    getID(uid: string): string;
    /** 配置列配置 */
    setColsConfig(uid: string, config: Config, field?: string): void;
    /** 1.初始化列配置 */
    initTableCols(uid: string, columns: Columns): Config;
    /** 重置 */
    resetTableCols(uid: string): void;
    /** 清理 */
    cleanTableCols(): void;
};
export {};
