<template>
  <n-card title="modal">
    <n-button @click="showImportExcel">导入Excel</n-button>
  </n-card>
</template>

<script lang="ts" setup>
import { NButton, NCard } from 'naive-ui';
import { useXModal } from '../../src';
import ImportExcel from './ImportExcel.vue';
import { ExcelOpts } from '.';

const excelModal = useXModal<null, ExcelOpts>({ title: '标题', width: '600px', content: ImportExcel });
const showImportExcel = () => {
  excelModal.open({
    query: {
      api: (p: FormData) => {
        return Promise.resolve({ status: 'failure', message: { code: '', info: '' } });
      },
    },
    onSuccess: () => {},
  });
};
</script>
