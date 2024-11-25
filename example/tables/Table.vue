<template>
  <n-card title="异步table">
    <oms-page-wrapper>
      <oms-table-async
        ref="tableRef"
        :columns="createColumns(action)"
        :summary="createSummary"
        :api="getR01"
        remote
        :max-height="450"
        :config="config"
      >
        <template #form="{ collapsed, reload, qParams }">
          <n-form ref="formRef" label-placement="left" label-width="auto" :model="qParams">
            <n-grid :x-gap="8" :y-gap="15" cols="2 s:3 m:4 l:5 xl:6" :collapsed="collapsed" :collapsed-rows="1" responsive="screen">
              <n-form-item-gi label="模糊查询" path="fuzzy" :show-feedback="false">
                <n-input v-model:value="qParams.fuzzy" clearable @keyup.enter="reload" @clear="reload" />
              </n-form-item-gi>
              <n-grid-item>
                <n-form-item label="姓名" path="user.name" :show-feedback="false" :rule="[{ required: true, message: '姓名必填' }]">
                  <n-input v-model:value="qParams.filter.name" placeholder="输入姓名" />
                </n-form-item>
              </n-grid-item>
              <n-grid-item :span="2">
                <n-form-item label="单据日期" :show-feedback="false" path="phone">
                  <n-date-picker v-model:value="qParams.filter.dateRange" type="daterange" clearable />
                </n-form-item>
              </n-grid-item>
              <n-grid-item>
                <n-form-item label="收款状态" :show-feedback="false" path="phone">
                  <n-select v-model:value="qParams.filter.saleValue" clearable :options="generalOptions" />
                </n-form-item>
              </n-grid-item>
              <n-grid-item>
                <n-form-item label="单据状态" :show-feedback="false" path="user.name">
                  <n-select v-model:value="qParams.filter.stateValue" placeholder="Select" :options="stateOptions" />
                </n-form-item>
              </n-grid-item>
              <n-grid-item>
                <n-form-item label="电话号码" path="phone" :show-feedback="false">
                  <n-input v-model:value="qParams.filter.phone" placeholder="电话号码" />
                </n-form-item>
              </n-grid-item>
              <n-grid-item>
                <n-form-item label="电话号码" path="phone" :show-feedback="false">
                  <n-input v-model:value="qParams.filter.phone" placeholder="电话号码" />
                </n-form-item>
              </n-grid-item>
              <n-grid-item>
                <n-form-item label="电话号码" path="phone" :show-feedback="false">
                  <n-input v-model:value="qParams.filter.phone" placeholder="电话号码" />
                </n-form-item>
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
    </oms-page-wrapper>
  </n-card>
</template>

<script lang="ts" setup>
import { ArrowUndoOutline, CloseOutline, Trash } from '@vicons/ionicons5';
import { Checks, CirclePlus, Send } from '@vicons/tabler';
import {
  NButton,
  NCard,
  NDropdown,
  NForm,
  NFormItem,
  NGridItem,
  NFormItemGi,
  NGrid,
  NInput,
  NSelect,
  NSpace,
  NDatePicker,
  useMessage,
  type FormInst,
  DropdownOption,
} from 'naive-ui';
import { VNodeChild, h, ref } from 'vue';
import { OmsIcon, OmsTableAsync, TableConfig, useAsyncTable, OmsIbtn, OmsPageWrapper } from '../../src/index';
import { R01Data, createColumns, createSummary, dataSorce } from './data';
import { isObject } from 'lodash-es';
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
  colsConfig: true,
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
