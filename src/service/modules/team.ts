// eslint-disable-next-line
import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

export default {

  /**
   * 获取列表
   * @param params
   */
  getList: (params: any = {}) => {
    const url = `/team/list`
    return getAction(url, { params })
  },

  /**
   * 获取单个
   * @param id
   */
  get: (id: string) => {
    const url = `/team/${id}`
    return getAction(url)
  },

  /**
   * 新增
   * @param params
   */
  add: (params: any = {}) => {
    const url = `/team`
    return postAction(url, params)
  },

  /**
   * 修改
   * @param params
   */
  update: (params: any = {}) => {
    const url = `/team/${params._id}`
    return putAction(url, params)
  },

  /**
   * 删除
   * @param params
   * post和put的第二个参数直接为data，第三个参数为config，但是delete第二个参数为config，所以传值时需要借助config中data字段，用data携带过去
   */
  delete: (params: any = {}) => {
    const url = `/team`
    const config = {
      data: params
    }
    return deleteAction(url, config)
  }
}
