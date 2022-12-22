import { defineStore } from 'pinia'
import { local } from '@/utils/storeUtil'
// +--------------------------------------------------
// | 用户
// +--------------------------------------------------
export default defineStore('layout', {
  state: () => {
    return {
      collapsed: local.get('collapsed') || false
    }
  },
  getters: {

  },
  actions: {
    setCollapsed(payload: any) {
      this.collapsed = payload
      local.set({
        name: 'collapsed',
        content: payload
      })
    }
  }
})
