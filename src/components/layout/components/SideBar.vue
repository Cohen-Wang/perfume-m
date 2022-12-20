<script lang="ts" setup>
import { defineComponent, h, Component } from 'vue'
import { NIcon, useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon
} from '@vicons/ionicons5'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'home',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '首页' }
        ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '管理',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '角色',
        key: '2',
				icon: renderIcon(BookIcon),
      },
			{
				label: '用户',
				key: '1',
				icon: renderIcon(BookIcon),
			}
    ]
  }
]
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
const handleUpdateValue = (key: string, item: MenuOption): void => {
  // message.info('[onUpdate:value]: ' + JSON.stringify(key))
  // message.info('[onUpdate:value]: ' + JSON.stringify(item))
}
</script>

<template>
  <n-menu
		:options="menuOptions"
		@update:value="handleUpdateValue"
	/>
</template>
