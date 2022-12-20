<script lang="ts" setup>
import {ref} from 'vue'
// +--------------------------------------------------
// | data
// +--------------------------------------------------

// +--------------------------------------------------
// | methods
// +--------------------------------------------------
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;" class="bg-amber-100">
      海淀桥
    </n-layout-sider>
    <n-layout>
      <n-layout-header class="bg-red-200">颐和园路</n-layout-header>
      <n-layout-content>
        <router-view/>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
