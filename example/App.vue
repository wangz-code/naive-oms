<script setup lang="ts">
import {
  NCard,
  NConfigProvider,
  NDialogProvider,
  NMessageProvider,
  NNotificationProvider,
  NTabPane,
  NTabs,
  enUS,
  zhCN,
} from 'naive-ui';
import { ref } from 'vue';
import { Table } from './table';
const local = ref('zh-CN');
</script>
<template>
  <n-config-provider :local="local == 'zh-CN' ? zhCN : enUS" class="w-full h-full">
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <n-card title="示例">
            <n-tabs type="line" animated>
              <n-tab-pane name="table测试" tab="table">
                <Table></Table>
              </n-tab-pane>
            </n-tabs>
          </n-card>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
