// eslint-disable-next-line
import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

export default {

  getBarList: (params: any = {}) => {
    const url = `home/bar`
    return getAction(url, params)
  },

  getCommentList: (params: any = {}) => {
    const url = `comment/list`
    return getAction(url, params)
  },

  getLineList: (params: any = {}) => {
    const url = `home/line`
    return getAction(url, params)
  },

  getPieList: (params: any = {}) => {
    const url = `home/pie`
    return getAction(url, params)
  }

}
