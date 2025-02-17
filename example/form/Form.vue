<template>
  <oms-page-wrapper>
    <n-card :border="false">
      <template #header>
        <n-page-header @back="handleBack">
          <template #title> 标题 </template>
        </n-page-header>
      </template>
      <div>这里就是普通的 card</div>
    </n-card>
    <template #footer>
      <n-flex>
        <n-flex class="w-full">
          <n-button type="primary">提交数据</n-button>
        </n-flex>
      </n-flex>
    </template>
  </oms-page-wrapper>
</template>

<script lang="ts" setup>
import { NButton, NCard } from 'naive-ui';
import { OmsPageWrapper } from '../../src';

const handleBack = () => {};
</script>
