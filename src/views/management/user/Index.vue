<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useNotification } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { IUser } from '@/type/interface/user'
import { DEFAULT_COLUMNS, DEFAULT_TABLE_DATA } from '@/constants/user'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
// 辅助
const notification = useNotification()
// 数据
const columns: DataTableColumns<IUser> = DEFAULT_COLUMNS
const tableData: IUser[] = reactive([])
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
  setTimeout(() => {
    tableData.push(...DEFAULT_TABLE_DATA)
  }, 1000)
}
// 点击新增
const onAddClick = (): void => {
  notification.info({
    title: '123',
    content: '333333333',
    duration: 2000
  })
}
</script>

<template>
  <!-- 控制栏 -->
  <div class="p-3 mb-3 bg-white rounded shadow">
    <n-button type="info" @click="onAddClick">新增</n-button>
  </div>
  <!-- 表格 -->
  <div class="p-3 mb-3 bg-white rounded shadow">
		<n-data-table
			:columns="columns"
			:data="tableData"
			style="height: 500px;"
			flex-height
			bordered
		/>
	</div>
</template>
