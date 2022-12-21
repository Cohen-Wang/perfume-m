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
		<n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
			<template #footer>
				<n-button @click="router.push('/')">返回首页</n-button>
			</template>
		</n-result>
	</div>
</template>
