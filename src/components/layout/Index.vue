<script lang="ts" setup>
import { HomeOutline } from '@vicons/ionicons5'
import useLayoutStore from '@/store/useLayoutStore'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
const layoutStore = useLayoutStore()
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
// 折叠侧边栏
const onCollapsedChange = (collapsed: boolean): void => {
	layoutStore.setCollapsed(collapsed)
}
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
				:collapsed="layoutStore.collapsed"
				collapse-mode="width"
				:width="240"
				show-trigger="arrow-circle"
				bordered
				@update:collapsed="onCollapsedChange"
			>
        <SideBar />
      </n-layout-sider>
      <!-- 右边 -->
      <n-layout-content>
        <div class="bg-gray-50 p-3 main-height">
					<!-- 面包屑 -->
					<div class="mb-3">
						<n-breadcrumb>
							<n-breadcrumb-item><n-icon :component="HomeOutline" /> <span>香水味管理平台</span></n-breadcrumb-item>
							<n-breadcrumb-item><span>管理</span></n-breadcrumb-item>
							<n-breadcrumb-item><span>用户</span></n-breadcrumb-item>
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