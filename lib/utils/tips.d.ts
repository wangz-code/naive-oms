import { MessageOptions } from 'naive-ui';
import { DialogApiInjection, DialogOptions } from 'naive-ui/es/dialog/src/DialogProvider';
import { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider';
import { VNodeChild } from 'vue';
import { Message } from '../types/api-type';
interface MessagePro {
    /** 接口错误 轻提示, */
    errorApi: (content: Message, opt?: MessageOptions) => void;
    /** 主要用于Api响应成功提示 目前仅封装, 如果后面需要定制可以直接修改这里 */
    successApi: (content: string | (() => VNodeChild), opt?: MessageOptions) => void;
    /** 基本等同于message.warning 仅把返回值设为true */
    warnTrue: (content: string | (() => VNodeChild), opt?: MessageOptions) => true;
}
/**
 * @descript 基于useMessage扩展
 * @descript 已加入自动导入
 */
export declare const useMessagePro: () => MessageApiInjection & MessagePro;
interface DialogPro {
    delConfirm: (opt: DialogOptions & {
        title?: string;
        content?: string;
        positiveText?: string;
        negativeText?: string;
    }) => void;
    errorApi: (opt: Message) => void;
}
/**
 * @descript 基于useDialog扩展
 * @descript 已加入自动导入
 */
export declare const useDialogPro: () => DialogApiInjection & DialogPro;
export {};
