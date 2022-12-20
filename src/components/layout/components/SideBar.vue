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
    label: () =>
        h(
            'a',
            {
              href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              target: '_blank',
              rel: 'noopenner noreferrer'
            },
            '且听风吟'
        ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
    disabled: true
  },
  {
    label: '管理',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '角色',
        key: 'the-past-increases-the-future-recedes'
      },
			{
				label: '用户',
				key: 'the-past-increases-the-future-recedes'
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
