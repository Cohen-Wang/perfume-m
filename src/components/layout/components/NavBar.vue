<script lang="ts" setup>
import { useNotification } from 'naive-ui'
import { MailOutline  } from '@vicons/ionicons5'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
const notification = useNotification()
const options = [
	{ label: '个人中心', key: 'personalCenter'},
	{ label: '退出登录', key: 'logout' }
]
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
const handlePersonalCenter = (): void => {
	notification.error({ title: '暂未开发' })
}
const handleLogout = (): void => {
	notification.error({ title: '暂未开发' })
}
const config: any = {
	personalCenter: handlePersonalCenter,
	logout: handleLogout,
}
const handleSelect  = (key: string): void => {
	config[key]?.()
}
</script>

<template>
  <div class="px-3">
		<div class="flex justify-between items-center" style="height: 50px;">
			<!-- 左边 -->
			<div>
				<n-gradient-text type="info">
					<span class="text-2xl">Perfume</span>
				</n-gradient-text>
			</div>
			<!-- 右边 -->
			<div class="flex items-center">
				<div class="mr-10">
					<n-badge :value="300" max="99">
						<n-button text style="font-size: 20px">
							<n-icon><MailOutline /></n-icon>
						</n-button>
					</n-badge>
				</div>

				<span class="mr-3">你好，Cohen</span>
				<n-dropdown trigger="hover" :options="options" @select="handleSelect">
					<n-avatar
						size="small"
						class="cursor-pointer"
						src="https://cohen_wang.gitee.io/resume/img/yingmuhuadao.6337eff1.jpg"
					/>
				</n-dropdown>
			</div>
		</div>
	</div>
</template>
