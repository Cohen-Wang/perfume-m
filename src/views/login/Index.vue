<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'
import type { FormInst, FormRules } from 'naive-ui'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
// 路由
const router: Router = useRouter()
// 表单
const form = reactive({
	username: '',
	password: ''
})
const rules: FormRules = {
	username: [
		{ required: true, message: '请输入用户名', trigger: 'blur' }
	],
	password: [
		{ required: true, message: '请输入用户名', trigger: 'blur' }
	]
}
// DOM
const FormRef = ref<FormInst | null>(null)
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
// 点击确认
const onConfirmClick = (): void => {
	FormRef.value?.validate((errors: any) => {
		if (errors) return
		console.log('form', form)
		router.push('/management/user')
	})
}
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center login-bg">
		<div class="w-1/5 p-3 shadow-md bg-white rounded-xl">
			<!-- 标题 -->
			<n-divider dashed>登录</n-divider>
			<!-- 表单 -->
			<n-form ref="FormRef" :model="form" :rules="rules">
				<!-- 用户名 -->
				<n-form-item path="username" label="用户名">
					<n-input
						v-model:value="form.username"
						minlength="8"
						maxlength="30"
						show-count
						placeholder="请输入"
						@keydown.enter.prevent
					/>
				</n-form-item>
				<!-- 密码 -->
				<n-form-item path="password" label="密码">
					<n-input
						v-model:value="form.password"
						minlength="8"
						maxlength="30"
						show-count
						placeholder="请输入"
						@keydown.enter.prevent
					/>
				</n-form-item>
			</n-form>
			<n-button type="primary" class="w-full" @click="onConfirmClick">确认</n-button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.login-bg {
	background: #ececec url(../../assets/svg/login.svg) no-repeat center 100px/100% ;
}
</style>
