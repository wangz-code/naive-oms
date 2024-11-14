import { DataTableColumns, FlexJustify } from 'naive-ui';
declare const _default: import('vue').DefineComponent<{
    collapsed: boolean;
    columns: DataTableColumns<any>;
    colsConfig: boolean;
    onReload: () => void;
    onReset: () => void;
    setCols: any;
    justify?: FlexJustify;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:collapsed": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<{
    collapsed: boolean;
    columns: DataTableColumns<any>;
    colsConfig: boolean;
    onReload: () => void;
    onReset: () => void;
    setCols: any;
    justify?: FlexJustify;
}> & Readonly<{
    "onUpdate:collapsed"?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
