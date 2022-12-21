<script lang="ts" setup>
import { MailOutline  } from '@vicons/ionicons5'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
const options = [
	{
		label: '滨海湾金沙，新加坡',
		key: 'marina bay sands',
		disabled: true
	},
	{
		label: '布朗酒店，伦敦',
		key: "brown's hotel, london"
	},
	{
		label: '亚特兰蒂斯巴哈马，拿骚',
		key: 'atlantis nahamas, nassau'
	},
	{
		label: '比佛利山庄酒店，洛杉矶',
		key: 'the beverly hills hotel, los angeles'
	}
]
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
const handleSelect  = (key: string | number): void => {
	// message.info(String(key))
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
				<n-button text style="font-size: 20px" class="mr-3">
					<n-icon><MailOutline /></n-icon>
				</n-button>
				<span class="mr-3">你好，Cohen</span>
				<n-dropdown trigger="hover" :options="options" @select="handleSelect">
					<n-avatar
						size="small"
						round
						class="cursor-pointer"
						src="https://cohen_wang.gitee.io/resume/img/yingmuhuadao.6337eff1.jpg"
					/>
				</n-dropdown>
			</div>
		</div>
	</div>
</template>
