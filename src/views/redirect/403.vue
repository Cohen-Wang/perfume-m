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
		<n-result status="403" title="403 禁止访问" description="总有些门是对你关闭的">
			<template #footer>
				<n-button @click="router.push('/')">返回首页</n-button>
			</template>
		</n-result>
	</div>
</template>
