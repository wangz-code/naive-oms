import { NLocale } from '../locales';
import { Ref } from 'vue';
export default function useLocale<T extends keyof NLocale>(ns: T): {
    localeRef: Ref<NLocale[T]>;
};
