// eslint-disable-next-line
import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

export default {

  getList: (params: any = {}) => {
    const url = `/conception/list`
    return getAction(url, params)
  }
}
