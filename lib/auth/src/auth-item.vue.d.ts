import { AuthData } from '../../index';
declare const _default: import('vue').DefineComponent<{
    auths: AuthData[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    selectAll: (...args: any[]) => void;
    selectNone: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<{
    auths: AuthData[];
}> & Readonly<{
    onSelectAll?: (...args: any[]) => any;
    onSelectNone?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
