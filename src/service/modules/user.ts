// eslint-disable-next-line
import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

const pathname: string = 'user'

export default {

  /**
   * 分页获取用户数据
   * @param params
   */
  getList: (params: any = {}) => {
    const url = `/${pathname}/list`
    return getAction(url, { params })
  },

  /**
   * 获取单个用户数据
   * @param id
   */
  get: (id: any) => {
    const url = `/${pathname}/${id}`
    return getAction(url)
  },

  /**
   * 新增
   * @param params
   */
  add: (params: any = {}) => {
    const url = `/${pathname}`
    return postAction(url, params)
  },

  /**
   * 修改
   * @param params
   */
  update: (params: any = {}) => {
    const url = `/${pathname}/${params.id}`
    return putAction(url, params)
  },

  /**
   * 删除
   * @param params
   * post和put的第二个参数直接为data，第三个参数为config，但是delete第二个参数为config，所以传值时需要借助config中data字段，用data携带过去
   */
  delete: (params: any = {}) => {
    const url = `/${pathname}`
    const config = {
      data: params
    }
    return deleteAction(url, config)
  }

}
