<script lang="ts" setup>
import { h } from 'vue'
import { NButton } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
type Song = {
  no: number
  title: string
  length: string
}

const columns: DataTableColumns<Song> = [
  {
    title: 'ID',
    key: 'no'
  },
  {
    title: '用户名',
    key: 'title'
  },
  {
    title: '姓名',
    key: 'length'
  },
  {
    title: '操作',
    key: 'actions',
    render (row) {
      return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => {
              alert(row.key)
            }
          },
          { default: () => 'Play' }
      )
    }
  }
]

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
</script>

<template>
  <n-data-table
      :columns="columns"
      :data="data"
      bordered
  />
</template>
