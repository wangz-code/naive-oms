import { DelRes, OtherModalProps } from '../../index';
export interface ModelType {
    origPass: string | null;
    newPass: string | null;
    reenteredPassword: string | null;
}
declare const _default: import('vue').DefineComponent<OtherModalProps<{
    query: {
        modifyPassword: (p: ModelType) => Promise<DelRes>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<OtherModalProps<{
    query: {
        modifyPassword: (p: ModelType) => Promise<DelRes>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
