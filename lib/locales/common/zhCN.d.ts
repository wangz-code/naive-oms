declare const zhCN: {
    name: string;
    global: {
        choose: string;
        required: string;
        selectAll: string;
        selectNone: string;
    };
    Table: {
        total: string;
        len: string;
    };
    UpdatePassword: {
        currPassword: string;
        newPassword: string;
        reenteredPassword: string;
    };
    Msg: {
        delete: string;
        pleaseConfirm: string;
        pleaseInput: string;
        confirm: string;
        confirmDelete: string;
        confirmUpdate: string;
        cancel: string;
        tip: string;
        removeConfirmSuccess: string;
        addSuccess: string;
        updateSuccess: string;
        inputPasswordNotEqual: string;
        pleaseInputPasswordAgain: string;
    };
};
export type NLocale = typeof zhCN;
export default zhCN;
