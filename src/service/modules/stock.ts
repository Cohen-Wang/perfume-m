// eslint-disable-next-line
import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

export default {
  getList: (params: any = {}) => {
    const url = `/stock/list`
    return getAction(url, params)
  },

  getDailyHis: (params: any = {}) => {
    const url = `/stock/getDailyHis`
    return getAction(url, { params })
  },


}
