<template>
  <div class="relative" id="drawer-target">
    <n-scrollbar style="height: calc(100vh - 88px)">
      <div style="margin: 0.5rem">
        <slot></slot>
        <div v-show="slotFooter" style="position: sticky; bottom: 10px">
          <n-card size="small" class="page-wrapper-footer">
            <slot name="footer"></slot>
          </n-card>
        </div>
      </div>
    </n-scrollbar>
  </div>
</template>
<script setup>
import { NScrollbar, NCard } from 'naive-ui';
import { useSlots, computed } from 'vue';
const slots = useSlots();
const slotFooter = computed(() => !!slots.footer);
</script>

<style scoped>
.page-wrapper-footer {
  margin-top: -5px;
  border-top: 1px var(--n-border-color) dashed;
}
</style>
