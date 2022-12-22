import { defineStore } from 'pinia'
import { local } from '@/utils/storeUtil'
// +--------------------------------------------------
// | 用户
// +--------------------------------------------------
export default defineStore('layout', {
  state: () => {
    return {
      collapsed: local.get('collapsed') || false // 侧边栏折叠
    }
  },
  getters: {
    // ...
  },
  actions: {
    setCollapsed(payload: boolean) {
      this.collapsed = payload
      local.set({
        name: 'collapsed',
        content: payload
      })
    }
  }
})
