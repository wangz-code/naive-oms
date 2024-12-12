<script setup lang="ts">
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5';
import { NButton, NCard, NFlex, NIcon, NText, NUpload, NUploadDragger, type UploadFileInfo, type UploadInst } from 'naive-ui';
import { ref } from 'vue';
import { ExcelOpts } from '.';
import { useDialogPro, useMessagePro, type OtherModalProps } from '../../src/index';
let fileInfo: UploadFileInfo | null = null;
const uploadRef = ref<UploadInst>();
const { modalApi, options } = defineProps<OtherModalProps<ExcelOpts>>();
const Msg = useMessagePro();
const Dialog = useDialogPro();
const handleChange = (opt: { file: UploadFileInfo; fileList: UploadFileInfo[] }) => {
  fileInfo = opt.file;
};
const onConfirm = async () => {
  if (fileInfo == null) {
    Msg.warning('至少要选择一个文件');
    return;
  }
  const formData = new FormData();
  formData.append(fileInfo.name, fileInfo.file!);
  const { status, message } = await options.query.api(formData);
  uploadRef.value?.clear();
  fileInfo = null;
  if (status != 'success') {
    Dialog.errorApi(message);
    return;
  }
  options.onSuccess && options.onSuccess();
  modalApi.destroy();
};
const onCancel = () => {
  modalApi.destroy();
};
</script>

<template>
  <n-card :bordered="false" size="small" aria-modal="true">
    <n-upload ref="uploadRef" :multiple="false" accept=".xls,.xlsx" :max="1" @change="handleChange">
      <n-upload-dragger>
        <div style="margin-bottom: 12px">
          <n-icon size="48" :depth="3">
            <ArchiveIcon />
          </n-icon>
        </div>
        <n-text style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </n-text>
      </n-upload-dragger>
    </n-upload>
    <template #footer>
      <n-flex justify="start">
        <n-button type="info" @click="onConfirm">确认</n-button>
        <n-button type="default" @click="onCancel">取消</n-button>
      </n-flex>
    </template>
  </n-card>
</template>
