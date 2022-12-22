<script lang="ts" setup>
import { h, Component } from 'vue'
import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { routes } from '@/router'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
const router: Router = useRouter()
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
const renderIcon = (icon: Component): any => {
	return () => h(NIcon, null, { default: () => h(icon) })
}

const getMenuOptions = (routes: any): any => {
	return routes.filter((item:any) => item.meta?.isShow)?.map((item: any) => {
		if (item.children?.length) {
			item.children = getMenuOptions(item.children)
		}
		return {
			...item.meta,
			...item,
			icon: renderIcon(item.meta?.icon)
		}
	})
}

const menuOptions: any = getMenuOptions(routes)
console.log('menuOptions', menuOptions)
// 点击事件
const handleUpdateValue = (key: string, item: MenuOption): void => {
  console.log(key, item)
	router.push({ name: item.name })
}
</script>

<template>
  <n-menu
		:options="menuOptions"
		default-expand-all
		:icon-size="16"
		@update:value="handleUpdateValue"
	/>
</template>
