<template>
  <slot name="form" v-bind="{ collapsed, reload, qParams, TableCtrl }"> </slot>
  <n-flex justify="space-between" style="margin: 10px 0px">
    <span>
      <slot name="bar-left"></slot>
    </span>
    <component v-if="config.tableCtrl != 'top'" :is="TableCtrl()"></component>
  </n-flex>
  <n-data-table
    size="small"
    :remote="remote"
    :columns="columns"
    :data="tableSorce"
    :pagination="pagination"
    :loading="isLoading"
    :row-key="(rows: any) => rows[rowKey]"
    :scroll-x="scrollX"
    :max-height="maxHeight || 500"
    :summary="summary"
    :checked-row-keys="cKeys"
    @update:sorter="handleSorterChange"
    @update:checked-row-keys="handleCheck"
  />
</template>
<script setup lang="ts" generic="T extends object, A extends Function, Q extends object">
import type {} from '@vue/shared'; // https://github.com/vuejs/core/issues/5960
import { useDialogPro, usePagination, useTableChecked } from '#/index';
import { cloneDeep, isArray, isFunction } from 'lodash-es';
import { NDataTable, NFlex, type DataTableColumns, type DataTableCreateSummary, type DataTableRowKey, type DataTableSortState } from 'naive-ui';
import type { CompareFn } from 'naive-ui/es/data-table/src/interface';
import { h, onMounted, ref, toRaw, watch } from 'vue';
import TableBtnGroup from './TableBtnGroup.vue';
import { TableConfig } from '../index';
type TablePorps = {
  /** 请求 */
  api: A;
  /** 配置参数*/
  config: TableConfig<Q>;
  /** 合计行 */
  summary?: DataTableCreateSummary<T>;
  /** 立即查询 default: true */
  query?: boolean;
  /** 是否需要自动分页(true:远程分页, false:前端分页) */
  remote?: boolean;
  /** 表格高度 */
  maxHeight?: string | number;
};
const columns = defineModel<DataTableColumns<T>>('columns', { default: [] });
const { api, config, query = true, remote = false } = defineProps<TablePorps>();
const rowKey = config.rowKey;
const collapsed = ref(false);
const Dialog = useDialogPro();
const scrollX = columns.value.reduce((pre, curr) => pre + Number(curr.width) || 0, 0);

const { pagination, setPageProps, reload, setQuery } = usePagination({ remote });
const { cKeys, cRows, handleCheck, cleanCheck } = useTableChecked<T>(rowKey);
const tableSorce = ref<T[]>([]);
const isLoading = ref(false);
let copiedData = [] as T[];
const qParams = ref(cloneDeep(config.params));
const onReset = () => {
  qParams.value = cloneDeep(config.params);
  reload();
};

const setKeys = (keys: DataTableRowKey[]) => {
  cKeys.value = keys;
  cRows.value = keys.map((item) => ({ [rowKey]: item })) as T[];
};

const setRows = (rows: T[]) => {
  cRows.value = rows;
  cKeys.value = rows.map((item: any) => item[rowKey]);
};

const getSource = () => toRaw(tableSorce.value);

const onQuery = setQuery(async () => {
  const { pageSize = 10, page = 1 } = pagination;
  try {
    isLoading.value = true;
    let params = {
      limit: pageSize,
      offset: (page - 1) * pageSize,
    };
    if (config.paramsHandler) params = { ...params, ...config.paramsHandler(toRaw(qParams.value)) };
    const { data, status, message } = await api(params);
    if (status != 'success') {
      Dialog.errorApi(message);
      return;
    }
    copiedData = cloneDeep(data.list);
    tableSorce.value = data.list;
    setPageProps({ itemCount: data.count });
  } finally {
    isLoading.value = false;
  }
});

const handleSorterChange = (sorter: DataTableSortState) => {
  if (isLoading.value) return;
  isLoading.value = true;
  if (isArray(sorter)) console.error('sorter 暂不支持 multiple 排序');
  // 异步排序 => sorter=true 暂定
  // if (isBoolean(sorter.sorter) && sorter.sorter) qParams.value.sort = { [sorter.columnKey]: sorter.order };
  // 前端排序 => 根据传递的sort函数处理
  if (isFunction(sorter.sorter)) {
    const compareFn = sorter.sorter as CompareFn<T>;
    const orderedData = cloneDeep(copiedData);
    if (sorter.order == 'ascend') orderedData.sort(compareFn);
    if (sorter.order == 'descend') orderedData.sort(compareFn).reverse();
    tableSorce.value = orderedData;
  }
  isLoading.value = false;
};

const TableCtrl = () => {
  const { colsConfig = true } = config;
  return h(TableBtnGroup, {
    collapsed: collapsed.value,
    'onUpdate:collapsed': (value) => (collapsed.value = value),
    setCols: (cols: DataTableColumns<T>) => (columns.value = cols),
    columns: columns.value,
    onReload: reload,
    colsConfig,
    onReset,
  });
};

onMounted(() => {
  query && onQuery();
  const { watchFilter } = config;
  watchFilter && watch(() => qParams.value.filter, reload, { deep: 1 });
});
defineExpose({ cKeys, cRows, setKeys, setRows, cleanCheck, reload, getSource, refresh: onQuery, getParams: () => toRaw(qParams.value) });
</script>

<style>
/* 覆盖默认的样式, 合计行固定在底部 */
.n-data-table .n-data-table-tr--summary {
  position: sticky;
  bottom: 0px;
  z-index: 2;
}
</style>
