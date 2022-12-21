<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
const router: Router = useRouter()
</script>

<template>
	<div class="w-full h-screen bg-green-50 flex items-center justify-center">
		<n-result status="500" title="500 服务器错误" description="服务器出错可能说明该雇更多程序员了">
			<template #footer>
				<n-button @click="router.push('/')">返回首页</n-button>
			</template>
		</n-result>
	</div>
</template>
