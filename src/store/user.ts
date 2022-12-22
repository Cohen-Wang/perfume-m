import { defineStore } from 'pinia'
// +--------------------------------------------------
// | 用户
// +--------------------------------------------------
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {
        name: '放入大饭店'
      }
    }
  },
  getters: {

  },
  actions: {

  }
})
