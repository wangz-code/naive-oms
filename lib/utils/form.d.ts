import { FormRules } from 'naive-ui';
export declare const trigger: string[];
/**
 *
 * @param fileds 字符串数组
 * @param options FormRules 覆盖配置
 * @returns FormRules
 */
export declare const stringRuleRequired: (fileds: string[], options?: FormRules) => FormRules;
/**
 * 正则效验
 * @returns  RegExp
 */
export declare const Pattern: {
    phone: RegExp;
};
/**
 * 表单验证错误类型
 */
export interface ValidateError {
    message?: string;
    fieldValue?: any;
    field?: string;
}
