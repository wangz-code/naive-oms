import { EllipsisProps, PaginationProps } from 'naive-ui';
export declare const pageSizes: number[];
type PaginationOpt = {
    onQuery?: () => void;
    itemCount: string;
    props?: PaginationProps;
};
/**
 * @descript table分页  重置page必需使用reload, 当前页刷新使用onQuery
 * @descript 已加入自动导入
 */
export declare const usePagination: ({ remote }: {
    remote: boolean;
}) => {
    pagination: PaginationProps;
    setPageProps: (opt: PaginationOpt) => void;
    reload: () => void;
    setQuery: (query: () => void) => () => void;
};
type CommonColumnInfo = {
    fixed?: 'left' | 'right';
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    className?: string;
    align?: 'left' | 'center' | 'right';
    titleAlign?: 'left' | 'center' | 'right';
    ellipsis?: boolean | EllipsisProps;
    ellipsisComponent?: 'ellipsis' | 'performant-ellipsis';
    render?: any;
};
type Cols = [string, string, CommonColumnInfo?];
export declare function tableGen(data: Cols[]): {
    fixed?: "left" | "right";
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    className?: string;
    align?: "left" | "center" | "right";
    titleAlign?: "left" | "center" | "right";
    ellipsis?: boolean | EllipsisProps;
    ellipsisComponent?: "ellipsis" | "performant-ellipsis";
    render?: any;
    key: string;
    title: string;
}[];
/** 清理filter, 默认清理value=null */
export declare function paramsHandler(params: {
    [k: string]: any;
}, cleanFilter?: any[]): {
    [k: string]: any;
};
export {};
