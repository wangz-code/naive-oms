<template>
  <n-card title="只有一行查询的时候 手动配置查询按钮组位置,及自适应">
    <oms-table-async ref="tableRef" :columns="createColumns(action)" :summary="createSummary" :api="getR01" :config="config">
      <template #form="{ collapsed, reload, qParams, TableCtrl }">
        <n-form ref="formRef" label-placement="left" label-width="auto" :model="qParams">
          <n-grid :x-gap="8" :y-gap="15" cols="2 s:2 m:4 l:10" :collapsed="collapsed" :collapsed-rows="1" responsive="screen">
            <n-form-item-gi span="2 s:1 m:2 l:3" label="模糊查询" path="fuzzy" :show-feedback="false">
              <n-input v-model:value="qParams.fuzzy" clearable @keyup.enter="reload" @clear="reload" />
            </n-form-item-gi>
            <n-grid-item span="2 s:1 m:2 l:7">
              <component justify="end" :is="TableCtrl()"></component>
            </n-grid-item>
          </n-grid>
        </n-form>
      </template>
      <template #bar-left>
        <n-space>
          <oms-ibtn type="info" :icon="CirclePlus">新增</oms-ibtn>
          <n-button strong secondary @click="showMsg(getKeys)">获取选中Keys</n-button>
          <n-button strong secondary @click="showMsg(getRows)">获取选中Rows</n-button>
          <n-button strong secondary @click="showMsg(getSource)">获取当页数据</n-button>
          <n-button strong secondary @click="setKeys([0, 1, 2])">设置选中Keys</n-button>
          <n-button strong secondary @click="setRows([{ id: 3 }, { id: 4 }, { id: 5 }] as R01Data[])">设置选中Rows</n-button>
          <n-button strong secondary @click="showMsg(getParams)">获取Params</n-button>
          <n-dropdown trigger="hover" :options="actionOpts">
            <n-button>更多...</n-button>
          </n-dropdown>
        </n-space>
      </template>
    </oms-table-async>
  </n-card>
</template>

<script lang="ts" setup>
import { ArrowUndoOutline, CloseOutline, Trash } from '@vicons/ionicons5';
import { Checks, CirclePlus, Send } from '@vicons/tabler';
import { isObject } from 'lodash-es';
import { DropdownOption, NButton, NCard, NDropdown, NForm, NFormItemGi, NGrid, NGridItem, NInput, NSpace, useMessage, type FormInst } from 'naive-ui';
import { VNodeChild, h, ref } from 'vue';
import { OmsIbtn, OmsIcon, OmsTableAsync, TableConfig, useAsyncTable } from '../../src/index';
import { R01Data, createColumns, createSummary, dataSorce } from './data';
type RowData = R01Data;
const message = useMessage();
const formRef = ref<FormInst | null>(null);

const { tableRef, getKeys, getRows, getSource, setRows, setKeys, getParams } = useAsyncTable<RowData>();

const params = {
  fuzzy: '',
  filter: {
    name: '',
    state: null,
    saleValue: null,
    where: '',
    phone: '',
    select: '',
    stateValue: '',
    dateRange: null,
  },
};
const config: TableConfig<typeof params> = {
  params,
  paramsHandler: (params) => {
    console.log('params log==>', params);
    return params;
  },
  watchFilter: true,
  colsConfig: false,
  tableCtrl: 'top',
  rowKey: 'id',
};

const getR01 = () => {
  return new Promise((resolve, reject) => {
    resolve(dataSorce);
  });
};

const action = (): VNodeChild =>
  h(
    NButton,
    {
      size: 'small',
      onClick: () => {
        message.info('action');
      },
    },
    () => '操作',
  );

const renderIcon = (icon) => h(OmsIcon, { component: icon });
const actionOpts: DropdownOption[] = [
  {
    label: '批量发起',
    key: 'submit',
    icon: () => renderIcon(Send),
  },
  {
    label: '批量审核',
    key: 'audit',
    icon: () => renderIcon(Checks),
  },
  {
    label: '批量驳回',
    key: 'reject',
    icon: () => renderIcon(ArrowUndoOutline),
  },
  {
    label: '批量反审',
    key: 'reAudit',
    icon: () => renderIcon(CloseOutline),
  },
  {
    label: '批量删除',
    key: 'delete',
    icon: () => renderIcon(Trash),
  },
];

const generalOptions = [
  ['0', '全部收款'],
  ['1', '部分收款'],
  ['9', '未收款'],
].map((item) => ({
  label: item[1],
  value: item[0],
}));

const stateOptions = ['', '起草', '待审', '通过'].map((v) => ({
  label: v || '全部',
  value: v,
}));

const showMsg = (fn: () => any[]) => {
  const res = fn();
  message.info(!res.length && !isObject(res) ? '空数据' : JSON.stringify(res));
};
</script>
