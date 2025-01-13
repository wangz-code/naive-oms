<template>
  <div class="relative" id="drawer-target">
    <n-scrollbar style="height: calc(100vh - 88px)">
      <div style="margin: 0.5rem">
        <slot></slot>
        <div v-show="slotFooter" class="footer" style="position: sticky; bottom: 10px">
          <slot name="footer"></slot>
        </div>
      </div>
    </n-scrollbar>
  </div>
</template>
<script setup>
import { NScrollbar } from 'naive-ui';
import { useSlots, computed } from 'vue';
const slots = useSlots();
const slotFooter = computed(() => !!slots.footer);
</script>
