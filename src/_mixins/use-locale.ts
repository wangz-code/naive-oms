import { NLocale, enUS, zhCN } from "#/locales";
import { Ref, computed, inject } from "vue";

const configProviderInjectionKey = "n-config-provider";
export default function useLocale<T extends keyof NLocale>(ns: T): { localeRef: Ref<NLocale[T]> } {
	const { mergedLocaleRef } = inject(configProviderInjectionKey, null) || {};
	const name = computed(() => mergedLocaleRef.value.name);
	const localeRef = computed(() => {
		return name.value == "zh-CN" ? zhCN[ns] : enUS[ns];
	});
	return { localeRef };
}
