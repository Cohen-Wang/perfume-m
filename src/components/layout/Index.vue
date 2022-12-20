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
    <n-layout-sider content-style="padding: 24px;">
      海淀桥
    </n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <router-view/>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
