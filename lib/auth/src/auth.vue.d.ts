import { OtherModalProps } from '../../index';
export type QueryParams = {
    api: {
        authList: Function;
        refresh: Function;
        remove: Function;
        add: Function;
    };
    deep: '2' | '3';
    params: {
        [x: string]: any;
    };
};
declare const _default: import('vue').DefineComponent<OtherModalProps<{
    query: QueryParams;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<OtherModalProps<{
    query: QueryParams;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
