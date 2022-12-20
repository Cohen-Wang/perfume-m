<script lang="ts" setup>
import {ref} from 'vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import { BookOutline as BookIcon } from '@vicons/ionicons5'
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
					<!-- 面包屑 -->
					<div class="mb-3">
						<n-breadcrumb>
							<n-breadcrumb-item>
								<n-icon :component="BookIcon" /> 北京总行</n-breadcrumb-item>
							<n-breadcrumb-item>
								<n-icon :component="BookIcon" /> 天津分行</n-breadcrumb-item>
							<n-breadcrumb-item>
								<n-icon :component="BookIcon" /> 平山道支行</n-breadcrumb-item>
						</n-breadcrumb>
					</div>
					<!-- 视图 -->
          <router-view/>
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
