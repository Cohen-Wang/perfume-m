<script lang="ts" setup>
import { h } from 'vue'
import { NButton } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { DEFAULT_COLUMNS, DEFAULT_TABLE_DATA } from '@/constants/user'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
type Song = {
  no: number
  title: string
  length: string
}
const columns: DataTableColumns<Song> = DEFAULT_COLUMNS
const tableData: Song[] = DEFAULT_TABLE_DATA
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
</script>

<template>
  <n-data-table
      :columns="columns"
      :data="tableData"
      bordered
  />
</template>
