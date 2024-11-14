<template>
	<n-card :bordered="false" size="small" aria-modal="true">
		<n-form ref="formRef" :model="form" :rules="rules">
			<n-form-item path="origPass" :label="localPwd.currPassword">
				<n-input v-model:value="form.origPass" type="password" show-password-on="mousedown" @keydown.enter.prevent />
			</n-form-item>
			<n-form-item path="newPass" :label="localPwd.newPassword">
				<n-input v-model:value="form.newPass" type="password" show-password-on="mousedown" @input="handlePasswordInput" @keydown.enter.prevent />
			</n-form-item>
			<n-form-item ref="rPasswordFormItemRef" first path="reenteredPassword" :label="localPwd.reenteredPassword">
				<n-input v-model:value="form.reenteredPassword" type="password" show-password-on="mousedown" @keydown.enter.prevent />
			</n-form-item>
			<n-row :gutter="[0, 34]">
				<n-col :span="24">
					<n-flex justify="end">
						<n-button round type="primary" @click="handleValidateButtonClick">
							{{ localeRef.confirmUpdate }}
						</n-button>
					</n-flex>
				</n-col>
			</n-row>
		</n-form>
	</n-card>
</template>
<script setup lang="ts">
import useLocale from "#/_mixins/use-locale";
import { useDialogPro, useMessagePro, type DelRes, type OtherModalProps } from "#/index";
import { type FormInst, type FormItemInst, type FormItemRule, type FormRules } from "naive-ui";
import { ref, toRaw } from "vue";

export interface ModelType {
	origPass: string | null;
	newPass: string | null;
	reenteredPassword: string | null;
}
const Dialog = useDialogPro();
const Msg = useMessagePro();
const { localeRef } = useLocale("Msg");
const { localeRef: localPwd } = useLocale("UpdatePassword");
const { modalApi, options } = defineProps<
	OtherModalProps<{
		query: { modifyPassword: (p: ModelType) => Promise<DelRes> };
	}>
>();
const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const form = ref<ModelType>({
	origPass: null,
	newPass: null,
	reenteredPassword: null,
});
function validatePasswordStartWith(_rule: FormItemRule, value: string): boolean {
	return !!form.value.newPass && form.value.newPass.startsWith(value) && form.value.newPass.length >= value.length;
}
function validatePasswordSame(_rule: FormItemRule, value: string): boolean {
	return value === form.value.newPass;
}
const rules: FormRules = {
	origPass: [
		{
			required: true,
			message: localeRef.value.pleaseInput,
		},
	],
	newPass: [
		{
			required: true,
			message: localeRef.value.pleaseInput,
		},
	],
	reenteredPassword: [
		{
			required: true,
			message: localeRef.value.pleaseInputPasswordAgain,
			trigger: ["input", "blur"],
		},
		{
			validator: validatePasswordStartWith,
			message: localeRef.value.pleaseInputPasswordAgain,
			trigger: "input",
		},
		{
			validator: validatePasswordSame,
			message: localeRef.value.inputPasswordNotEqual,
			trigger: ["blur", "password-input"],
		},
	],
};

const handlePasswordInput = () => {
	if (form.value.reenteredPassword) {
		rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
	}
};
const handleValidateButtonClick = (e: MouseEvent) => {
	e.preventDefault();
	formRef.value?.validate(async (errors) => {
		if (!errors) {
			console.log(form.value);
			const { status, message } = await options.query.modifyPassword(toRaw(form.value));
			if (status != "success") {
				Dialog.errorApi(message);
				return;
			}
			Msg.successApi(localeRef.value.updateSuccess);
			modalApi.destroy();
		}
	});
};
</script>
