<template>
  <n-space vertical>
    <n-card v-for="child in auths" :key="child.moduleNo" :title="child.title" size="small" :bordered="false">
      <div v-for="uri in child.functionList" :key="uri.functionPath">
        <n-checkbox :value="uri.functionPath" :label="uri.functionCaption"> </n-checkbox>
      </div>
      <n-space size="small" class="mt-2">
        <n-button size="small" @click="selectAll(child.functionList)"> {{ localeRef.selectAll }} </n-button>
        <n-button size="small" @click="selectNone(child.functionList)"> {{ localeRef.selectNone }} </n-button>
      </n-space>
    </n-card>
  </n-space>
</template>

<script lang="ts" setup>
import useLocale from '#/_mixins/use-locale';
import { type AuthData, type Uri } from '#/index';
import { NSpace, NCard, NCheckbox, NButton } from 'naive-ui';

const emit = defineEmits(['selectAll', 'selectNone']);
defineProps<{
  auths: AuthData[];
}>();

const { localeRef } = useLocale('global');

const selectAll = (uris: Uri[]) => emit('selectAll', uris);
const selectNone = (uris: Uri[]) => emit('selectNone', uris);
</script>
