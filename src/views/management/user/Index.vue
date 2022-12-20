<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { IUser } from '@/type/interface/user'
import { DEFAULT_COLUMNS, DEFAULT_TABLE_DATA } from '@/constants/user'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
const columns: DataTableColumns<IUser> = DEFAULT_COLUMNS
const tableData: IUser[] = DEFAULT_TABLE_DATA
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
