/*
 * @Author: wangqz
 * @Date: 2024-09-09
 * @LastEditTime: 2025-01-03
 * @Description: 表单相关
 */

import useLocale from '#/_mixins/use-locale';
import { isString } from 'lodash-es';
import type { FormRules } from 'naive-ui';
// 效验时机
export const trigger = ['input', 'change', 'blur'];

/**
 *
 * @param fileds 字符串数组
 * @param options FormRules 覆盖配置
 * @returns FormRules
 */
export const stringRuleRequired = (fileds: string[], options?: FormRules): FormRules => {
  const res: FormRules = {};
  const { localeRef } = useLocale('global');
  for (const key of fileds) {
    res[key] = { required: true, message: localeRef.value.required, trigger, ...options };
  }
  return res;
};

/**
 * 正则效验
 * @returns  RegExp
 */
export const Pattern = {
  phone: new RegExp(/^[1][3,4,5,6.7,8,9][0-9]{9}$/),
};

/**
 * 表单验证错误类型
 */
export interface ValidateError {
  message?: string;
  fieldValue?: any;
  field?: string;
}

/**
 *
 * @param value any
 * @returns boolean
 * @description  isString(value) && value.trim().length > 0;
 */
export const isTrimString = (value) => isString(value) && value.trim().length > 0;
