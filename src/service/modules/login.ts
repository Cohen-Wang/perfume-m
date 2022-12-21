import { getAction, postAction } from '@/service/apiServer'

export default {

  /**
   * 退出登录
   * @param params
   */
  logout: (params: any = {}) => {
    const url = `/logout`
    return getAction(url, params)
  }
}
