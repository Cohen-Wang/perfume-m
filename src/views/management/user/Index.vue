<script lang="ts" setup>
import { reactive, onMounted, ref, Ref } from 'vue'
import { useNotification } from 'naive-ui'
import { Add } from '@vicons/ionicons5'
import type { DataTableColumns, DataTableRowKey } from 'naive-ui'
import type { IUser } from '@/type/interface/user'
import { DEFAULT_COLUMNS } from '@/constants/user'
import { getList as getListApi } from '@/service/modules/user'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
// 辅助
const notification = useNotification()
const isLoading: Ref<boolean> = ref(false)
// 数据
const columns: DataTableColumns<IUser> = DEFAULT_COLUMNS
const tableData: IUser[] = reactive([])
const rowKey = (row: IUser) => row.id
// +--------------------------------------------------
// | onMounted
// +--------------------------------------------------
onMounted(() => {
  init()
})
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
// 初始化
const init = (): void => {
  getList()
}
// 请求列表数据
const getList = (): void => {
	isLoading.value = true
	getListApi().then((res: any) => {
		tableData.length = 0
		tableData.push(...res.data.data)
	}).finally(() => {
		isLoading.value = false
	})
}
// 点击新增
const onAddClick = (): void => {
  notification.info({
    title: '123',
    content: '333333333',
    duration: 2000
  })
}
const handleCheck = (rowKeys: DataTableRowKey[]): void => {
	console.log('rowKeys', rowKeys)
}
</script>

<template>
  <!-- 控制栏 -->
  <div class="p-3 mb-3 bg-white rounded shadow">
		<!-- 新增 -->
    <n-button type="info" :loading="isLoading" @click="onAddClick">
			<template #icon><n-icon><add /></n-icon></template><span>新增</span>
		</n-button>
  </div>
  <!-- 表格 -->
  <div class="p-3 mb-3 bg-white rounded shadow">
		<n-data-table
			:columns="columns"
			:data="tableData"
			:row-key="rowKey"
			:loading="isLoading"
			:single-line="false"
			style="height: calc(100vh - 250px);"
			flex-height
			:scroll-x="1800"
			striped
			@update:checked-row-keys="handleCheck"
		/>
	</div>
	<!-- 分页 -->
	<div class="flex justify-end">
		<n-pagination
			v-model:page="page"
			:page-count="100"
			size="medium"
			show-quick-jumper
			show-size-picker
		/>
	</div>
</template>
