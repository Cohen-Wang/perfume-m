// eslint-disable-next-line
import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

export default {

  /**
   * 角色列表
   * @param params
   */
  getList: (params: any = {}) => {
    const url = `role/list`
    return getAction(url, { params })
  },

  /**
   * 新增角色
   * @param params
   */
  add: (params: any = {}) => {
    const url = `/role`
    return postAction(url, params)
  },

  /**
   * 修改角色
   * @param params
   */
  update: (params: any = {}) => {
    const url = `/role/${params._id}`
    return putAction(url, params)
  },

  /**
   * 删除角色
   * @param params
   * post和put的第二个参数直接为data，第三个参数为config，但是delete第二个参数为config，所以传值时需要借助config中data字段，用data携带过去
   */
  delete: (params: any = {}) => {
    const url = `/role`
    const config = {
      data: params
    }
    return deleteAction(url, config)
  }
}
