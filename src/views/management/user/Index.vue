<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { IUser } from '@/type/interface/user'
import { DEFAULT_COLUMNS, DEFAULT_TABLE_DATA } from '@/constants/user'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
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
</script>

<template>
  <!-- 控制栏 -->
  <div class="p-1 test-border mb-3">
    <n-button type="info">新增</n-button>
  </div>
  <!-- 表格 -->
  <n-data-table
      :columns="columns"
      :data="tableData"
      style="height: 500px;"
      flex-height
      bordered
  />
</template>
