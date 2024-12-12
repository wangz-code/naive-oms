const zhCN = {
  name: 'zh-CN',
  global: {
    choose: '请选择',
    required: '必填',
    selectAll: '全选',
    selectNone: '全不选',
  },
  Table: {
    total: '条记录',
    len: '条',
  },
  UpdatePassword: {
    currPassword: '当前密码',
    newPassword: '新密码',
    reenteredPassword: '重复新密码',
  },
  Msg: {
    delete: '删除后不可恢复',
    pleaseConfirm: '请确认',
    pleaseInput: '请输入',
    confirm: '确认',
    confirmDelete: '确认删除',
    confirmUpdate: '确认修改',
    cancel: '取消',
    tip: '温馨提示',
    removeConfirmSuccess: '移除成功',
    addSuccess: '添加成功',
    updateSuccess: '修改成功',
    inputPasswordNotEqual: '两次密码输入不一致',
    pleaseInputPasswordAgain: '请再次输入密码',
  },
};
export type NLocale = typeof zhCN;
export default zhCN;
