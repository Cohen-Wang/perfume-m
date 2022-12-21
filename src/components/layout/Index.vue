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
    <n-layout-header bordered>
      <NavBar />
    </n-layout-header>
    <n-layout has-sider>
      <!-- 左边 -->
      <n-layout-sider
				collapse-mode="width"
				:width="240"
				show-trigger="arrow-circle"
				bordered
			>
        <SideBar />
      </n-layout-sider>
      <!-- 右边 -->
      <n-layout-content>
        <div class="bg-gray-50 p-3 main-height">
					<!-- 面包屑 -->
					<div class="mb-3">
						<n-breadcrumb>
							<n-breadcrumb-item>
								<n-icon :component="BookIcon" /> <span>香水味管理平台</span></n-breadcrumb-item>
							<n-breadcrumb-item>
								<n-icon :component="BookIcon" /> <span>管理</span></n-breadcrumb-item>
							<n-breadcrumb-item>
								<n-icon :component="BookIcon" /> <span>用户</span></n-breadcrumb-item>
						</n-breadcrumb>
					</div>
					<!-- 视图 -->
          <router-view/>
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>
.main-height {
	height: calc(100vh - 75px);
	overflow-y: auto;
}
</style>