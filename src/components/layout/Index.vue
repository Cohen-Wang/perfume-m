<script lang="ts" setup>
import {ref} from 'vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
// +--------------------------------------------------
// | data
// +--------------------------------------------------

// +--------------------------------------------------
// | methods
// +--------------------------------------------------
</script>

<template>
  <n-layout>
    <!-- 头部 -->
    <n-layout-header class="shadow">
      <NavBar></NavBar>
    </n-layout-header>
    <n-layout has-sider>
      <!-- 左边 -->
      <n-layout-sider>
        <SideBar></SideBar>
      </n-layout-sider>
      <!-- 右边 -->
      <n-layout-content>
        <div class="bg-gray-100 p-3">
          <router-view/>
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
