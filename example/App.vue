<script setup lang="ts">
import {
  NButton,
  NCard,
  NConfigProvider,
  NDialogProvider,
  NMessageProvider,
  NModalProvider,
  NNotificationProvider,
  NTabPane,
  NTabs,
  dateEnUS,
  dateZhCN,
  enUS,
  zhCN,
} from 'naive-ui';
import * as Modals from './modal';
import * as Tabls from './tables';
import * as Forms from './form';
import { computed, ref } from 'vue';
const Comps = { ...Tabls, ...Modals, ...Forms };
const lang = ref(true);
const config = ref({
  locale: computed(() => (lang.value ? zhCN : enUS)),
  dateLocale: computed(() => (lang.value ? dateZhCN : dateEnUS)),
});
</script>
<template>
  <n-config-provider v-bind="config" class="w-full h-full">
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <n-modal-provider>
            <n-card title="示例" size="small">
              <template #header-extra>
                <n-button @click="lang = !lang">中文/English</n-button>
              </template>
              <n-tabs type="line" animated>
                <n-tab-pane v-for="(item, idx) in Comps" :name="idx" :tab="idx">
                  <component :is="item"></component>
                </n-tab-pane>
              </n-tabs>
            </n-card>
          </n-modal-provider>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
