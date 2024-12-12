<script setup lang="ts">
import { NButton } from 'naive-ui';
import type { Depth } from 'naive-ui/es/icon/src/Icon';
import { type Component } from 'vue';
import { OmsIcon } from '../../icon';

type IProps = {
  icon: string | Component;
  isize?: number | string;
  idepth?: Depth;
  icolor?: string;
};
const { icon, isize, icolor, idepth } = defineProps<IProps>();
</script>
<template>
  <n-button v-bind="$attrs">
    <template #icon>
      <oms-icon v-bind="{ component: icon, size: isize, depth: idepth, color: icolor }" />
    </template>
    <slot></slot>
  </n-button>
</template>
